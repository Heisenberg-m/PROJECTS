let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("indicator");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Automatic Slideshow
let slideInterval = setInterval(function() {
  plusSlides(1)
}, 3000);

// Pause on hover
let slider = document.querySelector('.slideshow');
slider.addEventListener('mouseover', function() {
  clearInterval(slideInterval);
});

// Resume on hover off
slider.addEventListener('mouseout', function() {
  slideInterval = setInterval(function() {
    plusSlides(1)
  }, 3000);
});

function slideshow() {
  plusSlides(-1);
}

function slideshow() {
  plusSlides(1);
}
