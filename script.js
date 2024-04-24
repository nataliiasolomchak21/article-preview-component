const shareBtn = document.querySelector('.share-arrow')
const shareBox = document.querySelector('.share-hidden')


shareBtn.addEventListener("click", function() {
    shareBox.classList.toggle('active')
})