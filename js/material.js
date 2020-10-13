//CUSTOM THEME CONSTRUCTOR
//DEFAULT CUSTOM THEMES
const theme = {
  mainTheme: {
    light: {
      color: '#1976d2',

      rippleColor: 'rgb(25, 118, 210)',
      rippleInvertColor: 'rgb(255, 255, 255)',
      rippleDefaultColor: 'rgb(255, 255, 255)',

      button: {
        buttonBackgroundColorHover: 'rgba(25, 118, 210, 0.08)',
        buttonBoxFontColor: '#fff',
        buttonBoxBackgroundColorHover: 'rgb(17, 82, 147)',
        buttonBorderColor: 'rgba(25, 118, 210, 0.5)',
      },

      iconButton: {
        iconButtonColor: 'rgb(25, 118, 210)',
        iconButtonHover: 'rgba(25, 118, 210, 0.08)',
      },

      iconButtonDefault: {
        iconButtonColor: '#fff',
        iconButtonHover: 'rgba(0, 0, 0, 0.08)',
      },

      input: {

      },

      tab: {
        
      },
      switch: {
        switchColor: 'rgb(25, 118, 210)',
        switchHoverColor: 'rgba(25, 118, 210, 0.08)',
      },
      radio: {
        radioBackgroundColorHover: 'rgba(25, 118, 210, 0.08)',
      },
    },
    dark: {
      color: '#90caf9',

      rippleColor: 'rgb(144, 202, 249)',
      rippleInvertColor: 'rgb(0, 0, 0)',
      rippleDefaultColor: 'rgb(255, 255, 255)',

      button: {
        buttonBackgroundColorHover: 'rgba(144, 202, 249, 0.08)',
        buttonBoxFontColor: 'rgba(0, 0, 0, 0.87)',
        buttonBoxBackgroundColorHover: 'rgb(100, 141, 174)',
        buttonBorderColor: 'rgba(144, 202, 249, 0.5)',
      },

      iconButton: {
        iconButtonColor: 'rgb(144, 202, 249)',
        iconButtonHover: 'rgba(144, 202, 249, 0.08)',
      },

      iconButtonDefault: {
        iconButtonColor: '#fff',
        iconButtonHover: 'rgba(255, 255, 255, 0.08)',
      },

      input: {

      },

      tab: {
        
      },
      switch: {
        switchColor: 'rgb(144, 202, 249)',
        switchHoverColor: 'rgba(144, 202, 249, 0.08)',
      },
      radio: {
        radioBackgroundColorHover: 'rgba(144, 202, 249, 0.08)',
      },
    }
  },
  secondTheme: {
    light: {

    },
    dark: {

    }
  }
}

window.onload = () => {
  themeConstructor(theme);
}

