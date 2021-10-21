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

        "gallary":
        [
            "VR-FPS/ShowcasePics/Screenshot5.png",
            "VR-FPS/ShowcasePics/Untitled.png",
            "VR-FPS/ShowcasePics/Screenshot2.png",
            "VR-FPS/ShowcasePics/Screenshot3.png",
            "VR-FPS/ShowcasePics/Screenshot4.png",
        ],

        "content":
        [
            {
                "name":"Hunting",
                "text":"A showcase of some early work on Hunting and animal AI.",
                "image":"VR-FPS/HuntingBG.png",
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
        "name":"Polycrawler : Dungeon Crawler",
        "image":"PolyCrawler_BG.png",
        "video":"",
        "background":"PolyCrawler_BG.png",
        "link":"https://play.google.com/store/apps/details?id=com.Polynexx.PolycrawlerDungeonCrawler",
        "text":"A low poly turn based dungeon crawler, set in a fantasy world where you fight hoards of enemies until you either perish or reach the end.",
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

function GetLinksHTML(element, points, points2){
    return`
        <div class="LinkContainer">
            <div class="LinkContainerTop">
                <a class="LinkContainerTop" style="color: ${element["colour"]};">${element["name"]}</a>
            </div>

            <div class="LinkContainerBot" 
                style="clip-path: polygon(0% ${points[0]}%, 20% ${points[1]}%, 70% ${points[2]}%, 100% ${points[3]}%, 100% 100%, 0% 100%); 
                        background-color:${element['colour']};">
            </div>

            <div class="LinkContainerBot2" style="clip-path: polygon(0% ${points2[0]}%, 20% ${points2[1]}%, 70% ${points2[2]}%, 100% ${points2[3]}%, 100% 100%, 0% 100%);">
            </div>
            <input type="button" class="LinkContainerBot" onclick="window.open('${element["link"]}','_blank')" value="Visit">
        </div>
    `
}

function GetMainHTML(element, link, buttonText){
    return `
        <section class="Game">
            <img class="GameHolder" src="../Resources/${element["background"]}" alt="">
            <div class="GameHolderOverlay"></div>

            <div class="GameHolder">
                
                <div class="TitleHolder">
                    <a class="TitleHolder">${element["name"]}</a>
                </div>

                <div class="InfoHolder">               
                    <iframe style="${element["image"] == "" ? "" : "display:none;"}" class="InfoVideo" width="588" height="330" 
                        src="https://www.youtube-nocookie.com/embed/${element["video"]}" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="clipboard-write; encrypted-media; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                    <img class="InfoVideo" src="../Resources/${element["image"]}"  alt="" style="${element["image"] == "" ? "display:none;" : ""}" width="588" height="330">

                    <div class="InfoText">
                        <a class="InfoText">
                            ${element["text"]}
                        </a>

                        <input type="button" value="${buttonText}" class="InfoText" onclick="${link}",'_blank')">
                    </div>
                </div>
            </div>
        </section>  
    `
}

function GetSubHTML(content){
    let pics = ""
    content["gallary"].forEach(element => {
        pics += `<img class="Sub_Menu_Container_Content_Media" src="../Resources/${element}" alt="">`
    });


    return `
        <section class="Sub_Menu_Section">
            <img class="GameHolder" src="../Resources/${content["background"]}" alt="">
            <div class="GameHolderOverlay"></div>
            <div class="Sub_Menu_Container">

                <div class="Sub_Menu_Container_Title">
                    <a class="TitleHolder">${content["name"]}</a>
                </div>

                <div class="Sub_Menu_Container_Content">
                    <a class="Sub_Menu_Container_Content_Media">Media</a>
                    <div class="Sub_Menu_Container_Content_Media">
                        ${pics}
                    </div>
                </div>

                <div class="Sub_Menu_Container_Updates">

                    <div class="Sub_Menu_Container_Content_Updates">
                        <input class="Sub_Menu_Container_Content_Updates_Btns" value="<" type="button"  onclick="ChangeUpdate(true)">
                        
                        <div id="Sub_Menu_Container_Content_Update">
                            <p class="Sub_Menu_Container_Content_Update_Header">Weapon Showcase</p>
                            <img class="Sub_Menu_Container_Content_Update" src="../Resources/VR-FPS/weapons.jpg" alt="">
                            <p class="Sub_Menu_Container_Content_Update">${content["text"]}</p>
                            <input type="button" value="Visit" class="Sub_Menu_Container_Content_Update" onclick="window.open('https://www.youtube.com/watch?v=Yyer2_OreT4&t=2s','_blank')">
                        </div>
                        
                        <input class="Sub_Menu_Container_Content_Updates_Btns" value=">" type="button" onclick="ChangeUpdate(false)">
                    </div>
                </div>
                
                <p class="Sub_Menu_Container_Content_Description">
                    Low Poly Virtual Reality open world survival game that I am currently working on.
                </p>

            </div> 
        </section>
    `
}


function GetUpdatesText(content, index, anim){
    return `
        <div class="Sub_Menu_Container_Content_Update_ANIM" style="animation: ${anim} .5s ease-in-out;"> 
            <p class="Sub_Menu_Container_Content_Update_Header">${content["content"][index].name}</p>
            <img class="Sub_Menu_Container_Content_Update" src="../Resources/${content["content"][index].image}" alt="">
            <p class="Sub_Menu_Container_Content_Update">${content["content"][index].text}</p>
            <input type="button" value="Visit" class="Sub_Menu_Container_Content_Update" onclick="window.open('https://www.youtube.com/watch?v=${content["content"][index].video}','_blank')">
        </div>
    `
}