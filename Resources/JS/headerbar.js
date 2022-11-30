const SCROLLIDINDICATOR = "ScrollID"


$(() => {
    function UpdateHeaderBar() 
    {
        if (window.scrollY >= 1) {
            $(".header-main").addClass("header-main-active")
        }
        else{

            $(".header-main").removeClass("header-main-active")
        }
    }; 

    $("ul.header-main-right").children().each(function(){
        $(this).click(() => {
            const id = $(this).data("scrollid");
            const goTo = $(".home-content-header");

            if(goTo && goTo.children().length){
                ScrollTo(goTo.children().eq(id))
            }
            else{
                window.location = `../index.html?${SCROLLIDINDICATOR}=${id}`;
            }
        });
    });

    window.addEventListener("scroll", UpdateHeaderBar);

}) 