const themeConstructor = (theme) => {
  let head = document.querySelector('head');
  let sheet = document.querySelector('[name="custom-theme"]');
  if(sheet == null){
    let sheet = document.createElement('style');
    sheet.setAttribute('name', 'custom-theme');
    sheet.innerHTML = `
      :root{
        --main-theme-ripple-color: ${theme.mainTheme.light.rippleColor};
        --second-theme-ripple-color: ${theme.secondTheme.light.rippleColor};
        --main-theme-ripple-invert-color: ${theme.mainTheme.light.rippleInvertColor};
        --second-theme-ripple-invert-color: ${theme.secondTheme.light.rippleInvertColor};
        --main-theme-ripple-default-color: ${theme.mainTheme.light.rippleDefaultColor};
        --second-theme-ripple-default-color: ${theme.secondTheme.light.rippleDefaultColor};
        --navBar: ${theme.mainTheme.light.color};
        --inputColor: ${theme.mainTheme.light.color};
      }
      .darkmode{
        --main-theme-ripple-color: ${theme.mainTheme.dark.rippleColor};
        --second-theme-ripple-color: ${theme.secondTheme.dark.rippleColor};
        --main-theme-ripple-invert-color: ${theme.mainTheme.dark.rippleInvertColor};
        --second-theme-ripple-invert-color: ${theme.secondTheme.dark.rippleInvertColor};
        --main-theme-ripple-default-color: ${theme.mainTheme.dark.rippleDefaultColor};
        --second-theme-ripple-default-color: ${theme.secondTheme.dark.rippleDefaultColor};
        --inputColor: ${theme.mainTheme.dark.color};
      }

      .button-main-theme-none{
        color: ${theme.mainTheme.light.color};
      }
      .button-main-theme-none:hover{
        background-color: ${theme.mainTheme.light.button.buttonBackgroundColorHover};
      }
      .darkmode .button-main-theme-none{
        color: ${theme.mainTheme.dark.color};
      }
      .darkmode .button-main-theme-none:hover{
        background-color: ${theme.mainTheme.dark.button.buttonBackgroundColorHover};
      }
      .button-main-theme-outline{
        color: ${theme.mainTheme.light.color};
        border-color: ${theme.mainTheme.light.button.buttonBorderColor};
      }
      .button-main-theme-outline:hover{
        background-color: ${theme.mainTheme.light.button.buttonBackgroundColorHover};
        border-color: ${theme.mainTheme.light.color};
      }
      .darkmode .button-main-theme-outline{
        color: ${theme.mainTheme.dark.color};
        border-color: ${theme.mainTheme.dark.button.buttonBorderColor};
      }
      .darkmode .button-main-theme-outline:hover{
        background-color: ${theme.mainTheme.dark.button.buttonBackgroundColorHover};
        border-color: ${theme.mainTheme.dark.color};
      }
      .button-main-theme-box{
        color: ${theme.mainTheme.light.button.buttonBoxFontColor};
        background-color: ${theme.mainTheme.light.color};
      }
      .button-main-theme-box:hover{
        background-color: ${theme.mainTheme.light.button.buttonBoxBackgroundColorHover};
      }
      .darkmode .button-main-theme-box{
        color: ${theme.mainTheme.dark.button.buttonBoxFontColor};
        background-color: ${theme.mainTheme.dark.color};
      }
      .darkmode .button-main-theme-box:hover{
        background-color: ${theme.mainTheme.dark.button.buttonBoxBackgroundColorHover};
      }

      .button-icon-main-theme{
        color: ${theme.mainTheme.light.iconButton.iconButtonColor}
      }
      .button-icon-main-theme:hover{
        background-color: ${theme.mainTheme.light.iconButton.iconButtonHover}
      }
      .darkmode .button-icon-main-theme{
        color: ${theme.mainTheme.dark.iconButton.iconButtonColor}
      }
      .darkmode .button-icon-main-theme:hover{
        background-color: ${theme.mainTheme.dark.iconButton.iconButtonHover}
      }

      .button-icon-default-main-theme{
        color: ${theme.mainTheme.light.iconButtonDefault.iconButtonColor};  
      }
      .button-icon-default-main-theme:hover{
        background-color: ${theme.mainTheme.light.iconButtonDefault.iconButtonHover};  
      }
      .darkmode .button-icon-default-main-theme{
        color: ${theme.mainTheme.dark.iconButtonDefault.iconButtonColor};  
      }
      .darkmode .button-icon-default-main-theme:hover{
        background-color: ${theme.mainTheme.dark.iconButtonDefault.iconButtonHover};  
      }

      .switch-main-theme .switch-active{
        --ripple-invert-color: ${theme.mainTheme.light.rippleColor}
      }
      .switch-main-theme .switch-active .switch-head{
        background-color: ${theme.mainTheme.light.switch.switchColor};
      }
      .switch-main-theme .switch-active:hover .switch-head-container{
        background-color: ${theme.mainTheme.light.switch.switchHoverColor};
      }
      .darkmode .switch-main-theme .switch-active{
        --ripple-invert-color: ${theme.mainTheme.dark.rippleColor}
      }
      .darkmode .switch-main-theme .switch-active .switch-head{
        background-color: ${theme.mainTheme.dark.switch.switchColor};
      }
      .darkmode .switch-main-theme .switch-active:hover .switch-head-container{
        background-color: ${theme.mainTheme.dark.switch.switchHoverColor};
      }

      .radio-button-main-theme:hover{
        background-color: ${theme.mainTheme.light.radio.radioBackgroundColorHover};
      }
      .radio-active .radio-button-main-theme{
        --ripple-invert-color: ${theme.mainTheme.light.rippleColor};
      }
      .radio-active .radio-button-main-theme .radio-button-circle{
        border-color: ${theme.mainTheme.light.color};
      }
      .radio-active .radio-button-main-theme .radio-button-dot{
        background-color: ${theme.mainTheme.light.color};
      }
      .darkmode .radio-button-main-theme:hover{
        background-color: ${theme.mainTheme.dark.radio.radioBackgroundColorHover};
      }
      .darkmode .radio-active .radio-button-main-theme{
        --ripple-invert-color: ${theme.mainTheme.dark.rippleColor};
      }
      .darkmode .radio-active .radio-button-main-theme .radio-button-circle{
        border-color: ${theme.mainTheme.dark.color};
      }
      .darkmode .radio-active .radio-button-main-theme .radio-button-dot{
        background-color: ${theme.mainTheme.dark.color};
      }
    `
    head.parentNode.insertBefore(sheet, head.nextSibling);
  } else if(sheet !== null){
    sheet.innerHTML = `
      :root{
        --main-theme-ripple-color: ${theme.mainTheme.light.rippleColor};
        --second-theme-ripple-color: ${theme.secondTheme.light.rippleColor};
        --main-theme-ripple-invert-color: ${theme.mainTheme.light.rippleInvertColor};
        --second-theme-ripple-invert-color: ${theme.secondTheme.light.rippleInvertColor};
        --main-theme-ripple-default-color: ${theme.mainTheme.light.rippleDefaultColor};
        --second-theme-ripple-default-color: ${theme.secondTheme.light.rippleDefaultColor};
        --navBar: ${theme.mainTheme.light.color};
        --inputColor: ${theme.mainTheme.light.color};
      }
      .darkmode{
        --main-theme-ripple-color: ${theme.mainTheme.dark.rippleColor};
        --second-theme-ripple-color: ${theme.secondTheme.dark.rippleColor};
        --main-theme-ripple-invert-color: ${theme.mainTheme.dark.rippleInvertColor};
        --second-theme-ripple-invert-color: ${theme.secondTheme.dark.rippleInvertColor};
        --main-theme-ripple-default-color: ${theme.mainTheme.dark.rippleDefaultColor};
        --second-theme-ripple-default-color: ${theme.secondTheme.dark.rippleDefaultColor};
        --inputColor: ${theme.mainTheme.dark.color};
      }

      .button-main-theme-none{
        color: ${theme.mainTheme.light.color};
      }
      .button-main-theme-none:hover{
        background-color: ${theme.mainTheme.light.button.buttonBackgroundColorHover};
      }
      .darkmode .button-main-theme-none{
        color: ${theme.mainTheme.dark.color};
      }
      .darkmode .button-main-theme-none:hover{
        background-color: ${theme.mainTheme.dark.button.buttonBackgroundColorHover};
      }
      .button-main-theme-outline{
        color: ${theme.mainTheme.light.color};
        border-color: ${theme.mainTheme.light.button.buttonBorderColor};
      }
      .button-main-theme-outline:hover{
        background-color: ${theme.mainTheme.light.button.buttonBackgroundColorHover};
        border-color: ${theme.mainTheme.light.color};
      }
      .darkmode .button-main-theme-outline{
        color: ${theme.mainTheme.dark.color};
        border-color: ${theme.mainTheme.dark.button.buttonBorderColor};
      }
      .darkmode .button-main-theme-outline:hover{
        background-color: ${theme.mainTheme.dark.button.buttonBackgroundColorHover};
        border-color: ${theme.mainTheme.dark.color};
      }
      .button-main-theme-box{
        color: ${theme.mainTheme.light.button.buttonBoxFontColor};
        background-color: ${theme.mainTheme.light.color};
      }
      .button-main-theme-box:hover{
        background-color: ${theme.mainTheme.light.button.buttonBoxBackgroundColorHover};
      }
      .darkmode .button-main-theme-box{
        color: ${theme.mainTheme.dark.button.buttonBoxFontColor};
        background-color: ${theme.mainTheme.dark.color};
      }
      .darkmode .button-main-theme-box:hover{
        background-color: ${theme.mainTheme.dark.button.buttonBoxBackgroundColorHover};
      }

      .button-icon-main-theme{
        color: ${theme.mainTheme.light.iconButton.iconButtonColor}
      }
      .button-icon-main-theme:hover{
        background-color: ${theme.mainTheme.light.iconButton.iconButtonHover}
      }
      .darkmode .button-icon-main-theme{
        color: ${theme.mainTheme.dark.iconButton.iconButtonColor}
      }
      .darkmode .button-icon-main-theme:hover{
        background-color: ${theme.mainTheme.dark.iconButton.iconButtonHover}
      }

      .button-icon-default-main-theme{
        color: ${theme.mainTheme.light.iconButtonDefault.iconButtonColor};  
      }
      .button-icon-default-main-theme:hover{
        background-color: ${theme.mainTheme.light.iconButtonDefault.iconButtonHover};  
      }
      .darkmode .button-icon-default-main-theme{
        color: ${theme.mainTheme.dark.iconButtonDefault.iconButtonColor};  
      }
      .darkmode .button-icon-default-main-theme:hover{
        background-color: ${theme.mainTheme.dark.iconButtonDefault.iconButtonHover};  
      }

      .switch-main-theme .switch-active{
        --ripple-invert-color: ${theme.mainTheme.light.rippleColor}
      }
      .switch-main-theme .switch-active .switch-head{
        background-color: ${theme.mainTheme.light.switch.switchColor};
      }
      .switch-main-theme .switch-active:hover .switch-head-container{
        background-color: ${theme.mainTheme.light.switch.switchHoverColor};
      }
      .darkmode .switch-main-theme .switch-active{
        --ripple-invert-color: ${theme.mainTheme.dark.rippleColor}
      }
      .darkmode .switch-main-theme .switch-active .switch-head{
        background-color: ${theme.mainTheme.dark.switch.switchColor};
      }
      .darkmode .switch-main-theme .switch-active:hover .switch-head-container{
        background-color: ${theme.mainTheme.dark.switch.switchHoverColor};
      }

      .radio-button-main-theme:hover{
        background-color: ${theme.mainTheme.light.radio.radioBackgroundColorHover};
      }
      .radio-active .radio-button-main-theme{
        --ripple-invert-color: ${theme.mainTheme.light.rippleColor};
      }
      .radio-active .radio-button-main-theme .radio-button-circle{
        border-color: ${theme.mainTheme.light.color};
      }
      .radio-active .radio-button-main-theme .radio-button-dot{
        background-color: ${theme.mainTheme.light.color};
      }
      .darkmode .radio-button-main-theme:hover{
        background-color: ${theme.mainTheme.dark.radio.radioBackgroundColorHover};
      }
      .darkmode .radio-active .radio-button-main-theme{
        --ripple-invert-color: ${theme.mainTheme.dark.rippleColor};
      }
      .darkmode .radio-active .radio-button-main-theme .radio-button-circle{
        border-color: ${theme.mainTheme.dark.color};
      }
      .darkmode .radio-active .radio-button-main-theme .radio-button-dot{
        background-color: ${theme.mainTheme.dark.color};
      }
    `
  }
}
//CALL CAHNGES TO THEME HERE
/*
  Example:
  theme.mainTheme.light.color = 'blue';
  themeConstructor(theme);
*/
const themeChangerButton = document.querySelector('#themeChangerBtn');
themeChangerButton.addEventListener('click', e => {
  theme.mainTheme.light.rippleColor = 'rgb(76, 175, 80)';
  theme.mainTheme.light.rippleInvertColor = 'rgb(0, 0, 0)';
  theme.mainTheme.light.color = '#4caf50';
  theme.mainTheme.light.button.buttonBorderColor = 'rgba(76, 175, 80, 0.5)';
  theme.mainTheme.light.button.buttonBoxBackgroundColorHover = 'rgb(53, 122, 56)';
  theme.mainTheme.light.button.buttonBoxFontColor = 'rgba(0, 0, 0, 0.87)';
  theme.mainTheme.light.button.buttonBackgroundColorHover = 'rgba(76, 175, 80, 0.08)';
  theme.mainTheme.light.iconButton.iconButtonColor = 'rgb(76, 175, 80)';
  theme.mainTheme.light.iconButton.iconButtonHover = 'rgba(76, 175, 80, 0.08)';
  theme.mainTheme.light.radio.radioBackgroundColorHover = 'rgba(76, 175, 80, 0.08)';
  theme.mainTheme.light.iconButtonDefault.iconButtonColor = 'rgba(0, 0, 0, 0.87)';
  theme.mainTheme.light.rippleDefaultColor = 'rgba(0, 0, 0)';
  themeConstructor(theme);
});

