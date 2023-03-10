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
    initials: "λΈνμ§", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: 'β',
            text: 'fueled by coffee'
        },
        {
            emoji: 'π',
            text: 'based in the KR'
        },
        {
            emoji: "πΌ",
            text: "unemployed"
        },
        {
            emoji: "π§",
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

    ],// μλνμΈμ! νμ§μλλ€. λ λ°±μλ κ°λ°μμΌ. μΈνκ³΅μμ λ¬Έλνμμ μ»΄ν¨ν°κ³΅νμ κ³΅λΆνμ΄. λλ μλ‘μ΄ κ²μ λλ €μ νμ§ μμ. μμΌλ‘λ λ ν° λ°μ μΌλ‘ μλ‘μ΄ κ²μ μ½κ² λ°μλ€μ΄κ³  μμ©ν  μ μλ μ¬λμ΄ νμνλ€κ³  μκ°ν΄. λ  κ³ μ©ν΄!
    bio: "μλνμΈμ. λΈνμ§μλλ€. λνκ΅μμ μ»΄ν¨ν°κ³΅νμ κ³΅λΆνμ΅λλ€. μ λ μλ‘μ΄ κ²μ λλ €μ νμ§ μμ΅λλ€! μμΌλ‘ μΈμμ λ ν° λ°μ μΌλ‘ μλ‘μ΄ κ²μ μ½κ² λ°μλ€μ΄κ³  μμ©ν  μ μλ μ¬λμ΄ νμνλ€κ³  μκ°ν©λλ€:)",
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
            emoji: 'ποΈ'
        },
        {
            label: 'playing tennis',
            emoji: 'πΎ'
        },
        {
            label: 'watching youtube',
            emoji: 'πΊ'
        },
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Ownway",
            info:'μ°λ¦¬κ° κ°λ λͺ¨λ  μ₯μ, Ownway.\n μΉκ΅¬νν μ°λ½νλ―μ΄, μμ μ΄ κ²½νν λͺ¨λ  λ¨Ήκ±°λ¦¬, λκ±°λ¦¬ λ±μ κ³΅μ ν  μ μμ΅λλ€.\nλν, λ€λ₯Έ μ¬λλ€μ΄ κ³΅μ ν μ₯μλ₯Ό λ³΄κ³  μ¬νμ κ³νν  μ μμ΅λλ€.',
            tag:'#ReactNative #Django #PostgreSQL #AWS #Github',
            live: "https://apps.apple.com/hr/app/ownway/id1621267794", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/onensix23/ownway", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "μμ μ μ  κ°κ²© κ²°μ \nμΉμ¬μ΄νΈ",
            info:'μμ μ μ  κ°κ²© κ²°μ μ λμμ£Όλ μΉμ¬μ΄νΈμλλ€. \nK-nearest neighbor algorithmμ μ΄μ©νμ¬ μμμ κ°κ²©μ μΆμ ν©λλ€.',
            tag:'#SpringFramework #Tomcat #Python #KNNalgorithm #Java',
            live: "https://youtu.be/i3_5CckkzTk",
            source: "https://github.com/rohhj622/AirbnbPricePrediction",
            image: mock2
        },
        {
            title: "μ°μ΅μ€ μμ½ μΉμ¬μ΄νΈ",
            info:'μ°μ΅μ€ μμ½μ λμμ£Όλ μΉμ¬μ΄νΈμλλ€. \nλΉμ λ€λλ μμ μ°μ΅μ€ λ¬Έμλ‘ μμ½νλ μμ€νμ λ νΈλ¦¬νκ² νκ³ μ κ°λ°νμμ΅λλ€. \nκΆνμ κ΄λ¦¬μ, μ μλ, μ¬μ©μλ‘ λλ μ§λ©° κ°μμ λ§λ κΈ°λ₯μ μ¬μ©ν  μ μμ΅λλ€.',
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