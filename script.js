/**
 * Things are numbered in the order I found them
 * 1. You should wrap everything in this file in an IIFE, not just your event handlers
 * 2. Every time you click on something, you look for "modal" and "modalBG" in the DOM again. It would be better to search for this once during initialization and save it as a variable
 *     -- You could use a closure to do this (see below)
 * 3. How could you scale this? If you were to have multiple modals on the same page, would you need to give everything an id? Is there a better way to do this?
 */

(function () {
    document.getElementById("hideModal").addEventListener("click", toggleModal, false); /* 3 */
    document.getElementById("showModal").addEventListener("click", toggleModal, false); /* 3 */
    document.getElementById("modalBG").addEventListener("click", toggleModal, false); /* 3 */
})(); /* 1 */

function toggleModal() {
    var modal = document.getElementById("modal"); /* 2 */
    var modalBG = document.getElementById("modalBG"); /* 2 */
    if (modal.getAttribute("data-show") == "false") {
        modal.setAttribute("data-show", "true");
        modalBG.setAttribute("data-show", "true");
    } else {
        modal.setAttribute("data-show", "false");
        modalBG.setAttribute("data-show", "false");
    }
}

// })(); /* 1 */


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 2 */
var toggleModal = (function() {
    var modal = document.getElementById('modal'),
        modalBG = document.getElementById('modalBG'),
        helper = function(val) {
            // this helper is a tad overkill, but I wanted to highlight the fact that you're doing a lot of the same thing
            modal.setAttribute('data-show', val);
            modalBG.setAttribute('datah-show', val)
        };

    return function() {
        helper( model.getAttribute('data-show') === 'false' ? 'true' : 'false' );
    };
})();

/**
 * On script load, the variable "toggleModal" is set to the return of the IIFE
 * "modal" and "modalBG" are initialized once on page load and are referenced from the inner function (closure)
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
