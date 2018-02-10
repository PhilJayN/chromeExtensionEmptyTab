console.log('popup js running rrrrrrrrr');


//For popup.html
// var popupBody = document.querySelector('.popup-body');
// console.log(popupBody);
// magicBtn.addEventListener('click', function() {
//   console.log('clicke!!');
//   popupBody.style.backgroundColor = 'red';
// });


document.addEventListener('DOMContentLoaded', function () {
  var popupBody = document.querySelector('.popup-body');
  var magicBtn = document.querySelector('.magic-btn');
  console.log('popup el', popupBody);
  console.log('clicke on btn!');
  popupBody.style.backgroundColor = 'green';
});






// document.addEventListener('DOMContentLoaded', function () {
//   var divs = document.querySelectorAll('div');
//   for (var i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', click);
//   }
// });
