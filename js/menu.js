function openmenu(){
    const media = window.matchMedia("(max-width:600px)")
    if(media.matches){
    let menuvalue = document.getElementById('menu');
    let topvalue = document.getElementById('body');
    topvalue.style.marginleft='15%';
    menuvalue.style.width = '100%';
    }
    else{
        let menuvalue = document.getElementById('menu');
        let topvalue = document.getElementById('body');
        topvalue.style.marginleft='15%';
        menuvalue.style.width = '15%';
    }
}
function closemenu(){
    let menuvalue = document.getElementById('menu');
    let topvalue = document.getElementById('body');
    menuvalue.style.width = '0%';
    topvalue.style.marginleft='0%';
    
}

