import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Hyunjin",
    lastName: "Roh",
    initials: "노현진", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the KR'
        },
        {
            emoji: "💼",
            text: "unemployed"
        },
        {
            emoji: "📧",
            text: "rhj0622@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa-facebook',
        //     label: 'facebook'
        // },
        // {
        //     link: "https://instagram.com/i_am_famous_jin",
        //     icon: 'fa-instagram',
        //     label: 'instagram'
        // },
        {
            link: "https://github.com/rohhj622",
            icon: "fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/rohhyunjin622",
            icon: "fa-linkedin",
            label: 'linkedin'
        },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa-twitter",
        //     label: 'twitter'
        // }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],// 안녕하세요! 현진입니다. 난 백엔드 개발자야. 인하공업전문대학에서 컴퓨터공학을 공부했어. 나는 새로운 것을 두려워 하지 않아. 앞으로는 더 큰 발전으로 새로운 것을 쉽게 받아들이고 응용할 수 있는 사람이 필요하다고 생각해. 날 고용해!
    bio: "안녕하세요. 노현진입니다. 대학교에서 컴퓨터공학을 공부했습니다. 저는 새로운 것을 두려워 하지 않습니다! 앞으로 세상의 더 큰 발전으로 새로운 것을 쉽게 받아들이고 응용할 수 있는 사람이 필요하다고 생각합니다:)",
    bio_en: "Hello! I'm Hyunjin. I'm a backend developer. I studied computer engineering at Inha Technical College. I'm not afraid of new things. I think we need someone who can easily accept and apply new things with greater development in the future. Hire me!",
    skills:
        {
            proficientWith: ['python', 'django', 'react', 'postgresql','javascript', 'github'],
            exposedTo: ['aws', 'tomcat', 'nodejs', 'mysql', 'oracle', 'java', 'spring framework' ,'svn']
        }
    ,
    hobbies: [
        {
            label: 'weight training',
            emoji: '🏋️'
        },
        {
            label: 'playing tennis',
            emoji: '🎾'
        },
        {
            label: 'watching youtube',
            emoji: '📺'
        },
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Ownway",
            info:'우리가 가는 모든 장소, Ownway.\n 친구한테 연락하듯이, 자신이 경험한 모든 먹거리, 놀거리 등을 공유할 수 있습니다.\n또한, 다른 사람들이 공유한 장소를 보고 여행을 계획할 수 있습니다.',
            tag:'#ReactNative #Django #PostgreSQL #AWS #Github',
            live: "https://apps.apple.com/hr/app/ownway/id1621267794", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/onensix23/ownway", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "숙소 적정 가격 결정 웹사이트",
            info:'숙소 적정 가격 결정을 도와주는 웹사이트입니다. \nK-nearest neighbor algorithm을 이용하여 숙소의 가격을 추정합니다.',
            tag:'#SpringFramework #Tomcat #Python #KNNalgorithm #Java',
            live: "https://youtu.be/i3_5CckkzTk",
            source: "https://github.com/rohhj622/AirbnbPricePrediction",
            image: mock2
        },
        {
            title: "연습실 예약 웹사이트",
            info:'연습실 예약을 도와주는 웹사이트입니다. \n당시 다니던 음악 연습실 문자로 예약하는 시스템을 더 편리하게 하고자 개발하였습니다. \n권한은 관리자, 선생님, 사용자로 나눠지며 각자에 맞는 기능을 사용할 수 있습니다.',
            tag:'#SpringFramework #Tomcat #Java #MySQL',
            live: '',
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}