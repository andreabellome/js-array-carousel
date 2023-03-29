/* array images */
let images = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp'
]

const mainImage = document.querySelector('.items');
const thumbImgages =  document.querySelector('.thumbs');

/* generate divs with JS (images) */
for (let i = 0; i < images.length; i++) {

    mainImage.innerHTML += `
    <div class="item nonactiveJS" style="height: 100%">
        <img src="${images[i]}" alt="">
    </div>
    `

    thumbImgages.innerHTML += `
    <div class="thumb">
        <img class=" img-def bright-deg-img-th" src="${images[i]}" alt="">
    </div>
    `
}

var active = 0;

/* remove the display none and add the display block */
mainImage.getElementsByClassName( 'item' )[active].classList.remove("nonactiveJS")
mainImage.getElementsByClassName( 'item' )[active].classList.add("activeJS")

thumbImgages.getElementsByClassName( 'img-def' )[active].classList.remove("bright-deg-img-th")
thumbImgages.getElementsByClassName( 'img-def' )[active].classList.add("bright-nodeg-img-th")

/* manipulate previous arrow */
const prev = document.querySelector('.prev')
prev.addEventListener( 'click', function(){

    mainImage.getElementsByClassName( 'item' )[active].classList.remove("activeJS")
    mainImage.getElementsByClassName( 'item' )[active].classList.add("nonactiveJS")

    thumbImgages.getElementsByClassName( 'img-def' )[active].classList.remove("bright-nodeg-img-th")
    thumbImgages.getElementsByClassName( 'img-def' )[active].classList.add("bright-deg-img-th")

    if (active == 0) {
        console.log(active)
        active = images.length - 1;
    } else{
        active--;
    }

    mainImage.getElementsByClassName( 'item' )[active].classList.remove("nonactiveJS")
    mainImage.getElementsByClassName( 'item' )[active].classList.add("activeJS")

    thumbImgages.getElementsByClassName( 'img-def' )[active].classList.remove("bright-deg-img-th")
    thumbImgages.getElementsByClassName( 'img-def' )[active].classList.add("bright-nodeg-img-th")


}
)

const next = document.querySelector('.next')
next.addEventListener('click', function(){

    mainImage.getElementsByClassName( 'item' )[active].classList.remove("activeJS")
    mainImage.getElementsByClassName( 'item' )[active].classList.add("nonactiveJS")

    thumbImgages.getElementsByClassName( 'img-def' )[active].classList.remove("bright-nodeg-img-th")
    thumbImgages.getElementsByClassName( 'img-def' )[active].classList.add("bright-deg-img-th")

    if (active == images.length - 1){
        active = 0;
    } else{
        active++
    }

    mainImage.getElementsByClassName( 'item' )[active].classList.remove("nonactiveJS")
    mainImage.getElementsByClassName( 'item' )[active].classList.add("activeJS")

    thumbImgages.getElementsByClassName( 'img-def' )[active].classList.remove("bright-deg-img-th")
    thumbImgages.getElementsByClassName( 'img-def' )[active].classList.add("bright-nodeg-img-th")

})


