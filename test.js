let s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}

//pytagoras 
function pythagorean(sideA, sideB){
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}

const getAreal = (elem) => {
  const bredde = elem.offsetWidth;
  const hoyde = elem.offsetHeight;
  const areal = bredde * hoyde;
  alert('areal' + areal.toFixed(2) + 'px');
}

/*
const getRandomNum = () => {
  const randomNum = Math.random();
  if(randomNum < 0.33){
    console.log(randomNum * 1000);
  } else if(0.33 < randomNum < 0.66){
    console.log(randomNum * Math.ceil(randomNum * 2));
  } else if(0.66 < randomNum){
    console.log(randomNum.toFixed(1));
  } else{
    console.log(randomNum);
  }
}
setInterval(() => {
  getRandomNum();
}, 500);*/


function upperCase (string){
  let sentence = '';
  let wordArr = string.split(' ');
  for(let i = 0; i < wordArr.length; i++){
    let word = wordArr[i];
    let wordUppercase = word.charAt(0).toUpperCase() + word.slice(1);
    sentence += wordUppercase + ' '
  }
  console.log(sentence);
}
upperCase('jeg heter conrad')





/*
window.onclick = (e) =>{
  console.log(e.target);
}
*/

const allMenuBtn = document.querySelectorAll('.menu-btn');
[...allMenuBtn].forEach(menuBtn =>{
  menuBtn.addEventListener('click',  e => {
    const menuBackdrop = menuBtn.parentElement.querySelector('.menu-backdrop');
    const menuBoxContainer = menuBtn.parentElement.querySelector('.menu-box-container');
    const menuBox = menuBtn.parentElement.querySelector('.menu-box');
    const body = document.querySelector('body');

    menuBackdrop.style.zIndex = '1250';

    menuBoxContainer.style.top = menuBtn.offsetTop + 'px';
    menuBoxContainer.style.left = menuBtn.offsetLeft + 'px';
    menuBoxContainer.style.width = window.innerWidth - menuBtn.offsetLeft + 'px';
    menuBoxContainer.style.height = window.innerHeight - menuBtn.offsetTop + 'px';

    menuBox.classList.add('show-menu');
    body.classList.add('no-scroll')
  });
});

const allMenuBackdrops = document.querySelectorAll('.menu-backdrop');
[...allMenuBackdrops].forEach(menuBackdrop => {
  menuBackdrop.addEventListener('click', e => {
    const menuBoxContainer = menuBackdrop.parentElement.querySelector('.menu-box-container');
    const menuBox = menuBackdrop.parentElement.querySelector('.menu-box');
    const body = document.querySelector('body');

    menuBoxContainer.style.top = '';
    menuBoxContainer.style.left = '';
    menuBoxContainer.style.width = '';
    menuBoxContainer.style.height = '';

    menuBox.classList.remove('show-menu');
    menuBackdrop.style.zIndex = '';

    body.classList.remove('no-scroll')
  })
});

const inputNumberBox = document.querySelector('#inputNumberBox');
let guessesInput = document.querySelector('#rangeInput');
let guesses = document.querySelector('#rangeInput').value;
guessesInput.onchange = () => {
  guesses = document.querySelector('#rangeInput').value;
}
let randomNumber = (Math.random() * 100).toFixed(0);
let count = null;
inputNumberBox.addEventListener('keyup', e => {
  if(e.keyCode === 13){
    if(count < guesses){
      guessingGame();
    } else{
      console.log('du har ingen flere forsøk, tallet var ' + randomNumber);
    }
    count = count + 1;
  }
});

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {
  randomNumber = (Math.random() * 100).toFixed(0);
  count = 0;
  inputNumberBox.value = '';
});

const guessingGame = () => {
  const inpValue = inputNumberBox.value;
  if(inpValue < randomNumber){
    console.log('du har et lavere tall');
  } else if(inpValue > randomNumber){
    console.log('du har et høyere tall');
  } else if(inpValue == randomNumber){
    console.log('du klarte det')
  }
}


const box = document.querySelector('#main');
const changeColor = () => {
  if(box.classList.contains('blue')){
    box.style.setProperty('--background-color', 'blue');
  }
  if(box.classList.contains('red')){
    box.style.setProperty('--background-color', 'red');
  }
}
changeColor();

