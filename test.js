const allTabs = document.querySelectorAll('.tabs');
[...allTabs].forEach(tabs => {
  const defaultTab = tabs.querySelector('.default-tab');
  const tabIndicator = tabs.parentElement.lastElementChild;
  const totalWidth = tabs.offsetWidth;

  let prevSiblings = defaultTab.previousElementSibling;
  let leftOffset = 0;
  for(prevSiblings; prevSiblings !== null; prevSiblings = prevSiblings.previousElementSibling){
    leftOffset += prevSiblings.offsetWidth;
  }
  
  tabIndicator.style.transform = 'translateX(' + leftOffset + 'px) scaleX(' + defaultTab.offsetWidth/totalWidth + ')'
  defaultTab.classList.add('active-tab');
});

const tabChanger = (tab) => {
  const tabIndicator = tab.parentElement.parentElement.lastElementChild;
  const totalWidth = tab.parentElement.offsetWidth;
  const tabsId = tab.parentElement.id;
  const tabContentContainer = document.querySelector('#' + tabsId + '-content')

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
}


const getAreal = (elem) => {
  const bredde = elem.offsetWidth;
  const hoyde = elem.offsetHeight;
  const areal = bredde * hoyde;
  alert('areal' + areal.toFixed(2) + 'px');
}

const film = {title:'harry potter', lengde:45, forfatter:'jk rowling'};

console.log(film.title, film.lengde, film.forfatter)