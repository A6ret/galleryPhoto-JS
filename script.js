const container = document.querySelector('div.container');
const mainImg = document.querySelectorAll('div.mainThumb .imgMThumb');
const thumbnail = document.querySelector('div.thumbnail');

let i = 0;

container.addEventListener('click', function(e) {
    // function mainImgChild() {
    //     if (i != 0) {
    //         mainImg[0].src = thumbnail.children[i - 1].src;
    //         fadeInImg();
    //     }
    //     if (i == thumbnail.childElementCount) {
    //         i = 0;
    //     }
    //     mainImg[2].src = thumbnail.children[i + 1].src;
    // }

    function activeImg() {
        for (let k = 0; k < thumbnail.childElementCount; k++) {
            thumbnail.children[k].className = "thumb";

            if (mainImg[1].src == thumbnail.children[k].src) {
                thumbnail.children[k].classList.add('active');
            };
        }
    }

    function fadeInImg() {
        mainImg[1].classList.add('w3-animate-opacity');
        setTimeout(function() {
            mainImg[1].classList.remove('w3-animate-opacity');
        }, 500)
    }

    if (e.target.className == "thumb") {
        mainImg[1].setAttribute('src', e.target.getAttribute('src'));
        activeImg();
        fadeInImg();
    } else if (e.target.className == "far fa-arrow-alt-circle-right") {
        if (i == thumbnail.childElementCount) i = 0;

        mainImg[1].src = thumbnail.children[i++].src;
        activeImg();
        fadeInImg();
    } else if (e.target.className == "far fa-arrow-alt-circle-left") {
        if (i == 0) i = thumbnail.childElementCount;

        mainImg[1].src = thumbnail.children[--i].src;
        activeImg();
        fadeInImg();
    } else if (e.target.className == "fas fa-redo-alt") {
        let time = new Date().getTime();
        let j = 0;
        setInterval(function() {
            if (j == thumbnail.childElementCount) j = 0;
            if (new Date().getTime() - time > 1500) {
                clearInterval();
                return;
            }

            mainImg[1].src = thumbnail.children[j++].src;
            activeImg();
        }, 100);

        setTimeout(function() {
            let num = Math.round(Math.random() * (thumbnail.childElementCount - 1));
            if (mainImg[1].src != thumbnail.children[num].src) {
                mainImg[1].src = thumbnail.children[num].src;
            }

            activeImg();
            fadeInImg();
        }, 1501);
    };
});