//For empty.html

// var emptyBody = document.querySelector('.empty-body');
// console.log(emptyBody);
// magicBtn.addEventListener('click', function() {
//   console.log('clicke!!');
//   emptyBody.style.backgroundColor = 'red';
// });


console.log('empty js running!');
chrome.tabs.executeScript(null, {
       code: 'var config = ' + JSON.stringify(getKeywords)
   }, function() {
       chrome.tabs.executeScript(null, {file: 'custom.js'});
   });


document.addEventListener('DOMContentLoaded', function () {
  var emptyBody = document.querySelector('.empty-body');
  var btn = document.querySelector('.btn');
  console.log('el:', emptyBody);
  btn.addEventListener('click', function() {
    console.log('clicked btn');
    emptyBody.style.backgroundColor = 'green';
  });

  // magicBtn.addEventListener('click', function() {
  //   console.log('clicked btn');
  //   popupBody.style.backgroundColor = 'green';
  // });
});
