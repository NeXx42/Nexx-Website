let curTheme = 0; 

function ChangeTheme(){
  curTheme = curTheme == 0 ? 1 : 0;
  
  if(curTheme == 1){
    document.body.classList = 'dark';
  }
  else{
    document.body.classList = 'light';
  }
    
  localStorage.setItem("theme", curTheme);
}


function LoadTheme(){
  try{
    curTheme = localStorage.theme;
  }
  catch{
    curTheme = 1;
  }

  if(curTheme == 1){
    document.body.classList = 'dark';
  }
  else{
    document.body.classList = 'light';
  }
}