const darkmode = () => {
  const body = document.querySelector("body");
  body.classList.toggle("darkmode");
}

const darkmodeBtn = (el) => {
  el.innerHTML = document.querySelector('body').classList.contains('darkmode') ? 'brightness_high' : 'brightness_medium';
}

const allImg = document.querySelectorAll('img');
[...allImg].forEach(img => {
  console.log(img.src);
});

//random class generator
let s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}

//pytagoras 
function pythagorean(sideA, sideB){
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}

//closest parent with class
var getClosest = (elem, selector) => {
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		if ( elem.matches( selector ) ) return elem;
	}
	return null;
};

//Check if visible
var checkVisible = (elm) => {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.top < 0 || rect.top - viewHeight >= 0);
}

let clickAwayListener = (el) => {
  document.addEventListener('click', e => {
    if(el.contains(e.target)){
      return false;
    }
    else{
      return true;
    }
  });
}

let key = undefined;
document.addEventListener('keydown', e => {
  key = e.key;
});

const allInputs = document.querySelectorAll('.input-underline-box, .input-outline-box, .input-filled-box');
[...allInputs].forEach(input => {
  const color = input.getAttribute('data-color');
  if(color){
    input.style.setProperty('--inputColor', color);
  }
});
const allFabs = document.querySelectorAll('.action-button-container');
[...allFabs].forEach(fabContainer => {
  const fab = fabContainer.querySelector('.action-button');
  const fabOptions = fabContainer.querySelector('.action-button-options');
  const allFabOption = fabOptions.querySelectorAll('.action-button-option');
  [...allFabOption].forEach(fabOption => {
    fabOption.addEventListener('click', e => {
      fabOptions.classList.remove('action-button-active');
    });
  });
  fab.addEventListener('mouseenter', e => {
    fabOptions.classList.add('action-button-active');
  });
  fabContainer.addEventListener('mouseleave', e => {
    fabOptions.classList.remove('action-button-active');
  });
  fab.addEventListener('click', e => {
    fabOptions.classList.toggle('action-button-active');
  });
});
/*
//TODO: Hva gjør denne koden? xDDDDD
const allInput = document.querySelectorAll('.input-underline, .input-outline, .input-filled');
[...allInput].forEach(input => {
  input.addEventListener("change", e => {
    const deleteIcon = input.parentElement.querySelector('.input-delete-icon');
    if(input.value != '' && input.parentNode.contains(deleteIcon)){
      const color = getComputedStyle(document.documentElement).getPropertyValue('--color');
      deleteIcon.style.color = color;
    } else{
      deleteIcon.style.color = 'transparent';
    }
  });
});*/

