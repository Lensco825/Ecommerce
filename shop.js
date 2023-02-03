var itemContainer = document.querySelector('.item_container')
var items = Array.from(itemContainer.children);
var item_Width = items[0].getBoundingClientRect().width;
var nextButton = document.querySelectorAll('.button-forward');
var backButton = document.querySelectorAll('.button-back');

console.log(document.querySelector('html').getBoundingClientRect().width);

// get all carousels in the page
const carousels = document.body.querySelectorAll(".carousel");

// scan each carousel and assign events to children
carousels.forEach((carousel) => {
  // get item_container
  const itemContainer = carousel.querySelector(".item_container");
  // assign event to button-back
  carousel.querySelector(".button-back").addEventListener('click', () => {
    itemContainer.style.transform = 'translateX(10%)';
  });
  // assign event to button-forward
  carousel.querySelector(".button-forward").addEventListener('click', () => {
    itemContainer.style.transform = 'translateX(-40%)';
  });
});