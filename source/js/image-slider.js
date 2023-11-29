const images = document.querySelectorAll('.image-painel')
const arrowPrev = document.getElementById('btn-prev')
const arrowNext = document.getElementById('btn-next')
let currentImage = 0

function hideImages() {
    images.forEach(imagem => {
        imagem.classList.remove('show')
    })
}

function showImages(){    
    images[currentImage].classList.add('show')
}

arrowNext.addEventListener('click', function () {
    if(currentImage !== images.length - 1) {
        currentImage++        
    }

    hideImages()
    showImages()
})

arrowPrev.addEventListener('click', function () {
    if (currentImage !== 0) {
        currentImage--
    }

    hideImages()
    showImages()
})