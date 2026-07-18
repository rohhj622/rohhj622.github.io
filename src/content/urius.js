// Urius case study content — bilingual { ko, en }.
// Facts sourced from the project's internal engineering wiki (/brain). Metrics are
// stated conservatively (route-file counts, internal engineering records) so every
// claim is defensible in an interview.

export const urius = {
  appStore: 'https://apps.apple.com/us/app/urius/id6749177407',

  hero: {
    badges: [
      { ko: 'App Store 출시', en: 'Live on App Store', kind: 'live' },
      { ko: '프로덕션 · iOS', en: 'Production · iOS', kind: 'plain' },
    ],
    tagline: {
      ko: '50m 격자 위에서 지금 이 순간을 나누는 위치기반 소셜 체크인 앱. BeReal의 즉각성을 지도로 옮겼습니다.',
      en: 'A location-based social check-in app that pins the present moment to a 50m map grid — BeReal’s immediacy, moved onto the map.',
    },
    lede: {
      ko: '혼자 만든 프로덕션 앱이지만, 실제로는 제가 직접 설계한 AI 에이전트 팀이 함께 만들었습니다. 이 케이스 스터디의 핵심은 “무엇을 만들었나”보다 “어떻게 혼자서 이 규모를 감당했나” — 에이전트를 도구에서 팀으로 키운 과정입니다.',
      en: 'It’s a production app I built alone — but really, an AI-agent team I designed built it with me. The heart of this case study isn’t what I shipped so much as how one person carried it: growing agents from a tool into a team.',
    },
    stack: 'React Native · Expo · Supabase · TypeScript · Kotlin native module',
    meta: [
      { label: { ko: '역할', en: 'Role' }, value: { ko: '1인 개발 + AI 에이전트 파이프라인 설계', en: 'Solo dev + designing the AI-agent pipeline' } },
      { label: { ko: '기간', en: 'Period' }, value: { ko: '2025–2026', en: '2025–2026' } },
    ],
  },

  glance: {
    stats: [
      { value: '38', label: { ko: '화면 (route)', en: 'route screens' } },
      { value: '86', label: { ko: 'DB 마이그레이션', en: 'DB migrations' } },
      { value: '7', label: { ko: '엣지 함수', en: 'edge functions' } },
      { value: '3', label: { ko: '보안 감사', en: 'security audits' } },
    ],
    note: {
      ko: 'React Native 0.81 · Expo SDK 54 (New Architecture) · Supabase (Postgres · RLS · Edge Functions · Storage) · TypeScript · React Query',
      en: 'React Native 0.81 · Expo SDK 54 (New Arch) · Supabase (Postgres · RLS · Edge Functions · Storage) · TypeScript · React Query',
    },
  },

  evolution: {
    heading: { ko: 'AI 에이전트 협업의 진화', en: 'Evolving how I work with AI agents' },
    intro: {
      ko: '혼자 만드는 프로덕션 앱에서, AI 에이전트를 단순 도구에서 하나의 팀으로 키운 과정입니다. 관통하는 원칙은 하나 — 사람의 수고와 거짓 신뢰(false confidence)를 계속 걷어내되, 딱 하나의 하드 게이트(main 병합 승인)만 남긴다.',
      en: 'How I grew AI agents from a tool into a team while shipping a production app solo. One principle runs through it: keep removing human toil and false confidence, but keep exactly one hard gate — approval to merge into main.',
    },
    stages: [
      {
        n: '01',
        title: { ko: '수동 · 초기 봇', en: 'Manual, then an early bot' },
        body: {
          ko: '모든 변경을 손으로. 초기 Discord 봇을 붙였지만 검증이 LLM 자기보고라 “완료”로 표시된 작업이 실제로는 전부 실패였다 — 승인이 결과가 아니라 계획만 통과시키던 “신뢰 역전”.',
          en: 'Everything by hand. An early Discord bot helped, but verification was LLM self-report — every task marked “done” was actually failing. Approval gated the plan, not the result: an inverted trust arrow.',
        },
      },
      {
        n: '02',
        title: { ko: '결정론적 검증 + 브랜치 격리', en: 'Deterministic checks + branch isolation' },
        body: {
          ko: 'LLM 자기보고를 폐기하고 tsc + i18n diff를 exit-code로 판정하는 결정론적 검증을 러너에 직접 넣었다. 구현은 agent/<task> 브랜치에서만, 검증 통과 후에야 diff 비교 카드가 뜨고 사람이 병합/폐기를 결정 — main은 오염되지 않는다.',
          en: 'Killed LLM self-report; put deterministic verification (tsc + i18n diff, judged by exit code) directly in the runner. Work happens only on an agent/<task> branch; a diff card appears after verification passes, and a human chooses merge or discard — main stays clean.',
        },
      },
      {
        n: '03',
        title: { ko: '목표 루프 + 역할 특화', en: 'Goal loops + role specialization' },
        body: {
          ko: '구현→검증을 목표 루프(최대 3회)로 돌리되 리뷰는 루프 밖에서 한 번만 실행해 토큰 낭비를 막았다. GPT(Codex)를 교차 리뷰어로 도입 — “쓰는 모델과 리뷰하는 모델이 같으면 맹점을 공유한다”.',
          en: 'Ran implement→verify as a goal loop (up to 3 attempts), but kept review outside the loop so retries don’t multiply cost. Added GPT (Codex) as a cross-vendor reviewer — if the same model writes and reviews, it shares its own blind spots.',
        },
      },
      {
        n: '04',
        title: { ko: '자율 멀티에이전트 파이프라인', en: 'Autonomous multi-agent pipeline' },
        current: true,
        body: {
          ko: '5개 역할·상주 데몬 1개로 정리. 권한을 물리적으로 분리(리뷰어는 read-only, 구현자는 시크릿·에이전트 설정 접근 deny)하고, 민감 경로/라인 변경은 결정론적 보안 트립와이어가 병합 카드에 🔒를 강제한다. 실행 기반을 공유하지 않는 shell watchdog(dead-man’s switch)이 멈춤·좀비를 감시하고, 저위험 작업은 자동 착수하되 병합만 승인 게이트로 남겼다.',
          en: 'Consolidated to 5 roles and a single resident daemon. Privileges are physically separated (reviewers read-only; the implementer is denied secrets and agent config), and a deterministic security tripwire forces a 🔒 on the merge card when sensitive paths or lines change. A shell watchdog that shares no runtime with the bot catches stalls and zombies, and low-risk work auto-starts — leaving merge as the only gate.',
        },
      },
    ],
    pipelineHeading: { ko: '지금의 파이프라인', en: 'The pipeline today' },
    pipeline: {
      steps: [
        { label: { ko: '요청', en: 'Request' } },
        { label: { ko: '트리아지', en: 'Triage' } },
        { label: { ko: '구현', en: 'Implement' }, sub: { ko: 'worktree', en: 'worktree' } },
        { label: { ko: '검증 ↺×3', en: 'Verify ↺×3' }, sub: { ko: '결정론적', en: 'deterministic' } },
        { label: { ko: '리뷰', en: 'Review' }, sub: { ko: 'Claude + GPT', en: 'Claude + GPT' } },
        { label: { ko: '병합', en: 'Merge' }, sub: { ko: '사람 ✅ 유일 게이트', en: 'human ✅ · only gate' }, gate: true },
        { label: { ko: 'main', en: 'main' } },
      ],
      note: {
        ko: '민감 경로·라인 변경 시 결정론적 보안 트립와이어가 병합 카드에 🔒를 강제합니다.',
        en: 'A deterministic security tripwire forces 🔒 on the merge card when sensitive paths or lines change.',
      },
    },
    rolesHeading: { ko: '에이전트 팀 — 5개 역할', en: 'The agent team — 5 roles' },
    roles: [
      { name: { ko: '인테이크 / 트리아지', en: 'Intake / triage' }, desc: { ko: '유일한 상주 데몬. 요청 분류 + 저위험 작업 자동 착수', en: 'The only resident daemon. Classifies requests, auto-starts low-risk work' }, priv: { ko: 'Discord · vault', en: 'Discord · vault' } },
      { name: { ko: '구현자', en: 'Implementer' }, desc: { ko: 'worktree에서 구현 → 결정론적 검증 목표 루프', en: 'Implements in a worktree → deterministic verify goal loop' }, priv: { ko: '쓰기 · 시크릿 deny', en: 'write · secrets denied' } },
      { name: { ko: '리뷰어 듀오', en: 'Reviewer duo' }, desc: { ko: 'Claude 코드 리뷰 + GPT(Codex) 교차 리뷰', en: 'Claude code review + GPT (Codex) cross-review' }, priv: { ko: 'read-only', en: 'read-only' } },
      { name: { ko: '보안 게이트', en: 'Security gate' }, desc: { ko: '결정론적 트립와이어 + 사후 보안 리뷰', en: 'Deterministic tripwire + post-hoc security review' }, priv: { ko: '병합 🔒 강제', en: 'forces 🔒 on merge' } },
      { name: { ko: '센티넬 + watchdog', en: 'Sentinels + watchdog' }, desc: { ko: '유지보수 · Figma 대조 · 주간 인사이트 + shell watchdog', en: 'Maintenance · Figma diff · weekly insight + a shell watchdog' }, priv: { ko: 'read + 노트', en: 'read + notes' } },
    ],
  },

  engineering: {
    heading: { ko: 'Engineering', en: 'Engineering' },
    intro: {
      ko: '아래 작업들도 위 파이프라인 위에서 구현·검증·리뷰했습니다. 기술 스택 자체보다, 혼자서 이 난도를 감당하게 해준 구조가 핵심입니다.',
      en: 'The work below was also implemented, verified, and reviewed on top of that pipeline. The point isn’t the stack itself — it’s the structure that let one person carry this difficulty.',
    },
    items: [
      {
        code: 'S1',
        title: { ko: '보안 엔지니어링', en: 'Security engineering' },
        body: {
          ko: '세 차례 방어적 보안 감사(내부 2회 + 외부 Codex 교차감사 대응 1회)를 라이브 프로덕션에 read-only로 실측. 위치 프라이버시는 3단계 모델 — 본인 한정 SELECT, 정밀 좌표는 pg_cron이 매일 자동 null 처리(격자 인덱스는 영구 보존), 좌표 범위 CHECK + 트리거로 체크인 무결성.',
          en: 'Three defensive audits (two internal + one external Codex cross-audit response), each verified read-only against live production. Location privacy is a 3-tier model: self-only SELECT, precise coordinates auto-nulled daily by pg_cron (grid index kept forever), and check-in integrity via a coordinate-range CHECK + trigger.',
        },
        note: {
          ko: '핵심 발견(P0): PostgreSQL에서 컬럼 단위 REVOKE는 테이블 GRANT가 살아있으면 무효 — 라이브에서 has_column_privilege로 두 번 검증하고 노출 경로를 좁혔다.',
          en: 'Key P0 finding: in PostgreSQL a column-level REVOKE is void while a table GRANT survives — verified twice live via has_column_privilege, then narrowed the exposure.',
        },
      },
      {
        code: 'S2',
        title: { ko: '커스텀 네이티브 모듈', en: 'Custom native module' },
        body: {
          ko: '“게시물에 소리 넣기”는 영상 오디오의 일부 구간만 추출해야 하는데, ffmpeg-kit가 Android 빌드를 깨뜨렸다. Android용 Expo 네이티브 모듈(Kotlin)을 직접 작성해 MediaExtractor→MediaMuxer로 재인코딩 없이 remux하고 PTS를 0으로 리베이스, iOS는 ffmpeg 유지 — 플랫폼 분기 추출.',
          en: 'Adding sound to a post means extracting a sub-range of a video’s audio, but ffmpeg-kit broke the Android build. I wrote a custom Expo native module in Kotlin that remuxes via MediaExtractor→MediaMuxer with no re-encode and rebases PTS to 0; iOS keeps ffmpeg — a platform-split extractor.',
        },
      },
      {
        code: 'S3',
        title: { ko: '코어 아키텍처 — 50m 격자', en: 'Core architecture — the 50m grid' },
        body: {
          ko: 'Web Mercator의 50m는 적도 기준이라 서울(위도 37.5°)에선 실제 지표면 40m로 찌그러진다. 고정 원점 + 위도 보정 스케일(1/cos φ)로 진짜 50m 정사각 격자를 만들고, 좌표를 격자 인덱스로 결정론적으로 매핑. 서버 상태는 React Query, 지도 마커는 viewport 캐시로 최적화.',
          en: 'Web Mercator’s 50m is equatorial, so at Seoul’s latitude (37.5°) it collapses to ~40m on the ground. A fixed origin plus a latitude-correction scale (1/cos φ) yields true 50m square cells, and coordinates map deterministically to a grid index. React Query holds server state; a viewport cache keeps map markers fast.',
        },
        snippet: {
          caption: { ko: 'utils/grid.ts — 위도 보정 격자', en: 'utils/grid.ts — latitude-corrected grid' },
          code: `// 위도 보정: 서울 위도에서 실제 지표면 50m가 되도록
const LAT_SCALE = 1 / Math.cos(CENTER_POINT.latitude * Math.PI / 180);
export const GRID_SIZE_METERS = 50 * LAT_SCALE;

export function getGridIndex(lat, lon) {
  const t = project(lat, lon);
  const dx = t.x - CENTER_METERS.x;
  const dy = t.y - CENTER_METERS.y;
  // CENTER_POINT가 (0,0) 중앙에 오도록 +0.5 오프셋
  const grid_x = Math.floor(dx / GRID_SIZE_METERS + 0.5 + 1e-10);
  const grid_y = Math.floor(dy / GRID_SIZE_METERS + 0.5 + 1e-10);
  return { grid_x, grid_y };
}`,
        },
      },
    ],
  },

  screens: {
    heading: { ko: 'Screens', en: 'Screens' },
    images: [
      { src: '/img/urius/00-map-grid.png', alt: { ko: '홈 지도 — 50m 격자 셀에 고정된 사진 마커', en: 'Home map — photos pinned to 50m grid cells' } },
      { src: '/img/urius/01-compose.png', alt: { ko: '격자에 게시물 작성 — 필드 사운드 추가', en: 'Composing a post pinned to a grid cell, with field sound' } },
      { src: '/img/urius/02-post-grid.png', alt: { ko: '격자 좌표에 고정된 게시물 상세', en: 'Post detail, pinned to a grid coordinate' } },
      { src: '/img/urius/03-profile-memory.png', alt: { ko: '프로필 — 격자별 메모리', en: 'Profile — memories grouped by grid cell' } },
      { src: '/img/urius/04-profile-books.png', alt: { ko: '프로필 — 북 / 체크인 탭', en: 'Profile — books and check-ins' } },
      { src: '/img/urius/05-collection-chat.png', alt: { ko: '컬렉션 채팅룸', en: 'A collection chat room' } },
    ],
  },

  closing: {
    heading: { ko: '무엇을 배웠나', en: 'What I took away' },
    body: {
      ko: '혼자서도 프로덕션 앱을 App Store까지 끌고 가려면, 결정론적 검증·권한 분리·단일 하드 게이트처럼 “신뢰를 구조로 만드는 것”이 개인의 성실함보다 오래 간다는 걸 배웠습니다. AI 에이전트는 그 구조 위에서만 팀이 됩니다.',
      en: 'Shipping a production app to the App Store solo taught me that turning trust into structure — deterministic checks, separated privileges, a single hard gate — outlasts personal diligence. AI agents only become a team on top of that structure.',
    },
  },
};
