const images = document.querySelectorAll('.image')
const arrowPrev = document.getElementById('btn-prev')
const arrowNext = document.getElementById('btn-next')
let currentImage = 0

function hideImage() {
    images.forEach(image => {
        image.classList.remove('show')
    })
}

function showImage() {
    images[currentImage].classList.add('show')
}

arrowNext.addEventListener('click', function () {
    if (currentImage !== images.length - 1) {
        currentImage++
    }

    hideImage()
    showImage()
})

arrowPrev.addEventListener('click', function () {
    if (currentImage !== 0) {
        currentImage--
    }

    hideImage()
    showImage()
})