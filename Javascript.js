let curTheme = 1; 

function ChangeTheme(){
    
    if(curTheme == 1){

        document.body.classList.replace('light', 'dark');
    }
    else{

        document.body.classList.replace('dark', 'light');
    }
    
    curTheme = curTheme == 0 ? 1 : 0;
    document.cookie = `theme=${curTheme};`;
}


function LoadTheme(){
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      if (c.indexOf("theme") == 0) {
        curTheme = parseInt(c.substring("theme".length, c.length));
      }
    }


    if(curTheme == 1)
        document.body.classList.replace('light', 'dark');
    else
        document.body.classList.replace('dark', 'light');
}