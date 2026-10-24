// Firebase 웹 앱 설정만 입력합니다. 서비스 계정 키나 관리자 비밀번호는 넣지 마세요.
// 비워 두면 계정/세이브는 이 브라우저에만 저장됩니다.
window.CONTRACT_CONFIG = Object.freeze({
  firebase: { apiKey: "AIzaSyAhCEIi27XVSMFYr5vF4K4tRrheCy62nKY", projectId: "soul-collecter-c2ba0" },
  emailDomain: "players.star-ledger.invalid",
  // 계정/저장/랭킹은 사용 가능. Functions 배포 후 true로 전환합니다.
  functionsEnabled: false,
  developerBackend: "spark",
  functionsRegion: "asia-northeast3",
  developerShortcut: "Control+Shift+F10",
});
