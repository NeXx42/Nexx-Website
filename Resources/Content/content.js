// images start from /images/
// showcase images are in a seperate dict because i can identify it unique an style accordinly 
// types = 0 - project, 1 - game, 2 - social


const socials =
[
    { 
        url:"https://www.youtube.com/@nexx42",
        img:"_Links/link_youtube.png",
        name:"Youtube",
    },
    { 
        url:"https://play.google.com/store/apps/developer?id=Polynexx",
        img:"_Links/link_playstore.png",
        name:"Playstore",
    },
    { 
        url:"https://twitter.com/nexx42_",
        img:"_Links/link_twitter.png",
        name:"Twitter",
    },
    { 
        url:"https://www.twitch.tv/nexx42_",
        img:"_Links/link_twitch.png",
        name:"Twitch",
    },
    { 
        url:"https://github.com/NeXx42",
        img:"_Links/link_github.png",
        name:"Github",
    },
]


const content =
[
    // ========================================================
    // ========================[VR FPS]========================
    // ========================================================
    
    {
        title:"VR FPS",
        bgColour:"#212423",
        type:0,
        description:"A project im currently working on which is a survival game based in vr.",

        image:[
            "VR-FPS/ShowcasePics/screenshot3.png",
            "VR-FPS/ShowcasePics/Untitled.png",
            "VR-FPS/ShowcasePics/screenshot2.png",
            "VR-FPS/ShowcasePics/screenshot4.png",
            "VR-FPS/ShowcasePics/screenshot5.png",
        ],

        tags:[
            "VR",
            "FPS",
            "Survival",
            "Low Poly",
        ],

        extraContent:
        [
            {
                title:"Hunting",
                description:"A showcase of some early work on Hunting and animal AI.",
                date:"Sep 16, 2021",
                media:[
                    {img:"VR-FPS/HuntingBG.png"},
                    {vid:"szovCEVkpQQ"},
                ]
            },
            {
                title:"durability And recycling",
                description:"A showcase of some early work on item durability, repairing, and recycling.",
                vid:"X5Ty74YJLCk",
                date:"Sep 6, 2021",
            },
            {
                title:"Raiding",
                description:"A showcase of randomly spawning bases, and the ability to raid them for loot.",
                vid:"Yyer2_OreT4",
                date:"Apr 13, 2021",
            },
            {
                title:"Modular Attachments",
                description:"A showcase of the ability to remove and attach attachments to weapons",
                vid:"b9VC2es_FCQ",
                date:"Apr 11, 2021",
            },
            {
                title:"Monuments",
                description:"A showcase of the Monuments i have been working on.<br> Also been working on consumable, and road side junk piles",
                vid:"e9jAuhLQKms",
                date:"Apr 8, 2021",
            },
            {
                title:"Boats",
                description:"A quick show case of boats that i had added to the game.",
                vid:"MSKBRHVEqJE",
                date:"Mar 1, 2021",
            },
            {
                title:"Weapon Showcase",
                description:"A showcase of the weapons in the game.",
                vid:"alGJ4-LnhYQ",
                date:"Feb 24, 2021",
            },
            {
                title:"Fire",
                description:"Added the ability to smelt ores into their ingots and light fires.",
                vid:"5IP3EJ70v20",
                date:"Feb 21, 2021",
            },
            {
                title:"Dynamite",
                description:"Added the ability to use dynamite to explode doors and other player built locations",
                vid:"Zhj_1nNYews",
                date:"Feb 19, 2021",
            },
        ]
    },

    // ========================================================
    // =====================[POLY CRAWLER]=====================
    // ========================================================

    {
        title:"Poly crawler",
        bgColour:"#243335",
        type:1,
        description:
        `
            A low poly fantasy style turn based dungeon crawler. Fight through hoards of varying enemies with different attacks, leaning the best way to tackle them while keeping as much health as possible.
            <br/>
            <br/>
            Each time you play can result in a drastically different experience with different types of loot, different amounts of enemies, and different leveling paths. Adapt your play style to find the most efficient way to beat the end boss.
        `,

        image:[
            "PolyCrawler/PolyCrawler_BG.png",
        ],

        showcaseImages:[
            { url:"M9FqbCX1s_k" },
            { name:"PolyCrawler/1.png" },
            { name:"PolyCrawler/2.png" },
            { name:"PolyCrawler/3.png" },
            { name:"PolyCrawler/4.png" },
            { name:"PolyCrawler/5.png" },
            { name:"PolyCrawler/6.png" },
            { name:"PolyCrawler/7.png" },
            { name:"PolyCrawler/8.png" },
        ],

        tags:[
            "Rouge Like",
            "Turn Based",
            "Survival",
            "Low Poly",
        ],

        btns:[
            { text:"Play", url:"https://play.google.com/store/apps/details?id=com.Polynexx.PolycrawlerDungeonCrawler", important:"" },
        ],

        extraContent:[
            { 
                title:"Update 2.0",
                date:"Nov 25, 2022",
                description:`<strong>Changelog:</strong>
    &#x2022; Complete UI Redesign,
    &#x2022; Separated classes,
    &#x2022; Added magical weapons and other weapon types,
    &#x2022; Added armour,
    &#x2022; Added shop,
    &#x2022; Redesigned how map sections are provided,
    &#x2022; Allowed support for attacks to target multiple opponents,
    &#x2022; Added new consumables,
    &#x2022; Allowed support for some weapons to be embued,
    &#x2022; Improved leveling process,
    &#x2022; Improved VFX for different moves and actions,
    &#x2022; Allowed support for round dependent afflictions `,
                media:[
                    {vid:"M9FqbCX1s_k"},
                    {img:"PolyCrawler/8.png", addPadding:true}
                ]
            },
            { 
                title:"Release",
                date:"Oct 24, 2021",
                description:"First Release of the game",
                img:"PolyCrawler/PolyCrawler_BG.png",
            },
        ]
    },

    // ========================================================
    // =====================[POLY DEFENSE]=====================
    // ========================================================

    {
        title:"Polydefense",
        bgColour:"#122d3c",
        type:1,
        description:`
        
            A simple tower defence that can be easily played at anytime. Super simple mechanics mean this is easy to learn.
            <br>
            <br>
            Game modes
            <br>
            • Infinite
            <br>
            • Classic - ( 10, 15, .., 40 ) Rounds
        
        `,

        image:[
            "PolyDefense/screenshot_1.webp",
            "PolyDefense/screenshot_2.webp",
            "PolyDefense/screenshot_3.webp",
            "PolyDefense/screenshot_4.webp",
            "PolyDefense/screenshot_5.webp",
            "PolyDefense/screenshot_6.webp",
            "PolyDefense/screenshot_7.webp",
        ],

        tags:[
            "Survival",
            "Low Poly",
        ],

        btns:[
            { text:"Install", url:"https://play.google.com/store/apps/details?id=com.Polynexx.PolyDefence", important:"" },
        ],

        extraContent:[
            { 
                title:"Release",
                date:"Nov 9, 2021",
                description:"First Release of the game",
                img:"PolyDefense/screenshot_1.webp",
            },
        ]
    }
]


// vr fps, poly crawler, poly defense
const homePageIDS = [0, 1, 2]