var magicBtn = document.querySelector('.magic-btn');

//For popup.html
var popupBody = document.querySelector('.popup-body');
console.log(popupBody);
// magicBtn.addEventListener('click', function() {
//   console.log('clicke!!');
//   popupBody.style.backgroundColor = 'red';
// });

//For empty.html
var emptyBody = document.querySelector('.empty-body');
console.log(emptyBody);
magicBtn.addEventListener('click', function() {
  console.log('clicke!!');
  emptyBody.style.backgroundColor = 'red';
});
