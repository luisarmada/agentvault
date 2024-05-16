function Parallax(e){
    let x = e.clientX;
    let y = e.clientY;
    
    const agentnames = document.getElementsByClassName("agentname");
    const valA = 2;
    const px = -(window.innerHeight * 0.05) + ((window.innerWidth - x)* valA) / 90;
    const py = -(window.innerHeight * 0.75) + ((window.innerHeight - y) * valA) / 90;
    for(let i = 0; i < agentnames.length; i++){
        const yoffset = agentnames[i].getAttribute("yoffset");
        if(yoffset != null){
            py += yoffset;
        }
        agentnames[i].style.transform = `translateX(${px}px) translateY(${py}px)`;
    }
    

    const agentimgs = document.getElementsByClassName("agentimg");
    const val = 8;
    const tx = -(window.innerHeight * 0.5) + ((window.innerWidth - x)* val) / 90;
    const ty = ((window.innerHeight - y) * val) / 90;
    for(let i = 0; i < agentnames.length; i++){
        agentimgs[i].style.transform = `translateX(${tx}px) translateY(${ty}px)`;
    }
}