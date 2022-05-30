const box1 = document.getElementsByClassName('color')[0];
const box2 = document.getElementsByClassName('color')[1];
const box3 = document.getElementsByClassName('color')[2];
const box4 = document.getElementsByClassName('color')[3];

box1.style.backgroundColor = 'black';
box2.style.backgroundColor = 'red';
box3.style.backgroundColor = 'blue';
box4.style.backgroundColor = 'green';

// document.createElement('class');
// document.getElementsByClassName('selected');
box1.classList.add('selected');

const pixel = document.querySelectorAll('.pixel');
const color = document.querySelectorAll('.color');

function confereUnicaSelect(event) {
  for (let index = 0; index < color.length; index += 1) {
    if (color[index].classList.contains('selected')) {
      color[index].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

box1.addEventListener('click', confereUnicaSelect);
box2.addEventListener('click', confereUnicaSelect);
box3.addEventListener('click', confereUnicaSelect);
box4.addEventListener('click', confereUnicaSelect);

// Requisito 8



for(let i = 0; i < color.length; i += 1){
  color[i].addEventListener('click', pegaClick = (event) => {
  let corDaCaixa = event.target.style.backgroundColor;
    for(let i = 0; i < pixel.length; i += 1){
      pixel[i].addEventListener('click', confereClick = (event) => {
      pixel[i].classList.remove('selected')
      // event.target.classList.add('selected');
      event.target.style.backgroundColor = corDaCaixa;
      })
    }
  })
}
// Requisito 9
const button = document.getElementById('clear-board');

button.addEventListener('click', (event) => {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
    pixel[index].classList.remove('selected');
  }
});
