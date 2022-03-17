document.addEventListener('DOMContentLoaded', function() { // Аналог $(document).ready(function(){ 
    const body = document.querySelector("body");
    let hash = document.location.hash;
    hash = hash.replace("#_", '');
    gall(hash);

    let portfolio = document.querySelector('.portfolio');
    document.querySelectorAll('.main__photo').forEach(elem => {
        elem.addEventListener('click', function() {
            portfolio.style.display = 'block';
            body.classList.toggle('lock');
        });
    });
    document.querySelector('.info__сlose').addEventListener('click', function() {
        portfolio.style.display = 'none';
        body.classList.toggle('lock');
    });
})

function gall(hash) {
    let gallery = document.querySelector(".main__gallery");
    let sub_title = document.querySelector(".gallery__sub-title");

    gallery.id = hash;
    sub_title.innerHTML = "gallery " + hash;
}