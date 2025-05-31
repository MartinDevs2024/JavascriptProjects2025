/// Get modal Elements

var modal = document.getElementById("simpleModal");
//Get open modal button
var modalBtn = document.getElementById("modalBtn");
//get close button
var closeBtn = document.getElementsByClassName("closeBtn"
)[0];
//get close button
//Listen for open click
modalBtn.addEventListener('click',openModal);
//Listen for close click
closeBtn.addEventListener('click',closeModal);

window.addEventListener('click',outsideClick);

function openModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}