(function () {
    document.getElementById("hideModal").addEventListener("click", toggleModal, false);
    document.getElementById("showModal").addEventListener("click", toggleModal, false);
    document.getElementById("modalBG").addEventListener("click", toggleModal, false);
})();

function toggleModal() {
    var modal = document.getElementById("modal");
    var modalBG = document.getElementById("modalBG");
    if (modal.getAttribute("data-show") == "false"){
        modal.setAttribute("data-show", "true");
        modalBG.setAttribute("data-show", "true");
    }else {
        modal.setAttribute("data-show", "false");
        modalBG.setAttribute("data-show", "false");
    }

}
