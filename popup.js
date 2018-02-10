var magicBtn = document.querySelector('.magic-btn');
var body = document.querySelector('.main-body');
magicBtn.addEventListener('click', function() {
  console.log('clicke!!');
  body.style.backgroundColor = 'red';
});