document.addEventListener('mouseup', e => {
  if(e.target.classList.contains('menu-btn')){
    openMenu(e.target);
  }
});
const openMenu = function(target) {
  const allActiveMenus = document.querySelectorAll('.show-menu');
  for (let i = 0; i < allActiveMenus.length; i++) {
    if(allActiveMenus[i] == target.parentNode.querySelector('.menu-box')){
    } else if(allActiveMenus[i] !== target.parentNode.querySelector('.menu-box')){
      allActiveMenus[i].classList.remove('show-menu');
    }
  }
  const menu = getClosest(target, '.menu').querySelector('.menu-box')
  menu.classList.toggle("show-menu");
  const botOffset = target.offsetHeight + event.screenY + menu.offsetHeight;
  if(screen.height < (botOffset)){
    if(target.matches('.menu-ontop')){
      menu.style.removeProperty('top');
      menu.style.setProperty('bottom', '-8px');
    } else{
      menu.style.removeProperty('top');
      menu.style.setProperty('bottom', '100%');
    }
  } else{
    if(target.matches('.menu-ontop')){
      menu.style.removeProperty('bottom');
      menu.style.setProperty('top', '-8px');
    } else{
      menu.style.removeProperty('bottom');
      menu.style.setProperty('top', '100%');
    }
  }
}
const closeMenu = function(target) {
  const menu = target.parentNode;
  menu.classList.toggle("show-menu");
}

const allSelects = document.querySelectorAll('.select');
[...allSelects].forEach(select => {
  const selectBtn = select.querySelector('.select-btn');
  const selectMenu = select.querySelector('.select-menu');
  selectBtn.addEventListener('click', e => {
    selectMenu.classList.toggle('show-select-menu');
  });
  selectBtn.style.maxWidth = selectMenu.offsetWidth + 'px';
  if(selectBtn.classList.contains('input-underline-box')){
    selectMenu.style.top = 3 - (36*0) + 'px'
    selectBtn.querySelector('input').style.maxWidth = selectMenu.offsetWidth + 'px';
  } else if(selectBtn.classList.contains('input-outline-box')){
    selectMenu.style.top = 8 - (36*0) + 'px'
    selectBtn.querySelector('input').style.maxWidth = selectMenu.offsetWidth-20 + 'px';
  } else if(selectBtn.classList.contains('input-filled-box')){
    selectMenu.style.top = 12 - (36*0) + 'px'
    selectBtn.querySelector('input').style.maxWidth = selectMenu.offsetWidth + 'px';
  }
});

const closeSelect = (el) => {
  el.parentElement.classList.remove('show-select-menu');
}

