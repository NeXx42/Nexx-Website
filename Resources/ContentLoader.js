const maxDecalHeight1 = 15;
const minDecalHeight1 = 5;

const maxDecalHeight2 = 25;
const minDecalHeight2 = 15;

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

        holder.innerHTML +=
        `
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
    });
}

function LoadSubPageContent(type, name){
    var PageContent = GetSiteContent();

    var contentToDisplay = []
    var holder = document.getElementById("GameContainer");

    if(name == "" || name == null){
        PageContent.forEach(element => {
            if(element["type"] == type){
                contentToDisplay.push(element);
            }
        });

        holder.innerHTML = "";
        contentToDisplay.forEach(element => {
            var link = element["link"] != "" ? `window.open('${element['link']}','_blank')` : `LoadSubPageContent('${element["type"]}', '${element["name"]}')`;
            var buttonText = element["link"] != "" ? "Visit" : "More";

            holder.innerHTML += 
            `
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
        });
    }
    else{
        var mainElement;

        PageContent.forEach(element => {
            if(element["type"] == type){
                if(element["name"] == name){
                    mainElement = element;
                    contentToDisplay = element["content"];
                }
            }
        });

        holder.innerHTML = "";
        holder.innerHTML += 
        `
            <section class="Game">
                <img class="GameHolder" src="../Resources/${mainElement["background"]}" alt="">
                <div class="GameHolderOverlay"></div>
                <a class="GameHolderHint">Scroll</a>

                <div class="GameHolder">
                    
                    <div class="TitleHolder">
                        <a class="TitleHolder">${mainElement["name"]}</a>
                    </div>

                    <div class="InfoHolder">               
                        <iframe style="${mainElement["image"] == "" ? "" : "display:none;"}" class="InfoVideo" width="588" height="330" 
                            src="https://www.youtube-nocookie.com/embed/${mainElement["video"]}" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="clipboard-write; encrypted-media; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                        <img class="InfoVideo" src="../Resources/${mainElement["image"]}"  alt="" style="${mainElement["image"] == "" ? "display:none;" : ""}" width="588" height="330">

                        <div class="InfoText">
                            <a class="InfoText">
                                ${mainElement["text"]}
                            </a>

                            <input type="button" value="Back" class="InfoText" onclick="LoadSubPageContent('${mainElement["type"]}')",'_blank')">
                        </div>
                    </div>
                </div>
            </section>    
        `

        contentToDisplay.forEach(element => {
            holder.innerHTML += 
            `
                <section class="Game">
                    <img class="GameHolder" src="../Resources/${element["image"]}" alt="">
                    <div class="GameHolderOverlay"></div>

                    <div class="GameHolder">
                        
                        <div class="TitleHolder">
                            <a class="TitleHolder">${element["name"]}</a>
                        </div>
    
                        <div class="InfoHolder">               
                            <iframe class="InfoVideo" width="588" height="330" 
                                src="https://www.youtube-nocookie.com/embed/${element["video"]}" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="clipboard-write; encrypted-media; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
    
                            <div class="InfoText">
                                <a class="InfoText">
                                    ${element["text"]}
                                </a>
    
                                <input type="button" value="Visit" class="InfoText" onclick="window.open('${element["link"]}','_blank')">
                            </div>
                        </div>
                    </div>
                </section>    
            `
        });
    }


}