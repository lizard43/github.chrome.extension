
function listener()
{
    var btnlinks= document.getElementsByClassName("btn-link text-gray-dark no-underline js-details-target");

    [].forEach.call(btnlinks, function (btnlink) {

        if (btnlink.getAttribute("aria-expanded") === "false") {
            btnlink.click();
        }
    });
}

var timeout = null;
document.addEventListener("DOMSubtreeModified", function() {
    if(timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(listener, 500);
}, false);

