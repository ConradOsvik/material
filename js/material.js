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

const allMenus = document.querySelectorAll('.menu-btn');
[...allMenus].forEach(menu => {
  menu.addEventListener('click', e => {
    openMenu(e.target);
  });
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
      menu.style.setProperty('bottom', '0%');
    } else{
      menu.style.removeProperty('top');
      menu.style.setProperty('bottom', '100%');
    }
  } else{
    if(target.matches('.menu-ontop')){
      menu.style.removeProperty('bottom');
      menu.style.setProperty('top', '0%');
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
let menu = undefined;
window.addEventListener('click', event => {
  var menuParent = getClosest(event.target, '.menu-btn, .menu-box');
  var modalParent = getClosest(event.target, '.modal, .modal-btn');
  var dateSelector = getClosest(event.target, '.calendar-box, .select-date-box');
  var drawer = getClosest(event.target, '.drawer-content, button');
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
  if(drawer == null){
    var drawer = document.getElementsByClassName("drawer");
    var i;
    for (i = 0; i < drawer.length; i++) {
      var openDrawer = drawer[i];
      if (openDrawer.classList.contains('show-drawer')) {
        openDrawer.classList.remove('show-drawer');
      }
    }
    document.querySelector('body').classList.remove('no-scroll')
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
        tbl.children[i].children[j].classList.remove('ripple-white');
        tbl.children[i].children[j].classList.add('ripple-black');
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
                allCalendarCells[i].classList.add('ripple-invert');
                allCalendarCells[i].classList.remove('ripple-invert-alt');
                allCalendarCells[i].style = 'box-shadow: 0';
              }
            }
            e.target.classList.add('ripple-invert-alt');
            e.target.classList.remove('ripple-invert');
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

    /*
    tbl.innerHTML = "";

    let date = 1;
    for (let i = 0; i < 6; i++) {

        let row = document.createElement("div");
        row.className = 'numbers-row';

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                cell = document.createElement("span");
                cell.className = 'numbers-row-item numbers-row-item-disabled';
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth(month, year)) {
                break;
            }

            else {
                cell = document.createElement("span");
                cell.className = 'numbers-row-item ripple-center';
                let dayNumber = date;
                if(dayNumber < 10){
                  dayNumber = 0 + '' + dayNumber;
                }
                let monthNumber = currentMonth + 1;
                if(monthNumber < 10){
                  monthNumber = 0 + '' + monthNumber;
                }
                cell.id = dayNumber + '' + monthNumber + '' + year;
                cellText = document.createTextNode(date);
                cellRipple = document.createElement("span");
                cellRipple.classList = 'ripple-box';
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("numbers-row-item-today");
                } // color today's date
                cell.addEventListener('click', e => {
                  updateCalendarCells(e);
                });
                cell.appendChild(cellRipple);
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row);
    }*/

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

const toastOkBtn = document.querySelector('.toast-ok');
toastOkBtn.addEventListener('click', e => {
    const toast = document.querySelector('.toast');
    toast.classList.remove('show-toast');
    clearTimeout(toastAnimationTimeout);
    clearTimeout(toastTimeout);
});


//WIP: dynamic ripple color
const buttons = document.querySelectorAll('.ripple');
let rippleId = undefined;

[...buttons].forEach(button => {
  button.onmousedown = function ripple(e) {

    const x = e.offsetX
    const y = e.offsetY
    const width = this.offsetWidth;
    const height = this.offsetHeight;

    const ripple = document.createElement('span');

    let rippleColors = ['ripple-blue', 'ripple-white', 'ripple-grey', 'ripple-black', 'ripple-invert', 'ripple-invert-alt'];
    for(let i = 0; i < rippleColors.length; i++){
      if(button.classList.contains(rippleColors[i]) && document.querySelector('body').classList.contains('darkmode')){
        switch(rippleColors[i]){
          case 'ripple-blue':
            ripple.style.setProperty('--rippleColor', 'rgba(144, 202, 249, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(144, 202, 249, 0.1)');
            break;
          case 'ripple-white':
            ripple.style.setProperty('--rippleColor', 'rgba(255, 255, 255, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(255, 255, 255, 0.1)');
            break;
          case 'ripple-grey':
            ripple.style.setProperty('--rippleColor', 'rgba(125, 125, 125, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(125, 125, 125, 0.1)');
            break;
          case 'ripple-black':
            ripple.style.setProperty('--rippleColor', 'rgba(0, 0, 0, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(0, 0, 0, 0.1)');
            break;
          case 'ripple-invert':
            ripple.style.setProperty('--rippleColor', 'rgba(255, 255, 255, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(255, 255, 255, 0.1)');
            break;
          case 'ripple-invert-alt':
            ripple.style.setProperty('--rippleColor', 'rgba(0, 0, 0, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(0, 0, 0, 0.1)');
            break;
        }
      } else if(button.classList.contains(rippleColors[i]) && !document.querySelector('body').classList.contains('darkmode')){
        switch(rippleColors[i]){
          case 'ripple-blue':
            ripple.style.setProperty('--rippleColor', 'rgba(25, 118, 210, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(25, 118, 210, 0.1)');
            break;
          case 'ripple-white':
            ripple.style.setProperty('--rippleColor', 'rgba(255, 255, 255, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(255, 255, 255, 0.1)');
            break;
          case 'ripple-grey':
            ripple.style.setProperty('--rippleColor', 'rgba(125, 125, 125, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(125, 125, 125, 0.1)');
            break;
          case 'ripple-black':
            ripple.style.setProperty('--rippleColor', 'rgba(0, 0, 0, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(0, 0, 0, 0.1)');
            break;
          case 'ripple-invert':
            ripple.style.setProperty('--rippleColor', 'rgba(0, 0, 0, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(0, 0, 0, 0.1)');
            break;
          case 'ripple-invert-alt':
            ripple.style.setProperty('--rippleColor', 'rgba(255, 255, 255, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(255, 255, 255, 0.1)');
            break;
        }
      }
    }

    ripple.className = 'ripple-effect';
    ripple.id = s4();
    rippleId = ripple.id;
    
    let xOffset = 0;
    let yOffset = 0;

    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
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

    ripple.style.setProperty('--scale', rippleLenght);

    this.querySelector('.ripple-box').appendChild(ripple);
  };
  button.onmouseup = function () {
    removeRipple(rippleId);
  }
  button.onmouseout = function () {
    removeRipple(rippleId);
  }
});
/*
const buttonsWhite = document.querySelectorAll('.ripple-white');

[...buttonsWhite].forEach(button => {
  button.onmousedown = function rippleWhite(e) {

    const x = e.offsetX
    const y = e.offsetY
    const width = this.offsetWidth;
    const height = this.offsetHeight;

    const ripple = document.createElement('span');

    ripple.className = 'ripple-effect-white';
    ripple.id = s4();
    rippleId = ripple.id;
    
    let xOffset = 0;
    let yOffset = 0;

    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
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

    ripple.style.setProperty('--scale', rippleLenght);

    this.querySelector('.ripple-box').appendChild(ripple);
  };
  button.onmouseup = function () {
    removeRipple(rippleId);
  }
  button.onmouseout = function () {
    removeRipple(rippleId);
  }
});

const buttonsBlue = document.querySelectorAll('.ripple-blue');

[...buttonsBlue].forEach(button => {
  button.onmousedown = function rippleBlue(e) {

    const x = e.offsetX
    const y = e.offsetY
    const width = this.offsetWidth;
    const height = this.offsetHeight;

    const ripple = document.createElement('span');

    ripple.className = 'ripple-effect-blue';
    ripple.id = s4();
    rippleId = ripple.id;
    
    let xOffset = 0;
    let yOffset = 0;

    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
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

    ripple.style.setProperty('--scale', rippleLenght);

    this.querySelector('.ripple-box').appendChild(ripple);
  };
  button.onmouseup = function () {
    removeRipple(rippleId);
  }
  button.onmouseout = function () {
    removeRipple(rippleId);
  }
});
*/
const buttonsCenter = document.querySelectorAll('.ripple-center');

[...buttonsCenter].forEach(button => {
  button.onmousedown = function rippleCenter() {

    const width = this.offsetWidth;
    const height = this.offsetHeight;
    const rippleLenght = Math.max(width/2, height/2); // pythagorean(width/2, height/2); for litt større sirkel

    const ripple = document.createElement('span');

    let rippleColors = ['ripple-blue', 'ripple-white', 'ripple-grey', 'ripple-black', 'ripple-invert', 'ripple-invert-alt'];
    for(let i = 0; i < rippleColors.length; i++){
      if(button.classList.contains(rippleColors[i]) && document.querySelector('body').classList.contains('darkmode')){
        switch(rippleColors[i]){
          case 'ripple-blue':
            ripple.style.setProperty('--rippleColor', 'rgba(144, 202, 249, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(144, 202, 249, 0.1)');
            break;
          case 'ripple-white':
            ripple.style.setProperty('--rippleColor', 'rgba(255, 255, 255, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(255, 255, 255, 0.1)');
            break;
          case 'ripple-grey':
            ripple.style.setProperty('--rippleColor', 'rgba(125, 125, 125, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(125, 125, 125, 0.1)');
            break;
          case 'ripple-black':
            ripple.style.setProperty('--rippleColor', 'rgba(0, 0, 0, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(0, 0, 0, 0.1)');
            break;
          case 'ripple-invert':
            ripple.style.setProperty('--rippleColor', 'rgba(255, 255, 255, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(255, 255, 255, 0.1)');
            break;
          case 'ripple-invert-alt':
            ripple.style.setProperty('--rippleColor', 'rgba(0, 0, 0, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(0, 0, 0, 0.1)');
            break;
        }
      } else if(button.classList.contains(rippleColors[i]) && !document.querySelector('body').classList.contains('darkmode')){
        switch(rippleColors[i]){
          case 'ripple-blue':
            ripple.style.setProperty('--rippleColor', 'rgba(25, 118, 210, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(25, 118, 210, 0.1)');
            break;
          case 'ripple-white':
            ripple.style.setProperty('--rippleColor', 'rgba(255, 255, 255, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(255, 255, 255, 0.1)');
            break;
          case 'ripple-grey':
            ripple.style.setProperty('--rippleColor', 'rgba(125, 125, 125, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(125, 125, 125, 0.1)');
            break;
          case 'ripple-black':
            ripple.style.setProperty('--rippleColor', 'rgba(0, 0, 0, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(0, 0, 0, 0.1)');
            break;
          case 'ripple-invert':
            ripple.style.setProperty('--rippleColor', 'rgba(0, 0, 0, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(0, 0, 0, 0.1)');
            break;
          case 'ripple-invert-alt':
            ripple.style.setProperty('--rippleColor', 'rgba(255, 255, 255, 0.3)');
            ripple.style.setProperty('--rippleColorStart', 'rgba(255, 255, 255, 0.1)');
            break;
        }
      }
    }

    ripple.className = 'ripple-effect';
    ripple.id = s4();
    rippleId = ripple.id;

    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.setProperty('--scale', rippleLenght);

    this.querySelector('.ripple-box').appendChild(ripple);

  };
  button.onmouseup = function () {
    removeRipple(rippleId);
  }
  button.onmouseout = function () {
    removeRipple(rippleId);
  }
});

let oldRipple = undefined
const removeRipple = (rippleId) => {
  if(rippleId !== oldRipple){
    const elem = document.getElementById(rippleId);
    if(elem){
      elem.classList.add('ripple-effect-out');
      setTimeout(() => {
        elem.parentNode.removeChild(elem);
      }, 550);
    }
  } else{}
  oldRipple = rippleId;
}

const getDefaultTab = () => {
  //TODO: Fikse DefaultOffsetLeft så man kan velge defaultTab 
  const Alltabs = document.querySelectorAll('.tabs');

  [...Alltabs].forEach(tabs => {
    let defaultTabNumber = 0; //Når den funker så er default tab values: 0, 1, 2, 3, -> ueandelig
    //let defaultLeftOffset = 0;
    const defaultTab = tabs.children[defaultTabNumber]; //TODO: adde mulighet til å sette andre tabs en tab-1 som default

    /*
    let i = defaultTabNumber - 1;
    for(i; i > -1; i--){
      defaultLeftOffset += tabs.children[i].offsetWidth;
    }
    console.log(defaultLeftOffset);*/
    //^v = disse er de samme
    /*
    var defaultPrevSiblings = defaultTab.previousElementSibling;
    for(defaultPrevSiblings; defaultPrevSiblings != null; defaultPrevSiblings = defaultPrevSiblings.previousElementSibling){
      defaultLeftOffset += defaultPrevSiblings.offsetWidth;
    };
    console.log('Default Left: ' + defaultLeftOffset);*/


    defaultTab.classList.add('active-tab');
    const tabIndicator = tabs.parentNode.lastElementChild.firstElementChild;
    tabIndicator.style.width = defaultTab.offsetWidth + 'px'; //TODO: finne en måte å fikse opp i firstTab.offsetWidth (den er litt for stor basert på lengde)
    //tabIndicator.style.left = defaultLeftOffset + 'px';
    const tabsId = tabs.id;
    const tabsContentContainer = document.querySelector('#' + tabsId + '-content');
    //tabsContentContainer.firstElementChild.style.display = 'block'; // Gamle metoden: tabs.parentNode.nextElementSibling.firstElementChild.style.display = 'block';
    tabsContentContainer.firstElementChild.classList.add('active-content-tab');
  })
}
getDefaultTab();

const tabChanger = (tab) => {
  const tabIndicator = tab.parentNode.parentNode.lastElementChild.firstElementChild;
  const tabsId = tab.parentNode.id;
  const tabsContentContainer = document.querySelector('#' + tabsId + '-content'); // gamle metoden: tab.parentNode.parentNode.nextElementSibling; DA KAN MAN IKKE VELGE HVOR TAB-CONTENT SKAL VÆRE
  const tabs = tab.parentNode;

  const oldContentTab = tabsContentContainer.querySelector('.active-content-tab');

  let currentLeft = 0;
  currentLeft = tabIndicator.offsetLeft;
  tab.classList.add('active-tab');

  let leftOffset = 0;
  let loopCount = 0;
  let tabIndexNumber = -1
  const tabWidth = tab.offsetWidth;
  var prevSiblings = tab.previousElementSibling;
  for(prevSiblings; prevSiblings != null; prevSiblings = prevSiblings.previousElementSibling){
    prevSiblings.classList.remove('active-tab');
    leftOffset += prevSiblings.offsetWidth;
    loopCount = loopCount + 1;
    tabIndexNumber = tabIndexNumber + 1;
    //tabsContentContainer.children[tabIndexNumber].style.display = 'none';
    tabsContentContainer.children[tabIndexNumber].classList.remove('active-content-tab');
  };

  //tabsContentContainer.children[loopCount].style.display = 'block';
  tabsContentContainer.children[loopCount].classList.add('active-content-tab');

  let rightOffset = 0;
  let tabIndexNumberFromTop = -1
  var nextSiblings = tab.nextElementSibling;
  for(nextSiblings; nextSiblings != null; nextSiblings = nextSiblings.nextElementSibling){
    nextSiblings.classList.remove('active-tab');
    rightOffset += nextSiblings.offsetWidth;
    tabIndexNumberFromTop = tabIndexNumberFromTop + 1;
    const tabIndexFullNumber = tabIndexNumberFromTop + tabIndexNumber + 2;
    //tabsContentContainer.children[tabIndexFullNumber].style.display = 'none';
    tabsContentContainer.children[tabIndexFullNumber].classList.remove('active-content-tab');
  };

  const tabsChildrenNumber = tabs.childElementCount;
  let i = 0;
  for(i; i < tabsChildrenNumber; i++){
    tabs.children[i].setAttribute( 'onClick', '');
  }

  //Sliding animation, disable dette hvis du ikke vil ha sliding animation
  if(currentLeft > leftOffset){
    tabsContentContainer.children[loopCount].classList.add('tabs-slide-from-left');
    oldContentTab.classList.add('tabs-slide-out-to-right');
    setTimeout(() => {
      tabsContentContainer.children[loopCount].classList.remove('tabs-slide-from-left');
      oldContentTab.classList.remove('tabs-slide-out-to-right');
    }, 500);
  } else if(currentLeft < leftOffset){
    tabsContentContainer.children[loopCount].classList.add('tabs-slide-from-right');
    oldContentTab.classList.add('tabs-slide-out-to-left');
    setTimeout(() => {
      tabsContentContainer.children[loopCount].classList.remove('tabs-slide-from-right');
      oldContentTab.classList.remove('tabs-slide-out-to-left');
    }, 500);
  }
  
  const totalWidth = leftOffset + rightOffset + tabWidth; //Kan bli nyttig for noe (TotalWidth av alle tabs tilsammen)

  tabIndicator.classList.add('animating-indicator');
  tabIndicator.style.setProperty('--newLeft', leftOffset + 'px');
  tabIndicator.style.setProperty('--currentLeft', currentLeft + 'px');
  tabIndicator.style.setProperty('--newWidth', tabWidth + 'px');

  setTimeout(() => {
    tabIndicator.style.left = leftOffset + 'px';
    tabIndicator.style.width = tabWidth + 'px';
    tabIndicator.classList.remove('animating-indicator');
    let i = 0;
    for(i; i < tabsChildrenNumber; i++){
      tabs.children[i].setAttribute( 'onClick', 'tabChanger(this)');
    }
  }, 500);
}

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
  if(state){
    el.classList.add('show-modal-container');
    el.firstElementChild.classList.add('show-modal');
  } else{
    el.classList.remove('show-modal-container');
    el.firstElementChild.classList.remove('show-modal');
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