window.addEventListener("load", () => {


const loader =
    document.getElementById("loader");

if (!loader) return;

setTimeout(() => {

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.remove();

    }, 500);

}, 1000);


});
