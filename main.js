const _nameParallaxValue = 2;

window.onload = function (){
    Parallax(window.innerWidth/2, window.innerHeight/2);
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