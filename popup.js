//
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//       console.log(response.farewell);
//   });
// });

console.log('popup js running rrrrrrrrr');


//For popup.html
// var popupBody = document.querySelector('.popup-body');
// console.log(popupBody);
// magicBtn.addEventListener('click', function() {
//   console.log('clicke!!');
//   popupBody.style.backgroundColor = 'red';
// });



document.addEventListener('DOMContentLoaded', function () {
  var emptyBody = document.querySelector('.empty-body');
emptyBody.style.backgroundColor="red";
  // magicBtn.addEventListener('click', function() {
  //   console.log('clicked btn');
  //   popupBody.style.backgroundColor = 'green';
  // });

});



// document.addEventListener('DOMContentLoaded', function () {
//   var popupBody = document.querySelector('.popup-body');
//   var emptyBody = document.querySelector('.empty-body');
//
//   console.log('el:', popupBody, emptyBody);
//   var magicBtn = document.querySelector('.magic-btn');
//   console.log('popup el', popupBody);
//   magicBtn.addEventListener('click', function() {
//     console.log('clicked btn');
//     // popupBody.style.backgroundColor = 'green';
//     document.body.style.backgroundColor="red";
//   });
//
//   // magicBtn.addEventListener('click', function() {
//   //   console.log('clicked btn');
//   //   popupBody.style.backgroundColor = 'green';
//   // });
//
// });






// document.addEventListener('DOMContentLoaded', function () {
//   var divs = document.querySelectorAll('div');
//   for (var i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', click);
//   }
// });