const test = () => {
  box.classList.remove('red');
  box.classList.add('blue');
}


const mainNode = document.getElementById('main')

// End setup

function callback(mutationsList, observer) {
    console.log('Mutations:', mutationsList)
    console.log('Observer:', observer)
    mutationsList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
            alert('Ch-ch-ch-changes!')
        }
    })
}

const mutationObserver = new MutationObserver(callback)

mutationObserver.observe(mainNode, { attributes: true })








let rippleId = undefined;
document.addEventListener('mousedown', e => {
  if(e.target.classList.contains('ripple')){
    const button = e.target;
    const x = e.offsetX;
    const y = e.offsetY;
    const width = button.offsetWidth;
    const height = button.offsetHeight;

    const ripple = document.createElement('span');
    const rippleChild = document.createElement('span');

    let rippleColors = ['ripple-blue', 'ripple-white', 'ripple-grey', 'ripple-black', 'ripple-invert', 'ripple-invert-alt', 'ripple-main-theme', 'ripple-second-theme'];
    for(let i = 0; i < rippleColors.length; i++){
      if(button.classList.contains(rippleColors[i])){
        switch(rippleColors[i]){
          case 'ripple-blue':
            rippleChild.style.setProperty('--rippleColor', 'var(--ripple-blue-color)');
            break;
          case 'ripple-white':
            rippleChild.style.setProperty('--rippleColor', 'var(--ripple-white-color)');
            break;
          case 'ripple-grey':
            rippleChild.style.setProperty('--rippleColor', 'var(--ripple-grey-color)');
            break;
          case 'ripple-black':
            rippleChild.style.setProperty('--rippleColor', 'var(--ripple-black-color)');
            break;
          case 'ripple-invert':
            rippleChild.style.setProperty('--rippleColor', 'var(--ripple-invert-color)');
            break;
          case 'ripple-invert-alt':
            rippleChild.style.setProperty('--rippleColor', 'var(--ripple-invert-alt-color)');
            break;
          case 'ripple-main-theme':
            rippleChild.style.setProperty('--rippleColor', 'var(--main-theme-ripple-color)');
            break;
          case 'ripple-second-theme':
            rippleChild.style.setProperty('--rippleColor', 'var(--second-theme-ripple-color)');
            break;
        }
      }
    }

    rippleChild.className = 'ripple-effect-child';
    ripple.appendChild(rippleChild);

    ripple.className = 'ripple-effect ripple-effect-visible';
    ripple.id = s4();
    rippleId = ripple.id;
    
    let xOffset = 0;
    let yOffset = 0;

    if(x >= width/2){
      xOffset = x;
    } else if(x <= width/2){
      xOffset = width - x;
    }
    if(y >= height/2){
      yOffset = y;
    } else if(y <= height/2){
      yOffset = height - y;
    }

    const rippleLenght = pythagorean(xOffset, yOffset);

    ripple.style.width = rippleLenght * 2 + 'px';
    ripple.style.height = rippleLenght * 2 + 'px';
    ripple.style.left = x - rippleLenght + 'px';
    ripple.style.top = y - rippleLenght + 'px';

    button.querySelector('.ripple-box').appendChild(ripple);
   }
});
document.addEventListener('mouseup', e => {
  if(e.target.classList.contains('ripple')){
      removeRipple(rippleId);
   }
});
document.addEventListener('mouseout', e => {
  if(e.target.classList.contains('ripple')){
      removeRipple(rippleId);
  }
});

let oldRipple = undefined
const removeRipple = (rippleId) => {
  if(rippleId !== oldRipple){
    const elem = document.getElementById(rippleId);
    const elemChild = elem.querySelector('.ripple-effect-child');
    if(elem){
      elemChild.classList.add('ripple-effect-child-leaving');
      setTimeout(() => {
        elem.parentNode.removeChild(elem);
      }, 550);
    }
  } else{}
  oldRipple = rippleId;
}

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const yValue = (x) => {
  return (Math.pow(x, 2) / 300);
}

let x = 0;
while(x < 400){
  const y = yValue(x);
  ctx.fillRect(x, y, 1, 1);
  console.log(x, y);
  i++
}