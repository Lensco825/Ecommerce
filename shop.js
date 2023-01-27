var itemContainer = document.querySelector('.item_container')
var items = Array.from(itemContainer.children);
var item_Width = items[0].getBoundingClientRect().width; 
var nextButton = document.querySelectorALL('.button-forward');
var backButton = document.querySelectorALL('.button-back');


nextButton.forEach(nextButton => {
    nextButton.addEventListener('click', function() {
        itemContainer.style.transform = 'translateX(-20%)';
        });        
  });


backButton.addEventListener('click', function() {
itemContainer.style.transform = 'translateX(20%)';
});