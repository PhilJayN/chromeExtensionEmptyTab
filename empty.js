//For empty.html

// console.log('empty js running!');
// var emptyBody = document.querySelector('.empty-body');
// console.log(emptyBody);
// magicBtn.addEventListener('click', function() {
//   console.log('clicke!!');
//   emptyBody.style.backgroundColor = 'red';
// });

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
