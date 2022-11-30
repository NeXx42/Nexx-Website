$(() => {

    $(".home-img-container").on("mousemove", OnElementHighlight);
    $(".home-img-container").on("mousemove", OnElementHighlight);


    function OnElementHighlight(e){
        const change = 5;

        const posX = NormalizeBetween(e.clientX,  $(this).width());
        const posY = NormalizeBetween(e.clientY,  $(this).height());

        $(this).css("transform","translate(" + (posX * -change) + "px, " + (posY * -change) + "px)");
    }


    function NormalizeBetween(val, max) {
        return (Math.max(0, Math.min(1, (val / max))) - .5) * 2
    }




    CreatePageLinksForHomeIMGS();
});    

function CreatePageLinksForHomeIMGS(){
    let pos = 0;
    $("img.home-img").each(function(){
        let index = homePageIDS[pos];
        let imagePos = Math.round(Math.random() * (content[index].image.length - 1));

        $(this).attr("src", `./Resources/Images/${content[index].image[imagePos]}`);
        $(this).on("click", () => {OpenLink(`./Pages/InfoPage.html?ID=${index}`, content[index].bgColour)});

        pos++;
    });


    const parents = [];
    parents.push($("#home-content-projects"));
    parents.push($("#home-content-games"));
    parents.push($("#home-content-links"));
    
    socials.forEach(element => {
        PushDataToPage(parents[2], element.img, element.name, () => { window.open(element.url, '_blank').focus(); });
    });

    var i = 0;
    content.forEach(element => {
        const pos = i;
        PushDataToPage(parents[element.type], element.image[0], element.title, () => { OpenLink(`./Pages/InfoPage.html?ID=${pos}`, element.bgColour) });
        i++;
    });

    setTimeout(() => {
        let scrollID = new URLSearchParams(window.location.search).get(SCROLLIDINDICATOR);

        if(scrollID !== null){
            console.log("scroll");
            ScrollToHeader(scrollID);
        }
    }, 100)


}


function PushDataToPage(parent, img, title, onclick){
    parent.append(`
        <div class="home-content-entry">
            <img src="./Resources/Images/${img}" alt="">
            <div>
                <p>${title}</p>
            </div>
        </div> 
    `);

    parent.children().last().on("click", onclick);
}


function ScrollToHeader(id){
    ScrollTo($(".home-content-header").children().eq(id));
}

function ScrollTo(element){
    $([document.documentElement, document.body]).animate({
        scrollTop: element.offset().top - 100
    }, 500);
}