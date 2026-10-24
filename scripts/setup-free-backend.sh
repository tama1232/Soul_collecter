#!/usr/bin/env bash
# Run from the reviewed Soul_collecter checkout in Google Cloud Shell or your terminal.
set -euo pipefail
TASK_PROJECT=soul-collecter-c2ba0
TASK_NUMBER=287603737833
TASK_REPO=tama1232/Soul_collecter
TASK_SA=soul-weekly@${TASK_PROJECT}.iam.gserviceaccount.com
cd "$(dirname "$0")/.."
command -v gcloud >/dev/null
command -v gh >/dev/null
command -v openssl >/dev/null
gh auth status
# No billing account is attached, no Blaze, Cloud Functions, Cloud Storage or paid export APIs.
TASK_BILLING=$(gcloud billing projects describe "$TASK_PROJECT" --format='value(billingEnabled)')
if [ "${TASK_BILLING,,}" = true ]; then
  echo '무료 전용 조건과 다릅니다. 결제 연결을 확인하세요.' >&2; exit 1
fi
gcloud services enable iam.googleapis.com iamcredentials.googleapis.com sts.googleapis.com monitoring.googleapis.com --project "$TASK_PROJECT"
if ! gcloud iam service-accounts describe "$TASK_SA" --project "$TASK_PROJECT" >/dev/null 2>&1; then
  gcloud iam service-accounts create soul-weekly --project "$TASK_PROJECT" --display-name='Soul free weekly maintenance'
fi
for TASK_ROLE in roles/datastore.user roles/monitoring.viewer; do
  gcloud projects add-iam-policy-binding "$TASK_PROJECT" --member="serviceAccount:$TASK_SA" --role="$TASK_ROLE" --condition=None >/dev/null
done
if ! gcloud iam workload-identity-pools describe soul-github --location=global --project "$TASK_PROJECT" >/dev/null 2>&1; then
  gcloud iam workload-identity-pools create soul-github --location=global --project "$TASK_PROJECT" --display-name='Soul GitHub Actions'
fi
TASK_CONDITION="assertion.repository_id == '1431696202' && assertion.repository == '$TASK_REPO' && assertion.ref == 'refs/heads/main' && assertion.workflow_ref == '$TASK_REPO/.github/workflows/free-maintenance.yml@refs/heads/main'"
if gcloud iam workload-identity-pools providers describe main-actions --workload-identity-pool=soul-github --location=global --project "$TASK_PROJECT" >/dev/null 2>&1; then
  gcloud iam workload-identity-pools providers update-oidc main-actions --workload-identity-pool=soul-github --location=global --project "$TASK_PROJECT" --issuer-uri=https://token.actions.githubusercontent.com --attribute-mapping='google.subject=assertion.sub,attribute.repository_id=assertion.repository_id' --attribute-condition="$TASK_CONDITION"
else
  gcloud iam workload-identity-pools providers create-oidc main-actions --workload-identity-pool=soul-github --location=global --project "$TASK_PROJECT" --issuer-uri=https://token.actions.githubusercontent.com --attribute-mapping='google.subject=assertion.sub,attribute.repository_id=assertion.repository_id' --attribute-condition="$TASK_CONDITION"
fi
gcloud iam service-accounts add-iam-policy-binding "$TASK_SA" --project "$TASK_PROJECT" --role=roles/iam.workloadIdentityUser --member="principalSet://iam.googleapis.com/projects/$TASK_NUMBER/locations/global/workloadIdentityPools/soul-github/attribute.repository_id/1431696202" >/dev/null
TASK_KEY_DIR="$HOME/soul-archive-private"
mkdir -p "$TASK_KEY_DIR";chmod 700 "$TASK_KEY_DIR"
if [ ! -f "$TASK_KEY_DIR/archive-private.pem" ]; then
  (umask 077;openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:3072 -out "$TASK_KEY_DIR/archive-private.pem")
fi
openssl pkey -in "$TASK_KEY_DIR/archive-private.pem" -pubout > "$TASK_KEY_DIR/archive-public.pem"
gh variable set ARCHIVE_PUBLIC_KEY --repo "$TASK_REPO" --body "$(cat "$TASK_KEY_DIR/archive-public.pem")"
npm ci --prefix functions --ignore-scripts
npm run build
npx --yes firebase-tools@15 deploy --only firestore:rules,firestore:indexes --project "$TASK_PROJECT" --config firebase.json
# ADC is required only for this operator bootstrap; GitHub uses short-lived OIDC.
if [ -z "${GOOGLE_APPLICATION_CREDENTIALS:-}" ]; then gcloud auth application-default login;fi
if [ -z "${SOUL_OWNER_CODE:-}" ]; then
  read -r -s -p '기존에 전달받은 최초 개발자 코드를 입력하세요 (화면에 표시되지 않음): ' SOUL_OWNER_CODE
  echo
fi
export SOUL_OWNER_CODE
node functions/bootstrap-owner.mjs "$TASK_PROJECT"
unset SOUL_OWNER_CODE
gh variable set FREE_BACKEND_READY --repo "$TASK_REPO" --body true
gh workflow run free-maintenance.yml --repo "$TASK_REPO" --ref main
printf '무료 백엔드 설정 완료. 복호화 비밀키를 안전하게 별도 보관하세요: %s\n' "$TASK_KEY_DIR/archive-private.pem"
printf 'GitHub Actions의 Free weekly awards and encrypted archive 작업이 성공했는지 확인하세요.\n'
