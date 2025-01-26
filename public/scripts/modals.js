//Functions
function closeModal(){
    let modals = document.querySelectorAll('.Modal');
    modals.forEach(element => {
        element.setAttribute("data-status", "closed");
    });
};

function openModal(modalID){
    let modal = document.querySelector(`.Modal[data-modal-id="${modalID}"]`);
    modal.setAttribute("data-status", "open");
};

//function setVideoModal(videoEmbed){};

//function setImageModal(imageSrc){};

//Event Listeners
function closeButtonsSet(){
    let closeButtons = document.querySelectorAll('[data-modal-close]');
    closeButtons.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal();
        }, false);
    });
};

function openButtonsSet(){
    let openButtons = document.querySelectorAll('[data-modal-open]');
    openButtons.forEach(element => {
        const modalID = element.getAttribute("data-modal-open");
        element.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(modalID);
        }, false);
    });
};

//Run Everything
document.addEventListener("DOMContentLoaded", function(e){
    closeButtonsSet();
    openButtonsSet();
});