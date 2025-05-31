let photos = document.getElementById("photos");
let img;
    
photos.addEventListener("mouseover", mouseOver);
photos.addEventListener("mouseout", mouseOut);


function mouseOver(e) {
    img = e.target.style.width = '175px';
    img = e.target.style.opacity = 1;
}

function mouseOut(e) {
    img = e.target.style.width = '100px';
    img = e.target.style.opacity = .3;
    img = e.target.style = 'easy'
}

setTimeout(mouseOver, 3000);
setTimeout(mouseOut, 3000);


