# 무료 전용 온라인 운영 (0.6.0)

게임 배포와 무료 백엔드 활성화는 별도입니다. 현재 Firebase 프로젝트는 Spark이며 결제 계정을 연결하지 않습니다. Cloud Functions, Cloud Storage, 유료 내보내기·TTL·PITR은 사용하지 않습니다. 무료 한도 초과 시 비용을 지불해 확장하지 않습니다.

## 한 번만 필요한 관리자 설정

이 브라우저에서는 Google Cloud IAM과 Cloud Shell 페이지가 `Site Unavailable`로 열리지 않아 인증 연결을 완료하지 못했습니다. 아래 스크립트는 준비되어 있지만, 운영 환경에서 실행·성공 확인 전에는 자동 정산/보관이 활성화된 것이 아닙니다.

본인 터미널 또는 Google Cloud Shell에서 저장소를 내려받고 검토한 뒤 실행합니다. Node 22 이상, gcloud, gh, OpenSSL이 필요합니다.

```sh
git clone https://github.com/tama1232/Soul_collecter.git
cd Soul_collecter
gh auth login
bash scripts/setup-free-backend.sh
```

스크립트는 결제 연결 여부를 확인하고, 두 가지 제한된 서비스 계정 권한(Firestore 데이터 작업, 용량 지표 읽기)을 설정합니다. GitHub 단기 OIDC 인증은 저장소 ID 1431696202 / main 브랜치 / 지정된 정산 워크플로에만 허용합니다. 장기 서비스 계정 비밀키는 발급하지 않습니다. Firestore 규칙·색인을 배포하고, 기존에 전달한 최초 개발자 코드를 비공개 입력으로 등록하며, 복호화용 RSA 비밀키를 본인 환경의 `~/soul-archive-private/archive-private.pem`에 만듭니다. 그 파일을 안전한 별도 장소에도 보관하세요. GitHub에는 공개키만 등록합니다.

마지막에 GitHub Actions의 `Free weekly awards and encrypted archive` 실행 결과가 성공인지 확인합니다. `FREE_BACKEND_READY=true`를 설정하기 전에는 예약 작업을 실행하지 않습니다. 운영 인증과 보안 규칙을 적용하기 전에는 게임에서 개발자 코드가 작동하지 않습니다.

## 실제 운영 방식

- 로그인/최신 저장/전체 랭킹: Firebase Auth + Firestore Spark. 개발자 코드는 1회 사용 원자적 배치로 등록하며 계정은 랭킹에서 제외합니다. 보조 개발자는 추가 개발자 발급과 계정 초기화 권한이 없습니다.
- 주간 4개 부문 보상과 역대 1위 칭호: 매주 일요일 이후 GitHub Actions가 서버 권한으로 집계합니다. 한국 시간 00:17에 매일 실행하며 완료 표식으로 중복 전체 조회를 피합니다. 지연·실패 시 다음 실행에서 재시도합니다. GitHub 예약 실행은 지연될 수 있어 정확히 00:00 실행을 보장하지 않습니다.
- 용량: 공식 `firestore.googleapis.com/storage/data_and_index_storage_bytes` 지표로 문서와 색인을 합산합니다. 무료 저장 한도 1GiB 중 **768MiB 이상(75%)**이면 보관을 시작합니다. 최신 지표가 없으면 원본을 지우지 않고 작업을 실패 처리합니다. 실시간 감시가 아니라 하루 한 번 검사입니다.
- 보관: AES-256-GCM 암호화와 RSA-OAEP-SHA256 키 래핑 후 `game-archive` 브랜치에 저장합니다. 원격 커밋에서 파일을 다시 읽어 SHA-256을 검증한 후에만 해당 원본을 정리합니다. 공개 저장소에도 평문 계정/세이브/비밀키를 올리지 않습니다.
- 정리 대상: 유저별 가장 최신 1건을 제외한 감사·플래그·무결성·개발자 작업 기록, 과거 칭호 시즌, 현재/직전 주를 제외한 랭킹 주간 필드. 작업당 삭제 1,800건, 일반 보관 조회 약 6,500건 이내로 제한하고 다음 날 이어갑니다. 주간 우승자 집계 조회는 별도입니다.
- 보존 대상: 유저별 최신 세이브, 역대 최고 기록, 현재/직전 주 랭킹, 미수령 보상, 개발자 권한/사용 코드/제재/쿠폰의 중복 사용 방지 기록. 필요한 권한/수령 영수증도 최신 계정 정보에 포함됩니다.
- 보관본은 Firebase 저장 용량에 포함되지 않습니다. GitHub `game-archive` 브랜치의 `status.json`에서 최근 성공 시각과 사용량을 확인할 수 있습니다. 작업 실패는 Actions에 표시됩니다.

최신 정보 자체가 75% 이상이거나 무료 읽기/쓰기 한도에 도달하면 모든 최신 계정을 유지한 채 정리가 중단될 수 있습니다. 무료 서비스는 무제한 저장소가 아니며, 무료 정책의 영구 유지를 외부 서비스 대신 보장할 수는 없습니다. 유료 전환은 자동으로 하지 않습니다. GitHub는 공개 저장소가 60일간 활동이 없으면 예약 작업을 비활성화할 수 있으므로 최근 성공 시각을 확인해야 합니다.

## 과거 기록 열기

`game-archive` 브랜치에서 원하는 `history/*.soul` 파일을 내려받습니다. 복호화 비밀키와 게임 소스가 있는 본인 컴퓨터에서 실행합니다.

```sh
node scripts/decrypt-archive.mjs /비공개/경로/archive-private.pem /받은/보관파일.soul /비공개/경로/history.json
```

복호화한 JSON에는 원본 문서 경로·버전·데이터가 들어 있습니다. 출력 파일을 공개 저장소에 커밋하지 마세요. 기존 출력 파일은 덮어쓰지 않습니다. 비밀키를 잃으면 보관본을 읽을 수 없습니다.

근거: [Firebase 무료 할당량](https://firebase.google.com/docs/firestore/quotas), [Firestore 용량 지표](https://docs.cloud.google.com/monitoring/api/metrics_gcp_d_h#firestore), [GitHub Actions 요금](https://docs.github.com/en/actions/concepts/billing-and-usage), [예약 작업 비활성화 조건](https://docs.github.com/en/actions/managing-workflow-runs/disabling-and-enabling-a-workflow), [Google OIDC 인증](https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-deployment-pipelines).
