
//most of these comments are for me to better understand what I'm doing with java lol

//NOTES
//variables are used to store data values using the keyword var
//creating a variable is called declaring a variable
//a function performs a task and must be called in order to execute
//if statements executes code when a condition is met
//for is like a while statement that i learned in treehouse

var slideIndex = 1;
showSlides(slideIndex);
//each image has an index of 1

function plusSlides(n) {
  showSlides(slideIndex += n);
}
//to navigate, the function either adds 1 image or -1 image to go right or left

function currentSlide(n) {
  showSlides(slideIndex = n);
}
//to show one slide at a time

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carouselIMG");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

}