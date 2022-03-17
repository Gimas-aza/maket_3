document.addEventListener('DOMContentLoaded', function() { // Аналог $(document).ready(function(){
    const body = document.querySelector("body");
    const menu = document.querySelector(".header__menu");
    const burger = document.querySelector(".menu__burger");
    if (burger) {
        const list = document.querySelector(".menu__list");
        const cross = document.querySelector(".cross");
        const bar = document.querySelector(".bar");
        let i = -120
        burger.addEventListener('click', function() {
            if (i == 0) button_bool = false;
            else button_bool = true;
            menu.style.overflow = `hidden`;

            let anim = setInterval(function() {
                if (button_bool) {
                    i += 10;
                    burger.style.background = `#ffffff`;
                    cross.style.display = `inline`;
                    bar.style.display = `none`;
                } else {
                    i -= 10;
                    burger.style.background = `#362f2f`;
                    cross.style.display = `none`;
                    bar.style.display = `inline`;
                }

                list.style.transform = `translate(${i}%, 0px)`;
                if (i == 0 || i == -120) {
                    clearInterval(anim);
                    if (i == 0) {
                        menu.style.overflow = `visible`;
                    }
                }
            }, 20);
            body.classList.toggle('lock');
        });
    }
    // -----------------------------------------------------------------

    const compress = document.querySelectorAll("#info__button");
    if (compress) {
        const info = document.querySelector(".main__info");
        let c = 0;
        compress.forEach(com => {
            com.addEventListener('click', function() {
                if (c == 0) {
                    compress_bool = true;
                    document.querySelector(".info__compress").
                    style.display = 'none';
                    document.querySelector(".info__expand").
                    style.display = 'inline';
                }
                else {
                    compress_bool = false;
                    document.querySelector(".info__compress").
                    style.display = 'inline';
                    document.querySelector(".info__expand").
                    style.display = 'none';
                }
                
                let anim__info = setInterval(function() {
                    if (compress_bool) c -= 15;
                    else c += 15;

                    info.style.left = `${c}px`;
                    info.style.bottom = `${c}px`;
                    if (c == 0 || c == -195) {
                        clearInterval(anim__info);
                    }
                }, 20);        
            });
        });
    }
});