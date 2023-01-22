var itemContainer = document.querySelector('.item_container')
var items = Array.from(itemContainer.children);
var item_Width = items[0].getBoundingClientRect().width; 
var nextButton = document.querySelector('.button-forward');
var backButton = document.querySelector('.button-back');

console.log(item_Width);
