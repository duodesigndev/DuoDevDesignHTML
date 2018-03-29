

function toggleMenu(x) {
    var main = document.getElementsByClassName('main-container')
    x.classList.toggle("animate")
    main[0].classList.toggle("animate-main")
}

function toggleVector() {
    var p3 = document.getElementsByClassName('portfolio-3')
    for (let index = 0; index < p3.length; index++) {
        p3[index].classList.toggle("fadeOut")
        setTimeout(() => p3[index].classList.toggle("invisible"), 500)
    }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "grid"; 
}