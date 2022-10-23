const NAV_ELEMENT_CLASS = 'header__navigation-container';
const NAV_ELEMENT_NOJS_CLASS = 'header__navigation-container--nojs';
const MENU_TOGGLE_ELEMENT_CLASS = 'header__navigation-toggle';
const MENU_OPENED_CLASS = 'header__navigation-container--opened';
const MENU_CLOSED_CLASS = 'header__navigation-container--closed';


const navigationContainerElement = document.querySelector(`.${NAV_ELEMENT_CLASS}`);
const menuToggleElement = navigationContainerElement.querySelector(`.${MENU_TOGGLE_ELEMENT_CLASS}`);


const toggleMenu = () => {
  if (navigationContainerElement.classList.contains(MENU_CLOSED_CLASS)) {
    navigationContainerElement.classList.remove(MENU_CLOSED_CLASS);
    navigationContainerElement.classList.add(MENU_OPENED_CLASS);
  } else {
    navigationContainerElement.classList.remove(MENU_OPENED_CLASS);
    navigationContainerElement.classList.add(MENU_CLOSED_CLASS);
  }
};


const initMenu = () => {
  navigationContainerElement.classList.remove(NAV_ELEMENT_NOJS_CLASS);

  menuToggleElement.addEventListener('click', toggleMenu);
};

export { initMenu };