let menu = undefined;
window.addEventListener('click', event => {
  var menuParent = getClosest(event.target, '.menu-btn, .menu-box');
  var modalParentContainer = getClosest(event.target, '.modal-container');
  var modalParent = getClosest(event.target, '.modal, .modal-btn');
  var dateSelector = getClosest(event.target, '.calendar-box, .select-date-box');
  var drawer = getClosest(event.target, '.drawer-content, button');
  var drawerContainer = getClosest(event.target, '.drawer, button');
  var selectParent = getClosest(event.target, '.select-btn, .select');
  if(menuParent == null){
    var menus = document.getElementsByClassName("menu-box");
    var i;
    for (i = 0; i < menus.length; i++) {
      var openMenu = menus[i];
      if (openMenu.classList.contains('show-menu')) {
        openMenu.classList.remove('show-menu');
      }
    }
  }
  if(menuParent !== null){
    const input = menuParent.querySelector('.input-underline, .input-outline, .input-filled');
    menu = menuParent.parentNode.lastElementChild;
    if(input){
      menu.style.minWidth = menuParent.offsetWidth + 'px';
    }
    menu.onclick = (event) => {
      if(event.target.nodeName == 'BUTTON'){
        if(input){
          input.value = event.target.innerHTML;
        }
        /*
        const inputBox = input.parentElement;
         // trenger fiks
        const color = window.getComputedStyle( inputBox ,null).getPropertyValue('background-color');
        const deleteIcon = document.createElement('span');
        deleteIcon.innerHTML = 'close';
        if(color != 'rgba(0, 0, 0, 0)'){
          deleteIcon.style.backgroundColor = '';
          deleteIcon.style.background = 'inherit'
        }
        deleteIcon.className = 'material-icons input-delete-icon';
        deleteIcon.setAttribute( 'onClick', 'inputDeleteHandler(this)');
        input.parentNode.appendChild(deleteIcon);*/
      }
    }
  }
  if(modalParentContainer){
    if(modalParent == null){
      document.querySelector('body').classList.remove('no-scroll');
    }
  }
  if(modalParent == null){
    var modalContainers = document.getElementsByClassName("modal-container");
    var i;
    for (i = 0; i < modalContainers.length; i++) {
      var openModalContainers = modalContainers[i];
      if (openModalContainers.classList.contains('show-modal-container')) {
        openModalContainers.classList.remove('show-modal-container');
      }
    }
    var modals = document.getElementsByClassName("modal");
    var i;
    for (i = 0; i < modals.length; i++) {
      var openModals = modals[i];
      if (openModals.classList.contains('show-modal')) {
        openModals.classList.remove('show-modal');
      }
    }
  }
  if(dateSelector == null){
    var calendarBox = document.getElementsByClassName("calendar-box");
    var i;
    for (i = 0; i < calendarBox.length; i++) {
      var openCalendarBox = calendarBox[i];
      if (openCalendarBox.classList.contains('show-calendar')) {
        openCalendarBox.classList.remove('show-calendar');
      }
    }
  }
  if(drawerContainer !== null){
    if(drawer == null){
      document.querySelector('body').classList.remove('no-scroll');
    }
  }
  if(drawer == null){
    var drawer = document.getElementsByClassName("drawer");
    var i;
    for (i = 0; i < drawer.length; i++) {
      var openDrawer = drawer[i];
      if (openDrawer.classList.contains('show-drawer')) {
        openDrawer.classList.remove('show-drawer');
      }
    }
  }
  if(selectParent == null){
    var selectMenus = document.getElementsByClassName('select-menu');
    var i;
    for (i = 0; i < selectMenus.length; i++) {
      var openSelectMenu = selectMenus[i];
      if (openSelectMenu.classList.contains('show-select-menu')) {
        openSelectMenu.classList.remove('show-select-menu');
      }
    }
  }
});

const allDatePickers = document.querySelectorAll('.select-date-box');

[...allDatePickers].forEach(datePicker => {
  datePicker.addEventListener('click', e => {
    const dateSelectorBox = getClosest(e.target, '.date-selector');
    const calendarBox = dateSelectorBox.querySelector('.calendar-box');
    calendarBox.classList.toggle('show-calendar');
    const botOffset = e.target.offsetHeight + event.screenY + calendarBox.offsetHeight;
    if(screen.height < (botOffset)){
      calendarBox.style.removeProperty('top');
      calendarBox.style.setProperty('bottom', '100%');
    } else{
      calendarBox.style.removeProperty('bottom');
      calendarBox.style.setProperty('top', '100%');
    }
  });
});

// get calendar

const allCalendarBoxes = document.querySelectorAll('.calendar-box');
[...allCalendarBoxes].forEach(calendarBox => {
  const today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

  showCalendar(currentMonth, currentYear);

  function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();

    const tbl = calendarBox.querySelector(".calendar-numbers"); // body of the calendar
    calendarHeader = calendarBox.querySelector('#calendar-header');
    calendarHeader.innerHTML = '';
    let header = document.createElement('span');
    header.classList = 'calendar-year-button-txt';
    let ripple = document.createElement('span');
    ripple.classList = 'ripple-box';
    let txt = document.createTextNode(months[month] + " " + year);
    let dropdownIcon = document.createElement('span');
    dropdownIcon.classList = 'material-icons calendar-year-button-icon';
    let dropdownTxt = document.createTextNode('arrow_drop_down');
    dropdownIcon.appendChild(dropdownTxt);
    header.appendChild(txt);
    header.appendChild(dropdownIcon)
    calendarHeader.appendChild(header);
    calendarHeader.appendChild(ripple);


    let date = 1
    for (let i = 0; i < 6; i++){

      for (let j = 0; j < 7; j++){
        tbl.children[i].children[j].classList.remove('numbers-row-item-disabled');
        tbl.children[i].children[j].classList.remove('numbers-row-item-active');
        tbl.children[i].children[j].classList.remove('numbers-row-item-today');
        tbl.children[i].children[j].id = '';
        tbl.children[i].children[j].childNodes[0].nodeValue = '';
        tbl.children[i].children[j].style = 'box-shadow: 0';

        if(i === 0 && j < firstDay){
          tbl.children[i].children[j].classList.add('numbers-row-item-disabled');
        } 

        else if(date > daysInMonth(month, year)){
          tbl.children[i].children[j].classList.add('numbers-row-item-disabled');
        } 

        else {
          tbl.children[i].children[j].childNodes[0].nodeValue = date;

          let dayNumber = date;
                if(dayNumber < 10){
                  dayNumber = 0 + '' + dayNumber;
                }
                let monthNumber = currentMonth + 1;
                if(monthNumber < 10){
                  monthNumber = 0 + '' + monthNumber;
                }
          tbl.children[i].children[j].id = dayNumber + '' + monthNumber + '' + year;

          if(date === today.getDate() && year === today.getFullYear() && month === today.getMonth()){
            tbl.children[i].children[j].classList.add("numbers-row-item-today");
          }

          tbl.children[i].children[j].addEventListener('click', e => {
            const allCalendarCells = e.target.parentElement.parentElement.querySelectorAll('.numbers-row-item');
            let i = undefined;
            for (i = 0; i < allCalendarCells.length; i++){
              if(allCalendarCells[i] !== e.target){
                allCalendarCells[i].classList.remove('numbers-row-item-active');
                allCalendarCells[i].style = 'box-shadow: 0';
              }
            }
            e.target.classList.add('numbers-row-item-active');

            const dateSelectorBox = getClosest(e.target, '.date-selector');
            const dateSelectorInput = dateSelectorBox.querySelector('.input-underline, .input-outline, .input-filled');
            dateSelectorInput.value = e.target.childNodes[0].nodeValue + ' ' + months[currentMonth] + ' ' + currentYear;
            if(e.target.classList.contains('numbers-row-item-today')){
              e.target.style = 'box-shadow: inset 0px 0px 0px 1px var(--buttonColor), inset 0px 0px 0px 2px var(--background);';
            }
          });
          date++
        }
      }
    }
  }

  function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

  calendarBox.addEventListener('click', e => {
    if(e.target.matches('.calendar-next')){
      currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
      currentMonth = (currentMonth + 1) % 12;
      showCalendar(currentMonth, currentYear);
    }
    if(e.target.matches('.calendar-previous')){
      currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
      currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
      showCalendar(currentMonth, currentYear);
    }
    if(e.target.matches('.calendar-next-year')){
      currentYear = currentYear + 1;
      showCalendar(currentMonth, currentYear);
    }
    if(e.target.matches('.calendar-this-year')){
      currentYear = today.getFullYear();
      showCalendar(currentMonth, currentYear);
    }
    if(e.target.matches('.calendar-previous-year')){
      currentYear = currentYear - 1;
      showCalendar(currentMonth, currentYear);
    }
  });
});

