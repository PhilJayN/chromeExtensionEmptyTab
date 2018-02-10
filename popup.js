console.log('popup js running rrrrrrrrr');


//For popup.html
// var popupBody = document.querySelector('.popup-body');
// console.log(popupBody);
// magicBtn.addEventListener('click', function() {
//   console.log('clicke!!');
//   popupBody.style.backgroundColor = 'red';
// });


function changeBackgroundColor () {

}

document.addEventListener('DOMContentLoaded', function () {
  var popupBody = document.querySelector('.popup-body');
  var emptyBody = document.querySelector('.empty-body');
  alert(emptyBody);

  console.log('el:', popupBody, emptyBody);
  var magicBtn = document.querySelector('.magic-btn');
  console.log('popup el', popupBody);
  magicBtn.addEventListener('click', function() {
    console.log('clicked btn');
    popupBody.style.backgroundColor = 'green';
  });

  // magicBtn.addEventListener('click', function() {
  //   console.log('clicked btn');
  //   popupBody.style.backgroundColor = 'green';
  // });

});






// document.addEventListener('DOMContentLoaded', function () {
//   var divs = document.querySelectorAll('div');
//   for (var i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', click);
//   }
// });
