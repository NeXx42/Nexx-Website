function OpenLink(to, colour){
    const element = ResizeLoader();

    element.css("background-color", colour)
    element.addClass("content-loader-open");

    element.css("left")
    
    setTimeout(() =>{
        window.location = to;
    }, 500)
}

function ShowcaseLoad(){
    const element = ResizeLoader();
    element.addClass("content-loader-close");
}

function ResizeLoader(){
    const size = window.outerWidth > window.outerHeight ? "100vw" : "100vh";
    const element = $("div.content-loader")

    element.removeClass("content-loader-close");
    element.removeClass("content-loader-open");

    element.css("min-height", size);
    element.css("min-width", size);

    return element;
}
