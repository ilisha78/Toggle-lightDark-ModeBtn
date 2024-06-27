let btn= document.getElementById("btn");

function darkTheme(){
    let main=document.getElementById("container");
    main.classList.toggle("lightBgColor");
    main.classList.toggle("darkBgColor");

    let text=document.getElementById("text");
    text.classList.toggle("light");
    text.classList.toggle("dark");
    if(text.getAttribute("class") =="dark"){
        text.innerHTML="Dark";
    }
    else{
        text.innerHTML="Light";
    }

    let i= document.getElementById("i");
    i.classList.toggle("fa-sun-o");
    i.classList.toggle("fa-moon-o");

    btn.classList.toggle("lightBtn");
    btn.classList.toggle("darkBtn");
    
};


btn.addEventListener("click", darkTheme)