
$(".color").css("color" , localStorage.getItem("sColor" ));

const text = ['I am Ahmed Rabie', 'I am Web Developer', 'I am Web Designer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let imges = Array.from(document.querySelectorAll('.img-item'));
let Items = document.querySelector('.light-box');
let lightBoxContent = document.querySelector('.light-box-content');
let nextButton = document.querySelector('.next');
let prevButton = document.querySelector('.prev');
let closeButton = document.querySelector('.close');
let CurrentIndex = 0;

(function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);
  document.querySelector('.typing').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 200);
})();

$(document).ready(function () {
  $('.loading').fadeOut(1000);
});
for (let i = 0; i < imges.length; i++) {
  imges[i].addEventListener('click', function (e) {
    let Imgscr = e.target.getAttribute('src');
    CurrentIndex = imges.indexOf(e.target);
    Items.classList.replace('d-none', 'd-flex');
    lightBoxContent.style.backgroundImage = `url(${Imgscr})`;
  });
}

function nextSlide() {
  CurrentIndex++;

  if (CurrentIndex == imges.length) {
    CurrentIndex = 0;
  }

  let imgscr = imges[CurrentIndex].getAttribute('src');
  lightBoxContent.style.backgroundImage = `url(${imgscr})`;
}
nextButton.addEventListener('click', nextSlide);

function prevSlide() {
  CurrentIndex--;

  if (CurrentIndex == -1) {
    CurrentIndex = imges.length - 1;
  }

  let imgscr = imges[CurrentIndex].getAttribute('src');
  lightBoxContent.style.backgroundImage = `url(${imgscr})`;
}
prevButton.addEventListener('click', nextSlide);

function close() {
  Items.classList.replace('d-flex', 'd-none');
}
closeButton.addEventListener('click', close);

document.addEventListener('keydown', function (e) {
  if (e.key == 'ArrowRight') {
    slide(1);
  } else if (e.key == 'ArrowLeft') {
    slide(-1);
  } else if (e.key == 'Escape') {
    closeSlide();
  }
});

$('li').eq(0).css("background-color", "black");
$('li').eq(1).css("background-color", "teal");
$('li').eq(2).css("background-color", "aqua");
$('li').eq(3).css("background-color", "blue");
$('li').eq(4).css("background-color", "violet");
$('li').eq(5).css("background-color", "tomato");


$(".allBox ul li").click(function () {
  let selectedColor= $(this).css("background-color");
  localStorage.setItem("sColor" , selectedColor)
  $(".color").css("color" , selectedColor);

});

$(".allBox i").click(function(){
let currentRight = $(".allBox").css("right")

if(currentRight=="0px")
{
  let ulDirection = $(".allBox ul").innerWidth()
  $(".allBox").animate({right: `-${ulDirection}`},1000)
}
else{
  $(".allBox").animate({right: `0px`},1000)
}


//216//


})