

function Parallax(e){
    let x = e.clientX;
    let y = e.clientY;
    
    const agentnames = document.getElementsByClassName("agentname");
    const valA = 2;
    const test = document.getElementById("test");
    //test.innerHTML = agentnames[0].style.transform;
    const px = ((window.innerWidth - x)* valA) / 90;
    const py = ((window.innerHeight - y) * valA) / 90;
    tet = px;
    for(let i = 0; i < agentnames.length; i++){
        agentnames[i].style.transform = `translateX(${px}px) translateY(${py}px)`;
    }
    
    // IMAGES
    const agentimgs = document.getElementsByClassName("agentimg");
    const val = 8;
    const tx = -(window.innerHeight * 0.5) + ((window.innerWidth - x)* val) / 90;
    const ty = ((window.innerHeight - y) * val) / 90;
    for(let i = 0; i < agentimgs.length; i++){
        //test.innerHTML = Window.getComputedStyle(agentimgs[i]).getPropertyValue("transform");
        agentimgs[i].style.transform = `translateX(${tx}px) translateY(${ty}px)`;
    }
}

function getTranslateXY(element) {
    const style = window.getComputedStyle(element)
    const matrix = new DOMMatrixReadOnly(style.transform)
    return {
        translateX: matrix.m41,
        translateY: matrix.m42
    }
}