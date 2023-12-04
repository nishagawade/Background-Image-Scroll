// we need to create effect here such as when we scroll image we should decrease the opacity and we need to zoom out the image

const bgImageEL = document.getElementById("bg-image");

function BackGroundScroll(){
    //This line adjusts the opacity of the background image based on the window's vertical scroll position
    bgImageEL.style.opacity = 1 - window.pageYOffset/800; 
    bgImageEL.style.backgroundSize = 160 - window.pageYOffset/12 + "%"
}

window.addEventListener("scroll", ()=>{
    BackGroundScroll()
})