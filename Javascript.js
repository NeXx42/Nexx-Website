let curTheme = 1; 

function ChangeTheme(){
  curTheme = curTheme == 0 ? 1 : 0;
  localStorage.setItem("theme", curTheme);
  SetTheme();
}

function LoadTheme(){
  if (localStorage.theme != null) 
    curTheme = localStorage.theme;
  else
    curTheme = 1;

  SetTheme();
}

function SetTheme(){
  if(curTheme == 1){
    document.body.classList = 'dark';
  }
  else{
    document.body.classList = 'light';
  }
}