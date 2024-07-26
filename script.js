let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.height = "10vh"; // Set the desired height
        document.getElementById("logo").style.maxHeight = "60px"; // Set the desired max height
    } else {
        document.getElementById("navbar").style.height = "5vh"; // Set the original height
        document.getElementById("logo").style.maxHeight = "40px"; // Set the original max height
    }
    prevScrollpos = currentScrollPos;
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}



