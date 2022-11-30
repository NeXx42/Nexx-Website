$(() => Setup());

class ActiveImageCarousel{

    constructor(images, parent) 
    {
        this.parent = parent;
        this.images = images;
        this.activeElements = []
        this.curPos = 0;

        this.scrollIdentity = 0;

        this.autoScroll = images.length > 1;
        this.autoScrollDelay = 5000;

        $(this.parent + "> div.info-media-wrapper").html("");
        $(this.parent + "> div.mediacontrols").html("");

        let pos = 0;
        images.forEach(element => {

            //`<img class="info-media" src="../Resources/Images/${element}" alt="">`
            if(element.name){
                $(this.parent + "> div.info-media-wrapper").append(
                    `<div  class="info-media info-media-container" style="padding: 15px;">
                        <img src="../Resources/Images/${element.name}" alt="">
                        <img src="../Resources/Images/${element.name}" alt="">
                    </div>`
                );
            }
            else if(element.url){
                $(this.parent + "> div.info-media-wrapper").append(
                    `<div  class="info-media info-media-container">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${element.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>`
                );
            }
            else{
                $(this.parent + "> div.info-media-wrapper").append(
                    `<div  class="info-media info-media-container">
                        <img src="../Resources/Images/${element}" alt="">
                    </div>`
                );
            }

            const temp = pos;    
            const btn = $(this.parent + "> div.info-mediacontrols > ol").append(`<li class="info-mediacontrols"><p></p></li>`).children("li").eq(pos);
            
            btn.click(() => { 
                this.MoveElement(temp)
                this.autoScroll = false;
            });

            pos++;
        });

        this.StartAutoScroll();
        this.ApplyInfo($(this.parent + "> div.info-media-wrapper").children(), $(this.parent + "> div.info-mediacontrols > ol").children(), 0);
    }



    MoveElement(pos) 
    {
        this.scrollIdentity += 1;

        const imgContainer = $(this.parent + "> div.info-media-wrapper").children();
        const controlContainer = $(this.parent + "> div.info-mediacontrols > ol").children();
        this.MoveElementInternal(imgContainer, controlContainer, this.scrollIdentity, pos)

    }
   
    MoveElementInternal(imgContainer, controlContainer, id, target)
    {
        if(target == this.curPos || id != this.scrollIdentity)
            return;

        if(this.curPos < target)
            this.curPos += 1;
        else
            this.curPos -= 1;

        setTimeout(() => {

            if(id == this.scrollIdentity){
                this.ApplyInfo(imgContainer, controlContainer, this.curPos);
                this.MoveElementInternal(imgContainer, controlContainer, id, target)
            }

        }, 50)
    }


    ApplyInfo(imgContainer, controlContainer, pos)
    {
        for(var i = 0; i < this.images.length; i++){
            imgContainer.eq(i).removeClass("info-media-main");
            imgContainer.eq(i).removeClass("info-media-next");
            imgContainer.eq(i).removeClass("info-media-prev");

            var zInd = this.images.length - Math.abs(pos - i);
            imgContainer.eq(i).css("z-index", zInd);

            controlContainer.eq(i).removeClass("info-mediacontrols-active")

            if(i < pos){
                imgContainer.eq(i).addClass("info-media-prev");
            }
            else if(i == pos){
                imgContainer.eq(i).addClass("info-media-main");
                controlContainer.eq(i).addClass("info-mediacontrols-active")
            }
            else{
                imgContainer.eq(i).addClass("info-media-next");
            }
        }
    }



    StartAutoScroll(){
        setInterval(() => {

            if(this.curPos == this.images.length - 1)
                this.autoScroll = false;

            if(!this.autoScroll)
                return;

            let index = (this.curPos + 1) % this.images.length
            this.MoveElement(index);

        }, this.autoScrollDelay);
    }
}




var indexOfThisData = 0;

let activeCarousels = []
let elementToShowOnScroll = []

var currentShownContent = 0;

function OnScroll() 
{
    //HandleShowingElements();
    UpdateSizesFromScroll();
}

