const SELECT_CONTAINER_CLASS = 'select';
const SELECTED_FIELD_CLASS = 'select__selected-field';
const SELECTED_VALUE_CLASS = 'select__selected-value';
const SELECTED_FIELD_OPENED_CLASS = 'select__selected-field--opened';
const SELECT_LIST_CLASS = 'select__list';
const SELECT_ITEM_CLASS = 'select__item';
const SELECT_ITEM_CURRENT_CLASS = 'select__item--current';

const selectContainerElement = document.querySelector(`.${SELECT_CONTAINER_CLASS}`);
const selectedFieldElement = selectContainerElement.querySelector(`.${SELECTED_FIELD_CLASS}`);
const selectedValueElement = selectedFieldElement.querySelector(`.${SELECTED_VALUE_CLASS}`);
const selectListElement = selectContainerElement.querySelector(`.${SELECT_LIST_CLASS}`);
const selectItemsElements = selectListElement.querySelectorAll(`.${SELECT_ITEM_CLASS}`);


const toggleSelect = () => {
  selectedFieldElement.classList.toggle(SELECTED_FIELD_OPENED_CLASS);
};


const isSelectOpened = () => selectedFieldElement.classList.contains(SELECTED_FIELD_OPENED_CLASS);


const selectItem = (item) => {
  selectedValueElement.textContent = item.textContent;
  selectedFieldElement.dataset.value = item.dataset.value;
};


const onDocumentClick = (e) => {
  const targetElement = e.target;

  if (!targetElement.classList.contains(SELECT_ITEM_CLASS)
    && !targetElement.classList.contains(SELECTED_FIELD_CLASS)
    && !targetElement.classList.contains(SELECTED_VALUE_CLASS)
    && isSelectOpened()) {
    toggleSelect();
  }
};


const onSelectListClick = (e) => {
  const targetElement = e.target;
  if (!targetElement.classList.contains(SELECT_ITEM_CLASS)) {
    return;
  }

  selectItemsElements.forEach((selectItem) => {
    selectItem.classList.remove(SELECT_ITEM_CURRENT_CLASS);
  });

  targetElement.classList.add(SELECT_ITEM_CURRENT_CLASS);
  selectItem(targetElement);
  toggleSelect();
};


const onSelectedFieldClick = () => {
  toggleSelect();
};


const initSelect = () => {
  //selectedFieldElement.addEventListener('click', onSelectedFieldClick);
  //select__selected-field
  selectedFieldElement.addEventListener('click', onSelectedFieldClick);
  selectListElement.addEventListener('click', onSelectListClick);
  document.addEventListener('click', onDocumentClick);
};

export { initSelect };
