let icon = document.getElementById("dark");
console.log(icon);
icon.onclick = function(){
    document.body.classList.toggle("darkTheme");
    if(document.body.classList.contains("darkTheme")){
        icon.src = "./image/sun.png";
    }else{
        icon.src = "./image/moon.png";
    }
}
let dot = document.getElementById("light");
console.log(icon);
dot.onclick = function(){
    document.body.classList.toggle("lightTheme");
    if(document.body.classList.contains("lightTheme")){
        dot.src = "./image/sun.png";
    }else{
        dot.src = "./image/moon.png";
    }
}