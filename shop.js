var itemContainer = document.querySelector('.item_container')
var items = Array.from(itemContainer.children);
var item_Width = items[0].getBoundingClientRect().width; 
var nextButton = document.querySelector('.button-forward');
var backButton = document.querySelector('.button-back');


items.forEach((card, index) => {
    card.style.left = cardSize * index + 'px';
  })


console.log(item_Width);
