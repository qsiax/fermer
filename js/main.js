const play = document.querySelector('#play')
const video = document.querySelector('.video-popup')

play.addEventListener('click', () => {
    video.classList.toggle('active')
})

video.addEventListener('click', () => {
    video.classList.toggle('active')
})

const cartPopup = document.querySelector('.cart-success')
const cartNum = document.querySelector('#cart-num')

var num = 0

function cartActive() {
    cartPopup.classList.toggle('active')
    num += 1

    cartNum.innerHTML = num
}

function cartClose() {
    cartPopup.classList.toggle('active')
}




