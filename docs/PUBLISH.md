# Soul collecter 공개 웹게임 배포

## GitHub Pages로 주소 만들기

소스 ZIP을 풀어 프로젝트 루트에 `package.json`, `src`, `public`, `.github/workflows/pages.yml`이 있도록 준비합니다. GitHub 저장소는 https://github.com/tama1232/Soul_collecter 입니다. 아래 절차는 다른 저장소에 복사하거나 새로 배포할 때 참고합니다.

1. GitHub에서 `soul-collecter`라는 공개 저장소를 만듭니다. 아래 예시 명령을 쓸 때는 README를 미리 만들지 않은 빈 저장소를 선택합니다.
2. 압축을 푼 소스 폴더에서 Git을 실행합니다. 주소의 `YOUR_NAME`은 본인 GitHub 아이디로 바꿉니다.

```bash
git init
git branch -M main
git add .
git commit -m "Add Soul collecter game"
git remote add origin https://github.com/YOUR_NAME/soul-collecter.git
git push -u origin main
```

3. 저장소의 **Settings → Pages → Build and deployment → Source → GitHub Actions**를 선택합니다.
4. **Actions → Check and publish GitHub Pages → Run workflow**를 실행합니다. main에 소스를 올릴 때도 자동 실행됩니다.
5. 완료 후 Pages 화면에 나오는 주소를 엽니다. 보통 `https://YOUR_NAME.github.io/soul-collecter/`입니다. 원래 저장소 Contract를 갱신하면 보통 `https://YOUR_NAME.github.io/Contract/`입니다. 실제 주소는 Actions의 deployment 결과를 기준으로 합니다.

기존 저장소를 바꿀 때는 위의 빈 저장소용 init 명령을 덮어 실행하지 말고, 그 저장소를 clone한 작업 브랜치에 파일을 복사해 변경 내용을 검토한 뒤 main에 병합합니다. 기존 파일과 기록을 강제로 삭제하거나 force push할 필요가 없습니다.

게임은 상대 URL로 자원을 불러오므로 `/soul-collecter/`처럼 하위 경로에서도 실행됩니다. 소스용 워크플로를 사용할 때 Pages에 `src/`만 올리거나 루트의 오래된 HTML을 올리면 안 됩니다. 빌드 결과 `dist/`가 배포 대상입니다.

## 빌드 ZIP만 공개하기

제공한 web ZIP은 압축을 풀었을 때 최상위에 index.html이 있는 배포 결과입니다. 이를 정적 호스팅의 공개 폴더에 넣으면 게임이 실행됩니다. GitHub에서는 별도 `gh-pages` 브랜치의 루트에 이 파일들을 올리고 Pages Source를 Deploy from a branch / gh-pages / root로 설정할 수도 있습니다. 이 방법과 위의 Actions 방식 중 하나를 선택합니다.

ZIP 파일 자체를 웹서버에 올리는 것으로는 실행되지 않습니다. ZIP 안의 파일을 풀어서 호스팅해야 합니다. HTML을 로컬 파일로 더블클릭하는 대신 HTTP/HTTPS 서버로 실행합니다.

## 온라인 계정·전체 순위·일요일 보상 켜기

정적 호스팅과 온라인 데이터 서버는 별도입니다. Firebase 프로젝트는 `soul-collecter-c2ba0`이며 웹 앱 설정이 `public/config.js`에 연결되어 있습니다. 이메일/비밀번호 로그인과 기본 데이터베이스는 생성되어 있고 데이터베이스 위치는 서울(`asia-northeast3`)입니다. 승인된 게임 도메인은 `tama1232.github.io`입니다.

Cloud Functions 배포 전에는 `functionsEnabled: false`로 두어 일반 로그인에서 배포되지 않은 개발자 API를 호출하지 않습니다. 주간 자동 보상·칭호 정산 및 개발자 코드 사용에는 Blaze 요금제와 Functions 배포가 필요합니다. 배포 후 `functionsEnabled: true`로 전환하고 다시 빌드합니다.

1. 본인 Firebase 프로젝트를 만들고 Authentication에서 Email/Password를 켭니다. Cloud Firestore를 생성합니다.
2. Firebase Console에서 웹 앱을 등록하고 `public/config.js`의 firebase.apiKey, firebase.projectId에 그 프로젝트 값을 넣습니다. 이 웹 설정은 공개 값입니다. 서비스 계정 키와 관리자 비밀번호는 클라이언트나 GitHub에 넣지 않습니다.
3. Authentication → Settings → Authorized domains에 본인 Pages 도메인(`YOUR_NAME.github.io`)을 추가합니다. 다른 호스팅을 사용하면 그 도메인을 추가합니다.
4. 개발자 계정은 기존 admins 문서 방식으로 만들지 않습니다. [개발자 등록 안내](DEVELOPER.md)에 따라 서버 초기 정보를 등록한 뒤 게임의 쿠폰 창에서 최초 코드를 사용합니다.
5. Node.js 22 환경에서 Firebase CLI를 설치·로그인하고 배포합니다. `YOUR_FIREBASE_PROJECT_ID`는 본인 프로젝트 ID로 바꿉니다.

