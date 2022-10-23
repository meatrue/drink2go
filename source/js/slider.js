const PROMO_SECTION_CLASS = 'promo';
const PREV_BUTTON_CLASS = 'promo__slider-control--prev';
const NEXT_BUTTON_CLASS = 'promo__slider-control--next';
const PAGINATION_CLASS = 'promo__pagination';
const PAGINATION_BUTTON_CLASS = 'promo__pagination-button';
const PAGINATION_CURRENT_CLASS = 'promo__pagination-button--current';
const SLIDER_ITEM_CLASS = 'promo__item';
const SLIDER_ITEM_CURRENT_CLASS = 'promo__item--current';
const SECTION_THEME_CLASSES = ['promo--flat', 'promo--latte', 'promo--espresso'];

const promoSectionElement = document.querySelector(`.${PROMO_SECTION_CLASS}`);
const prevButtonElement = promoSectionElement.querySelector(`.${PREV_BUTTON_CLASS}`);
const nextButtonElement = promoSectionElement.querySelector(`.${NEXT_BUTTON_CLASS}`);
const paginationElement = promoSectionElement.querySelector(`.${PAGINATION_CLASS}`);
const paginationButtons = paginationElement.querySelectorAll(`.${PAGINATION_BUTTON_CLASS}`);
const sliderItems = promoSectionElement.querySelectorAll(`.${SLIDER_ITEM_CLASS}`);

const lastItemNumber = sliderItems.length - 1;
let currentItemNumber = 0;


const changeSectionTheme = (itemNumber) => {
  const oldThemeClass = SECTION_THEME_CLASSES.find((themeClass) => promoSectionElement.classList.contains(themeClass));
  promoSectionElement.classList.remove(oldThemeClass);
  promoSectionElement.classList.add(SECTION_THEME_CLASSES[itemNumber]);
}


const changePaginationButtonCurrent = (buttonNumber) => {
  paginationButtons.forEach((button) => {
    if (button.classList.contains(PAGINATION_CURRENT_CLASS)) {
      button.classList.remove(PAGINATION_CURRENT_CLASS);
    }
  });

  paginationButtons[buttonNumber].classList.add(PAGINATION_CURRENT_CLASS);
};


const changeCurrentItem = (itemNumber) => {
  sliderItems.forEach((sliderItem) => {
    if (sliderItem.classList.contains(SLIDER_ITEM_CURRENT_CLASS)) {
      sliderItem.classList.remove(SLIDER_ITEM_CURRENT_CLASS)
    }
  });
  sliderItems[itemNumber].classList.add(SLIDER_ITEM_CURRENT_CLASS);
};


const changeSlide = (number) => {
  changePaginationButtonCurrent(number);
  changeCurrentItem(number);
  changeSectionTheme(number);
};


const onPaginationClick = (e) => {
  if (!e.target.classList.contains(PAGINATION_BUTTON_CLASS)) {
    return;
  }

  const currentButtonElement = e.target;
  const currentItemNumber = currentButtonElement.dataset.number;

  changeSlide(currentItemNumber);
};


const onPrevButtonClick = () => {
  currentItemNumber--;
  currentItemNumber = (currentItemNumber < 0) ? lastItemNumber : currentItemNumber;

  changeSlide(currentItemNumber);
};


const onNextButtonClick = () => {
  currentItemNumber++;
  currentItemNumber = (currentItemNumber > lastItemNumber) ? 0 : currentItemNumber;

  changeSlide(currentItemNumber);
};


const paginationInit = () => {
  paginationButtons.forEach((paginationButton, buttonIndex) => {
    paginationButton.dataset.number = buttonIndex;
  });

  paginationElement.addEventListener('click', onPaginationClick);
};


const initSlider = () => {
  paginationInit();
  prevButtonElement.addEventListener('click', onPrevButtonClick);
  nextButtonElement.addEventListener('click', onNextButtonClick);
};

export { initSlider };
