
const slides = document.querySelectorAll('.slide')
let currentSlide = 0

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'))
    slides[index].classList.add('active')
    document.getElementById('slideCounter').textContent = (index + 1) + ' / ' + slides.length
    document.getElementById('prevBtn').disabled = index === 0
    document.getElementById('nextBtn').disabled = index === slides.length - 1
}

document.getElementById('nextBtn').addEventListener('click', () => {
    if(currentSlide < slides.length - 1){
        currentSlide++
        showSlide(currentSlide)
    }
})

document.getElementById('prevBtn').addEventListener('click', () => {
    if(currentSlide > 0){
        currentSlide--
        showSlide(currentSlide)
    }
})

showSlide(0)