```bash
npm install -g firebase-tools
firebase login
npm ci --prefix functions
firebase deploy --project YOUR_FIREBASE_PROJECT_ID --only firestore:rules,firestore:indexes,functions
```

6. [개발자 등록 안내](DEVELOPER.md)의 bootstrap 명령을 실행하여 최초 코드 해시와 배포 코드 무결성 기준을 등록합니다.
7. Cloud Scheduler에서 `weeklyLeaders` 작업이 생겼는지, 시간대가 Asia/Seoul인지 확인합니다. 스케줄은 `0 0 * * 0`입니다. Functions/Scheduler는 결제 연결(Blaze)과 해당 API 사용 설정이 필요하며 사용량에 따라 비용이 생깁니다.
8. 설정을 채운 클라이언트를 다시 빌드하고 GitHub main에 올립니다. 이후 Pages Actions가 갱신합니다.

Firebase Hosting을 대신 쓰려면 같은 프로젝트에서 아래 명령으로 dist도 올릴 수 있습니다.

```bash
npm run build
firebase deploy --project YOUR_FIREBASE_PROJECT_ID --only hosting
```

주간 함수는 직전 일요일 0시~이번 일요일 0시의 저장된 랭킹을 집계합니다. 주간 스토리 진행도·보스러쉬 종합·무한 종합·영혼 결정 최고 보유량의 각 1위에게 별의 나침반 2개를 기록합니다. 진행도/처치 수/층수가 같으면 해당 기록의 저주 단계가 높은 순, 소요 시간이 짧은 순으로 결정합니다. 스토리 시간 부문은 저주 단계가 높은 순, 같은 단계에서는 시간이 짧은 순입니다. 모든 비교 조건이 완전히 같으면 공동 1위 모두 받습니다. `weeklyAwards/UID/items/주차_부문`을 서버 트랜잭션으로 한 번만 만들므로 함수 재시도에도 중복 발급하지 않습니다. 게임은 이 계정의 8주 이내 지급 기록만 한 번의 조회로 읽어 저장된 수령 키와 비교합니다. 오프라인에 있던 이용자는 다음 접속 시 받습니다. 서버가 게임 화면을 열어두는 방식이 아닙니다.

같은 일요일 정산에서 역대 각 부문 1위 전용 칭호를 `rankTitleSeasons/YYYYMMDD`와 `rankTitles/current`에 기록합니다. 현재 주차의 1위만 칭호 선택 창에서 사용할 수 있고, 이전 보유자는 다음 일요일에 권한이 종료됩니다. 서버 전용 스냅샷을 쓰므로 가져온 세이브의 칭호 목록으로는 권한이 생기지 않습니다. 함수 재시도는 같은 주차 칭호 명단을 바꾸지 않고, 늦은 재시도가 새 주차를 덮지 않습니다. 새 랭킹의 저주/시간 메타데이터는 각 기록과 함께 저장하며, 패치 이전 기록의 저주 단계와 시간을 추측해 채우지 않습니다.

새 버전의 주차 키는 일요일 날짜 `YYYYMMDD`입니다. 이전 월요일 기준 주차 점수는 새 주간 경쟁으로 가져오지 않습니다. 과거 지급/수령 이력과 계정의 영구 진행도는 유지합니다.

공개 페이지에서 직접 유저 몇 명을 만들어 로그인·클라우드 저장·순위 제출을 확인하고, Firebase Emulator에서 일반 계정의 관리자 조회/지급 기록 쓰기가 거부되는지 확인하세요. 현재 제작 환경에는 사용자의 Firebase 인증이 연결되지 않아 서버 함수·규칙을 실제 프로젝트에 배포하지 않았습니다.

## 참고한 공식 문서

- GitHub Pages Source 설정: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- GitHub Pages Actions 워크플로: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- Firebase 예약 함수: https://firebase.google.com/docs/functions/schedule-functions
- Firebase 이메일 로그인: https://firebase.google.com/docs/auth/web/password-auth
- Firebase 보안 규칙: https://firebase.google.com/docs/firestore/security/rules-conditions
