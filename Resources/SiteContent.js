const links = [
    {"colour":"#7388DC", "name":"Discord", "link":"https://discord.gg/2CBVyBPA"},
    {"colour":"white", "name":"playstore", "link":"https://play.google.com/store/apps/developer?id=Polynexx"},
    {"colour":"#FE0100", "name":"youtube", "link":"https://www.youtube.com/channel/UCvHiG9ZnD5xXVgLH3eRAClg"},
    {"colour":"#1A98E5", "name":"Twitter", "link":"https://twitter.com/nexx42_"},
    {"colour":"#9046FF", "name":"twitch", "link":"https://www.twitch.tv/nexx42_"},
    {"colour":"white", "name":"github", "link":"https://github.com/NeXx42"},
];


const PageContent = 
[
    {
        "type":"project", 
        "name":"VR FPS",
        "image":"VR-FPS/background.jpg",
        "video":"",
        "background":"VR-FPS/background.jpg",
        "text":"A project im currently working on which is a survival game based in vr.",
        "link":"",

        "content":
        [
            {
                "name":"Hunting",
                "text":"A showcase of some early work on Hunting and animal AI.",
                "image":"VR-FPS/HuntingBG",
                "video":"szovCEVkpQQ",
                "link":"https://www.youtube.com/watch?v=szovCEVkpQQ", 
            },
            {
                "name":"Early work on item durability / recycling",
                "text":"A showcase of some early work on item durability, repairing, and recycling.",
                "image":"VR-FPS/itemdurbg.png",
                "video":"X5Ty74YJLCk",
                "link":"https://www.youtube.com/watch?v=X5Ty74YJLCk", 
            },
            {
                "name":"Raiding Randomly Spawning Bases",
                "text":"A showcase of randomly spawning bases, and the ability to raid them for loot.",
                "image":"VR-FPS/raidingrandombases.png",
                "video":"Yyer2_OreT4",
                "link":"https://www.youtube.com/watch?v=Yyer2_OreT4", 
            },
            {
                "name":"Modular Attachments",
                "text":"A showcase of the ability to remove and attach attachments to weapons",
                "image":"VR-FPS/attach.png",
                "video":"b9VC2es_FCQ",
                "link":"https://www.youtube.com/watch?v=b9VC2es_FCQ",
            },
            {
                "name":"Monuments",
                "text":"A showcase of the Monuments i have been working on.<br> Also been working on consumable, and road side junk piles",
                "image":"VR-FPS/pic1.jpg",
                "video":"e9jAuhLQKms",
                "link":"https://www.youtube.com/watch?v=e9jAuhLQKms",
            },
            {
                "name":"Boats",
                "text":"A quick show case of boats that i had added to the game.",
                "image":"VR-FPS/1.jpg",
                "video":"MSKBRHVEqJE",
                "link":"https://www.youtube.com/watch?v=MSKBRHVEqJE",
            },
            {
                "name":"Weapon Showcase",
                "text":"A showcase of the weapons in the game.",
                "image":"VR-FPS/weapons.jpg",
                "video":"alGJ4-LnhYQ",
                "link":"https://www.youtube.com/watch?v=alGJ4-LnhYQ",
            },
            {
                "name":"Fire",
                "text":"Added the ability to smelt ores into their ingots and light fires.",
                "image":"VR-FPS/fire.jpg",
                "video":"5IP3EJ70v20",
                "link":"https://www.youtube.com/watch?v=5IP3EJ70v20",
            },
            {
                "name":"Dynamite",
                "text":"Added the ability to use dynamite to explode doors and other player built locations",
                "image":"VR-FPS/dynamite.jpg",
                "video":"Zhj_1nNYews",
                "link":"https://www.youtube.com/watch?v=Zhj_1nNYews",
            },
        ]
    },

    {
        "type":"games", 
        "name":"Poly Defence",
        "image":"Screenshot3.png",
        "video":"",
        "background":"unnamed.webp",
        "link":"https://play.google.com/store/apps/details?id=com.Polynexx.PolyDefence",
        "text":"The first game i have released.<br>A low poly styled tower defence game",
    },
];



function GetLinks() { return links }; 
function GetSiteContent() { return PageContent }; 
