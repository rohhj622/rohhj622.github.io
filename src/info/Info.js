import self from '../img/self.png';
import mock1 from '../img/mock1.png';
import mock2 from '../img/mock2.png';
import mock3 from '../img/mock3.png';

export const info = {
  name: { ko: '노현진', en: 'Hyunjin Roh' },
  role: { ko: '개발자', en: 'Developer' },
  email: 'rhj0622@gmail.com',
  selfPortrait: self,

  tagline: {
    ko: '위치기반 소셜 앱 Urius를 기획부터 App Store 출시까지 혼자 만들었습니다.',
    en: 'I built Urius, a location-based social app, solo — from concept to the App Store.',
  },

  bio: {
    ko: '백엔드에서 출발해 React Native·Supabase까지 다루고, AI 에이전트로 개발 파이프라인을 설계하는 데 관심이 많습니다. 새로운 것을 빠르게 받아들여 구조로 만드는 일을 좋아합니다.',
    en: 'Starting from backend, I work across React Native and Supabase, and I’m especially interested in designing development pipelines with AI agents. I like picking up new things fast and turning them into structure.',
  },

  facts: [
    { ko: '대한민국 거주', en: 'Based in Korea' },
    { ko: '새로운 기회에 열려 있습니다', en: 'Open to new opportunities' },
  ],

  socials: [
    { link: 'https://github.com/rohhj622', icon: 'fa-github', label: 'github' },
    { link: 'https://www.linkedin.com/in/rohhyunjin622', icon: 'fa-linkedin', label: 'linkedin' },
  ],

  skills: {
    proficientWith: ['React Native', 'TypeScript', 'React', 'Supabase / PostgreSQL', 'Python / Django', 'JavaScript', 'Git'],
    exposedTo: ['Expo', 'Node.js', 'Kotlin', 'AWS', 'Java / Spring', 'MySQL', 'Oracle'],
  },

  // The other projects, shown as compact cards. Urius is the flagship case study (/urius).
  projects: [
    {
      title: { ko: 'Ownway', en: 'Ownway' },
      blurb: {
        ko: '우리가 가는 모든 장소. 친구에게 연락하듯 자신이 경험한 먹거리·놀거리를 공유하고, 다른 사람이 남긴 장소로 여행을 계획하는 앱.',
        en: 'Every place we go. Share the food and spots you’ve experienced like you’d text a friend, and plan trips from places others left behind.',
      },
      tags: ['React Native', 'Django', 'PostgreSQL', 'AWS'],
      live: 'https://apps.apple.com/hr/app/ownway/id1621267794',
      source: 'https://github.com/onensix23/ownway',
      image: mock1,
    },
    {
      title: { ko: '숙소 적정 가격 예측', en: 'Lodging price prediction' },
      blurb: {
        ko: 'K-최근접 이웃(KNN) 알고리즘으로 숙소의 적정 가격을 추정해 주는 웹사이트.',
        en: 'A web app that estimates a fair nightly price for lodging using the K-nearest-neighbor algorithm.',
      },
      tags: ['Spring', 'Tomcat', 'Python', 'Java'],
      live: 'https://youtu.be/i3_5CckkzTk',
      source: 'https://github.com/rohhj622/AirbnbPricePrediction',
      image: mock2,
    },
    {
      title: { ko: '연습실 예약', en: 'Practice-room booking' },
      blurb: {
        ko: '문자로만 예약하던 음악 연습실 예약을 웹으로 옮긴 서비스. 관리자·선생님·사용자 권한을 나눠 각자 기능을 제공.',
        en: 'Moved a music practice room’s text-message booking onto the web, with separate admin, teacher, and user roles.',
      },
      tags: ['Spring', 'Tomcat', 'Java', 'MySQL'],
      live: '',
      source: 'https://github.com/rohhj622',
      image: mock3,
    },
  ],
};
