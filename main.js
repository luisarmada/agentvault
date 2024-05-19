const _nameParallaxValue = 2;

var currentMainScreen;
var currentMainScreenName;
var prevScreen;

const roletags = ["duelists", "initiators", "sentinels", "controllers"];

window.onload = function (){
    Parallax(window.innerWidth/2, window.innerHeight/2);

    currentMainScreenName = roletags[0]
    currentMainScreen = document.getElementById(currentMainScreenName + "_screen");

    for(let s = 0; s < roletags.length; s++){
        var rolebuttons = document.getElementsByClassName(roletags[s]);
        for(var i = 0; i < rolebuttons.length; i++) {
            rolebuttons[i].tag = roletags[s];
            rolebuttons[i].pageorder = s;
            rolebuttons[i].addEventListener('click', myFunction, false);
        }
    }   
    
};

function Parallax(x, y){
    const test = document.getElementById("test");

    const agentnames = document.getElementsByClassName("agentname");
    const nameMove = CalculateParallaxMove(x, y, _nameParallaxValue);
    for(let i = 0; i < agentnames.length; i++){
        agentnames[i].style.transform = `translateX(${nameMove[0]}px) translateY(${nameMove[1]}px)`;
    }
    
    // IMAGES
    const agentimgs = document.getElementsByClassName("agentimg");
    const imgMove = CalculateParallaxMove(x, y, 8);
    for(let i = 0; i < agentimgs.length; i++){
        agentimgs[i].style.transform = `translateX(${imgMove[0]}px) translateY(${imgMove[1]}px)`;
    }
}

function CalculateParallaxMove(x, y, value) {
    const smoothing = value / 90;
    const px = (window.innerWidth - x) * smoothing;
    const py = (window.innerHeight - y) * smoothing;
    return [px, py];
}

function MouseMoveEvent(e) {
    let x = e.clientX;
    let y = e.clientY;
    Parallax(x, y);
}

function myFunction(evt) {
    let roletag = evt.currentTarget.tag + "_screen";
    let target_screen = document.getElementById(roletag);

    if(target_screen == currentMainScreen) return;
    
    target_screen.classList.add("current_screen");
    currentMainScreen.classList.remove("current_screen"); 
    
    
    target_screen.setAttribute("style", "z-index: 100");
    currentMainScreen.setAttribute("style", "z-index: 99");
    if(prevScreen != null && target_screen != prevScreen){
        prevScreen.setAttribute("style", "z-index: 0");
    }
   
    prevScreen = currentMainScreen;
    currentMainScreen = target_screen;
};

function switchToTargetScreen(target_screen) {

}