/*
const inputDeleteHandler = (el) => {
  const input = el.parentNode.querySelector('.input-underline, .input-outline, .input-filled');
  input.value = '';
  el.parentNode.removeChild(el);
}*/

let toastAnimationTimeout;
let toastTimeout;

const showToast = (txt) => {
    const toast = document.querySelector('.toast');
    const toastMsg = document.querySelector('.toast-msg');

    toast.classList.remove('show-toast');
    clearTimeout(toastAnimationTimeout);
    clearTimeout(toastTimeout);
    toastAnimationTimeout = setTimeout(() => {
        toastMsg.innerHTML = txt
        toast.classList.add('show-toast');
        toastTimeout = setTimeout(() => {toast.classList.remove('show-toast')}, 3000)
    }, 300);
}

const allToastOkBtn = document.querySelectorAll('.toast-ok');
[...allToastOkBtn].forEach(toastOkBtn => {
  toastOkBtn.addEventListener('click', e => {
    const toast = document.querySelector('.toast');
    toast.classList.remove('show-toast');
    clearTimeout(toastAnimationTimeout);
    clearTimeout(toastTimeout);
  });
});

//WIP: dynamic ripple color
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

    let rippleColors = ['ripple-blue', 'ripple-white', 'ripple-grey', 'ripple-black', 'ripple-invert', 'ripple-invert-alt', 'ripple-main-theme', 'ripple-second-theme', 'ripple-invert-main-theme', 'ripple-invert-second-theme', 'ripple-default-main-theme', 'ripple-default-second-theme'];
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
          case 'ripple-invert-main-theme':
            rippleChild.style.setProperty('--rippleColor', 'var(--main-theme-ripple-invert-color)');
            break;
          case 'ripple-invert-second-theme':
            rippleChild.style.setProperty('--rippleColor', 'var(--second-theme-ripple-invert-color)');
            break;
          case 'ripple-default-main-theme':
            rippleChild.style.setProperty('--rippleColor', 'var(--main-theme-ripple-default-color)');
            break;
          case 'ripple-default-second-theme':
            rippleChild.style.setProperty('--rippleColor', 'var(--second-theme-ripple-default-color)');
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