function HandleShowingElements()
{
    elementToShowOnScroll.each(function(){
        console.log(($(this).offset().top -  800) + "       " + $(window).scrollTop())

        if($(this).offset().top - 800 <= window.scrollY){
            $(this).addClass($(this).data("classonview"))
            $(this).removeClass("showOnScroll")
        }
    })

    elementToShowOnScroll = $(".showOnScroll");
}


function UpdateSizesFromScroll(){
    const startScale = .6

    var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
    const stepVal = limit * .3;

    let val = Math.min(startScale + (window.scrollY / stepVal), 1);

    $("img.centre-img").css("transform", "scale("  + val +  ")");
    $("div.info-content").css("max-width", (1 - (val - startScale)) * 1920 + "px");
}


function Setup(){
    
    indexOfThisData = new URLSearchParams(window.location.search).get("ID");
    
    if(indexOfThisData === null){
        window.location = "../index.html"
        return;
    }


    const { image: icon, showcaseImages = icon, tags=[], btns=[] } = content[indexOfThisData];

    LoadBase()


    LoadButtons(btns)
    LoadTags(tags)
    LoadMoreContent(2);
    
    activeCarousels.push(new ActiveImageCarousel(showcaseImages, "div.info-main-left"))
    
    OnScroll();
    window.addEventListener("scroll", OnScroll);
}

function LoadBase(){
    const { bgColour, image: icon, title, description } = content[indexOfThisData];

    $("body").css("background-color", bgColour);
    $("img.centre-img").attr("src", `../Resources/Images/${icon[0]}`)

    $(".info-title").html(title);
    $('#info-main-description').html(description)
}


function LoadTags(tags){
    tags.forEach(element => {
        $("ul.info-tags").append(`<li class="info-tags"><a>${element}</a></li>`);
    });
}

function LoadButtons(btns){
    const container = $("#info-main-btns > ul");

    btns.forEach(btn => {
        container.append(`
            <li><button onclick="window.open('${btn.url}', '_blank').focus();" ${btn.important !== undefined ? 'class="activeColour"' : ""}>${btn.text}</button></li>
        `);
    });
}


function LoadMoreContent(toShowAmount){
    
    const { extraContent=[] } = content[indexOfThisData]
    const contentContainer = $("#content-releases");

    if(currentShownContent >= extraContent.length) return;
    if(toShowAmount == -1) toShowAmount = extraContent.length;

    for(var i = 0; i < toShowAmount; i++)
    {
        if(currentShownContent >= extraContent.length) break;

        const element = extraContent[currentShownContent];
        var internalMedia = "";

        if(element.vid !== undefined || element.img !== undefined){
            internalMedia = ElementToContentMedia(element)
        }
        else{
            element.media.forEach(q => {
                internalMedia += ElementToContentMedia(q)
            });
        }
        
        contentContainer.append(` 
            <div class="content-release-entry" data-classOnView="content-release-entry-show">
                <div class="content-release-entry-media">
                    ${internalMedia}
                </div>

                <div class="content-release-entry-text">
                    <h1>${element.title}</h1>
                    <p class="content-release-entry-release">${element.date}</p>
                    <p class="content-release-entry-description">${element.description}</p>
                </div>
            </div>   
        `);

        currentShownContent++;
    }


    $("#content-releases-controls-loadx").html(`Load ${Math.min(extraContent.length - (currentShownContent), 5)} more`);
    $("#content-releases-controls-loadall").html(`Load rest ${extraContent.length - (currentShownContent )}`);
}


function ElementToContentMedia(element){
    if(element.vid){
        return `<iframe width="100%" height="auto" src="https://www.youtube-nocookie.com/embed/${element.vid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    else if(element.img){
        if(element.addPadding){
            return `
            <div  class="info-media-container content-release-entry-media-group">
                <img src="../Resources/Images/${element.img}" alt="">
                <img src="../Resources/Images/${element.img}" alt="">
            </div>`
        }
        else{
            return `<img src="../Resources/Images/${element.img}" alt=""></img>`
        }
    }
}