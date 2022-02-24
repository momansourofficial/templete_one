let slide =  document.getElementById('rom');
window.onscroll = function(){
    if(scrollY >= 540){
        slide.style.display='block';
    }
    else{
        slide.style.display='none'
    }
}
slide.onclick = function(){
    scroll({
        top:0,
        behavior:"smooth"
    })
}