document.addEventListener('mousedown', e => {
  if(e.target.classList.contains('ripple-center')){
      const button = e.target;
      const width = button.offsetWidth;
      const height = button.offsetHeight;
      const rippleLenght = Math.max(width/2, height/2); // pythagorean(width/2, height/2); for litt større sirkel

      const ripple = document.createElement('span');
      const rippleChild = document.createElement('span');

      let rippleColors = ['ripple-blue', 'ripple-white', 'ripple-grey', 'ripple-black', 'ripple-invert', 'ripple-invert-alt', 'ripple-main-theme', 'ripple-second-theme', 'ripple-invert-main-theme', 'ripple-invert-second-theme', 'ripple-default-main-theme', 'ripple-default-second-theme'];
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
            case 'ripple-invert-main-theme':
              rippleChild.style.setProperty('--rippleColor', 'var(--main-theme-ripple-invert-color)');
              break;
            case 'ripple-invert-second-theme':
              rippleChild.style.setProperty('--rippleColor', 'var(--second-theme-ripple-invert-color)');
              break;
            case 'ripple-default-main-theme':
              rippleChild.style.setProperty('--rippleColor', 'var(--main-theme-ripple-default-color)');
              break;
            case 'ripple-default-second-theme':
              rippleChild.style.setProperty('--rippleColor', 'var(--second-theme-ripple-default-color)');
              break;
          }
        }
      }
  
      rippleChild.className = 'ripple-effect-child';
      ripple.appendChild(rippleChild);
  
      ripple.className = 'ripple-effect ripple-effect-visible';
      ripple.id = s4();
      rippleId = ripple.id;

      ripple.style.left = '0';
      ripple.style.top = '0';
      ripple.style.width = rippleLenght * 2 + 'px';
      ripple.style.height = rippleLenght * 2 + 'px';

      button.querySelector('.ripple-box').appendChild(ripple);
    }
});
document.addEventListener('mouseup', e => {
  if(e.target.classList.contains('ripple-center')){
      removeRipple(rippleId);
   }
});
document.addEventListener('mouseout', e => {
  if(e.target.classList.contains('ripple-center')){
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

const allTabs = document.querySelectorAll('.tabs');
[...allTabs].forEach(tabs => {
  const defaultTab = tabs.querySelector('.default-tab');
  const tabIndicator = tabs.parentElement.lastElementChild;
  const totalWidth = tabs.offsetWidth;
  const tabsId = tabs.id;
  const tabContentContainer = document.querySelector('#' + tabsId + '-content');
  const tabIndex = [...tabs.children].indexOf(defaultTab);
  
  tabContentContainer.children[tabIndex].classList.add('active-content-tab');

  let prevSiblings = defaultTab.previousElementSibling;
  let leftOffset = 0;
  for(prevSiblings; prevSiblings !== null; prevSiblings = prevSiblings.previousElementSibling){
    leftOffset += prevSiblings.offsetWidth;
  }
  
  tabIndicator.style.transform = 'translateX(' + leftOffset + 'px) scaleX(' + defaultTab.offsetWidth/totalWidth + ')'
  defaultTab.classList.add('active-tab');

  tabContentContainer.children[tabIndex].style.transform = 'translate3d(0%, 0px, 0px)';
  for(let i = 0; i < tabContentContainer.children.length; i++){
    if(i < tabIndex){
      tabContentContainer.children[i].style.transform = 'translate3d(-100%, 0px, 0px)';
    } else if(i > tabIndex){
      tabContentContainer.children[i].style.transform = 'translate3d(100%, 0px, 0px)';
    }
  }
});

const tabChanger = (tab) => {
  const tabIndicator = tab.parentElement.parentElement.lastElementChild;
  const totalWidth = tab.parentElement.offsetWidth;
  const tabsId = tab.parentElement.id;
  const tabContentContainer = document.querySelector('#' + tabsId + '-content');
  const tabIndex = [...tab.parentNode.children].indexOf(tab);
  const currentTabIndex = [...tab.parentNode.children].indexOf(tab.parentElement.querySelector('.active-tab'));

  let prevSiblings = tab.previousElementSibling;
  let leftOffset = 0;
  for(prevSiblings; prevSiblings !== null; prevSiblings = prevSiblings.previousElementSibling){
    leftOffset += prevSiblings.offsetWidth;
    prevSiblings.classList.remove('active-tab');
  }

  tabIndicator.style.transform = 'translateX(' + leftOffset + 'px) scaleX(' + tab.offsetWidth/totalWidth + ')';
  tab.classList.add('active-tab');

  let nextSiblings = tab.nextElementSibling;
  for(nextSiblings; nextSiblings !== null; nextSiblings = nextSiblings.nextElementSibling){
    nextSiblings.classList.remove('active-tab');
  }
  
  for(let i = 0; i < tabContentContainer.children.length; i++){
    tabContentContainer.children[i].classList.remove('active-content-tab');
    tabContentContainer.children[i].style.transition = 'transform 0ms';
    tabContentContainer.children[i].style.zIndex = '-1';
  }
  tabContentContainer.children[tabIndex].classList.add('active-content-tab');
  tabContentContainer.children[tabIndex].style.transform = 'translate3d(0%, 0px, 0px)';
  tabContentContainer.children[tabIndex].style.transition = 'transform 500ms';
  tabContentContainer.children[currentTabIndex].style.transition = 'transform 500ms';
  tabContentContainer.children[tabIndex].style.zIndex = '1';
  tabContentContainer.children[currentTabIndex].style.zIndex = '1';
  
  let prevTabContentSiblings = tabContentContainer.children[tabIndex].previousElementSibling;
  for(prevTabContentSiblings; prevTabContentSiblings !== null; prevTabContentSiblings = prevTabContentSiblings.previousElementSibling){
    prevTabContentSiblings.style.transform = 'translate3d(-100%, 0px, 0px)';
  }
  let nextTabContentSiblings = tabContentContainer.children[tabIndex].nextElementSibling;
  for(nextTabContentSiblings; nextTabContentSiblings !== null; nextTabContentSiblings = nextTabContentSiblings.nextElementSibling){
    nextTabContentSiblings.style.transform = 'translate3d(100%, 0px, 0px)';
  }
}
/*
const ratioButton1 = document.querySelector('.ratio-first-button');
const ratioButton2 = document.querySelector('.ratio-second-button');

ratioButton1.addEventListener('click', e => {
  const numberBox = ratioButton1.parentNode.childNodes[3];
  let numberValue = Number(numberBox.innerHTML);
  numberValue = numberValue + 1;
  numberBox.innerHTML = numberValue;
  changeRatioIndicator()
});

ratioButton2.addEventListener('click', e => {
  const numberBox = ratioButton1.parentNode.childNodes[7];
  let numberValue = Number(numberBox.innerHTML);
  numberValue = numberValue + 1;
  numberBox.innerHTML = numberValue;
  changeRatioIndicator()
});

const changeRatioIndicator = () => {
  const indicator = document.querySelector('.ratio-indicator');

  const ratioBox = document.querySelector('.ratio-box');
  const numberValue1 = Number(ratioBox.childNodes[1].childNodes[3].innerHTML);
  const numberValue2 = Number(ratioBox.childNodes[1].childNodes[7].innerHTML);

  const totalNumber = numberValue1 + numberValue2;
  const indicatorValue = numberValue1 / totalNumber
  indicator.style.setProperty('--IndicatorValue', indicatorValue);
}
*/
const switchHandler = (el) => {
  el.classList.toggle('switch-active');
}
const getSwitchState = (el) => {
  if(el.classList.contains('switch-active')){
    return true;
  } else{
    return false;
  }
}

const modalHandler = (el, state) => {
  const elem = document.querySelector('#' + el + '');
  if(state){
    elem.classList.add('show-modal-container');
    elem.firstElementChild.classList.add('show-modal');
    document.querySelector('body').classList.add('no-scroll');
  } else{
    elem.classList.remove('show-modal-container');
    elem.firstElementChild.classList.remove('show-modal');
    document.querySelector('body').classList.remove('no-scroll');
  } 
}


const allCollapsible = document.querySelectorAll('.collapsible');
[...allCollapsible].forEach(collapsible => {
  const content = collapsible.querySelector('.collapsible-content');
  collapsible.addEventListener('click', e => {
    if(e.target.nodeName !== 'BUTTON'){
      let i = 0;
      for(i; i < collapsible.parentNode.children.length; i++){
        collapsible.parentNode.children[i].classList.remove('collapsible-active-before');
        collapsible.parentNode.children[i].classList.remove('collapsible-active-after');
      }
      collapsible.classList.toggle('collapsible-active');
      if(collapsible.classList.contains('collapsible-active')){
        if(collapsible.previousElementSibling !== null){
          collapsible.previousElementSibling.classList.add('collapsible-active-before');
        }
        if(collapsible.nextElementSibling !== null){
          collapsible.nextElementSibling.classList.add('collapsible-active-after');
        }
      }
      let prevSiblings = collapsible.previousElementSibling
      for (prevSiblings; prevSiblings != null; prevSiblings = prevSiblings.previousElementSibling){
        prevSiblings.classList.remove('collapsible-active');
      }
      let nextSiblings = collapsible.nextElementSibling
      for (nextSiblings; nextSiblings != null; nextSiblings = nextSiblings.nextElementSibling){
        nextSiblings.classList.remove('collapsible-active');
      }
      if(collapsible.classList.contains('collapsible-active')){
        content.style.maxHeight = content.scrollHeight + "px";
        //content.style.setProperty('--expandLength', content.scrollHeight * 2 + 'ms')
      } else{
        content.style.maxHeight = 0;
      }
    }
  });
});


const allCheckbox = document.querySelectorAll('.checkbox-container');
[...allCheckbox].forEach(checkbox => {
  checkbox.addEventListener('click', e => {
    checkbox.querySelector('.checkbox').classList.toggle('checkbox-active');
  });
});


const allCollapsibleDropdown = document.querySelectorAll('.collapsible-dropdown-container');
[...allCollapsibleDropdown].forEach(collapsibleDropdown => {
  collapsibleDropdown.firstElementChild.addEventListener('click', e => {
    collapsibleDropdown.lastElementChild.classList.toggle('collapsible-dropdown-entered');
  });
});

const allChipOkButton = document.querySelectorAll('.chip-ok, .chip-ok-small');
[...allChipOkButton].forEach(chipOk => {
  chipOk.addEventListener('click', e => {
    e.target.parentElement.parentElement.removeChild(e.target.parentElement);
  })
});

const drawerHandler = (el) => {
  const drawer = document.querySelector(el);
  drawer.classList.toggle('show-drawer');
  if(drawer.classList.contains('show-drawer')){
    document.querySelector('body').classList.add('no-scroll')
  } else{
    document.querySelector('body').classList.remove('no-scroll')
  }
}

const stepperHandler = (el) => {
  const stepperContent = el.parentElement.parentElement.querySelector('.stepper-content');
  const currentTab = stepperContent.querySelector('.active-stepper-tab');
  const currentDot = el.parentElement.querySelector('.active-stepper-dot');
  const stepperContentWidth = stepperContent.offsetWidth;
  if(el.classList.contains('stepper-next') && currentTab.nextElementSibling !== null){
    currentTab.classList.remove('active-stepper-tab');
    currentTab.nextElementSibling.classList.add('active-stepper-tab');
    currentDot.classList.remove('active-stepper-dot');
    currentDot.nextElementSibling.classList.add('active-stepper-dot');
    let leftOffset = 0;
    var prevSiblings = currentTab;
    for(prevSiblings; prevSiblings != null; prevSiblings = prevSiblings.previousElementSibling){
      leftOffset += prevSiblings.offsetWidth;
    };
    const translateAmount = (leftOffset/stepperContentWidth) * 100;
    stepperContent.style.transform = 'translateX(-' + translateAmount + '%)';
  } else if(el.classList.contains('stepper-back') && currentTab.previousElementSibling !== null){
    currentTab.classList.remove('active-stepper-tab');
    currentTab.previousElementSibling.classList.add('active-stepper-tab');
    currentDot.classList.remove('active-stepper-dot');
    currentDot.previousElementSibling.classList.add('active-stepper-dot');
    let leftOffset = 0;
    var prevSiblings = currentTab.previousElementSibling.previousElementSibling;
    for(prevSiblings; prevSiblings != null; prevSiblings = prevSiblings.previousElementSibling){
      leftOffset += prevSiblings.offsetWidth;
    };
    const translateAmount = (leftOffset/stepperContentWidth) * 100;
    stepperContent.style.transform = 'translateX(-' + translateAmount + '%)';
  }
}

document.addEventListener('click', e => {
  if(e.target.classList.contains('radio-button') || e.target.classList.contains('radio-txt')){
    const radioBtn = e.target;
    const radio = radioBtn.parentElement;
    radio.classList.add('radio-active');
  }
  if(e.target.parentElement.parentElement.classList.contains('radio-group')){
    const radio = e.target.parentElement;
    for(let i = radio.previousElementSibling; i !== null; i = i.previousElementSibling){
      i.classList.remove('radio-active');
    }
    for(let i = radio.nextElementSibling; i !== null; i = i.nextElementSibling){
      i.classList.remove('radio-active');
    }
  }
});