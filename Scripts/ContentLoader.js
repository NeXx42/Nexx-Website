const maxDecalHeight1 = 15;
const minDecalHeight1 = 5;

const maxDecalHeight2 = 25;
const minDecalHeight2 = 15;

let currentIndex = 0;
let currentPageContent;

function GenerateLinks()
{
    var links = GetLinks();
    var holder = document.getElementById("LinkMainContainer");
    holder.innerHTML = "";

    links.forEach(element => {
        var points = [
            Math.random() * (maxDecalHeight1 - minDecalHeight1) + minDecalHeight1, 
            Math.random() * (maxDecalHeight1 - minDecalHeight1) + minDecalHeight1, 
            Math.random() * (maxDecalHeight1 - minDecalHeight1) + minDecalHeight1, 
            Math.random() * (maxDecalHeight1 - minDecalHeight1) + minDecalHeight1
        ]

        var points2 = [
            Math.random() * (maxDecalHeight2 - minDecalHeight2) + minDecalHeight2, 
            Math.random() * (maxDecalHeight2 - minDecalHeight2) + minDecalHeight2, 
            Math.random() * (maxDecalHeight2 - minDecalHeight2) + minDecalHeight2, 
            Math.random() * (maxDecalHeight2 - minDecalHeight2) + minDecalHeight2
        ]

        holder.innerHTML += GetLinksHTML(element, points, points2);
    });
}

function LoadSubPageContent(type, name){
    var content = GetSiteContent();

    var contentToDisplay = []
    var mainHTMLHolder = document.getElementById("GameContainer");
    var subHTMLHolder = document.getElementById("Sub_Menu");

    mainHTMLHolder.innerHTML = "";

    if(subHTMLHolder)
        subHTMLHolder.innerHTML = "";

    if(localStorage.defaultPage != null && localStorage.defaultPage != ""){

        PageContent.forEach(element => {
            if(element["name"] == localStorage.defaultPage){
                name = element["name"]
            }
        });
    }
    localStorage.defaultPage = "";

    if(name == "" || name == null){
        content.forEach(element => {
            if(element["type"] == type){
                contentToDisplay.push(element);
            }
        });

        contentToDisplay.forEach(element => {
            var link = element["link"] != "" ? `window.open('${element['link']}','_blank')` : `LoadSubPageContent('${element["type"]}', '${element["name"]}')`;
            var buttonText = element["link"] != "" ? "Visit" : "More";
            mainHTMLHolder.innerHTML += GetMainHTML(element, link, buttonText);
        });
    }
    else{
        
        PageContent.forEach(element => {
            if(element["type"] == type){
                if(element["name"] == name){
                    currentPageContent = element;
                    contentToDisplay = element["content"];
                }
            }
        });
        
        subHTMLHolder.innerHTML = GetSubHTML(currentPageContent);

        currentIndex = -1;
        ChangeUpdate(false)
    }
}

function ChangeUpdate(isPrev){
    let to = currentIndex

    if(isPrev == false)
        to++;
    else
        to--;

    to = Math.min(Math.max(0, to), currentPageContent.content.length - 1);

    if (to != currentIndex){
        currentIndex = to;

        var holder = document.getElementById("Sub_Menu_Container_Content_Update");
        holder.innerHTML = "";
        holder.innerHTML = GetUpdatesText(currentPageContent, currentIndex, isPrev ? "update_slideLeft" : "update_slideRight");

        Array.prototype.filter.call(document.getElementsByClassName("GameHolder"), function(pic){
            if(pic.nodeName === 'IMG'){
                pic.src = "../Resources/" + currentPageContent["content"][currentIndex].image;
            }
        });
    }
}


function LoadNotification(){
    var header = document.getElementById("Topbar_Notification")
    var style = localStorage.notification == 0 ? "none" : "" 

    Array.prototype.filter.call(document.getElementsByClassName("Topbar_Notification"), function(pic){
        if(pic.nodeName === 'P'){ 
            pic.innerHTML = GetNotificationText()["text"];
            pic.setAttribute('onclick',  `{${GetNotificationText()['link'].toString()}; RemoveNotification()}` );
            //pic.setAttribute('onclick',  `LoadSubPage("", "Polycrawler : Dungeon Crawler")`);
            console.log()
        }
    });

    header.style.display  = style;
}

function LoadSubPage(link, contentID){
    localStorage.defaultPage = contentID
    window.location.href = link
}