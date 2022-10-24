const SELECT_CONTAINER_CLASS="select",SELECTED_FIELD_CLASS="select__selected-field",SELECTED_VALUE_CLASS="select__selected-value",SELECTED_FIELD_OPENED_CLASS="select__selected-field--opened",SELECT_LIST_CLASS="select__list",SELECT_ITEM_CLASS="select__item",SELECT_ITEM_CURRENT_CLASS="select__item--current",selectContainerElement=document.querySelector(".select"),selectedFieldElement=selectContainerElement.querySelector(".select__selected-field"),selectedValueElement=selectedFieldElement.querySelector(".select__selected-value"),selectListElement=selectContainerElement.querySelector(".select__list"),selectItemsElements=selectListElement.querySelectorAll(".select__item"),toggleSelect=()=>{selectedFieldElement.classList.toggle(SELECTED_FIELD_OPENED_CLASS)},isSelectOpened=()=>selectedFieldElement.classList.contains(SELECTED_FIELD_OPENED_CLASS),selectItem=e=>{selectedValueElement.textContent=e.textContent,selectedFieldElement.dataset.value=e.dataset.value},onDocumentClick=e=>{const t=e.target;t.classList.contains("select__item")||t.classList.contains(SELECTED_FIELD_CLASS)||t.classList.contains(SELECTED_VALUE_CLASS)||!selectedFieldElement.classList.contains(SELECTED_FIELD_OPENED_CLASS)||toggleSelect()},onSelectListClick=e=>{const t=e.target;var l;t.classList.contains("select__item")&&(selectItemsElements.forEach((e=>{e.classList.remove("select__item--current")})),t.classList.add("select__item--current"),l=t,selectedValueElement.textContent=l.textContent,selectedFieldElement.dataset.value=l.dataset.value,toggleSelect())},onSelectedFieldClick=()=>{toggleSelect()},initSelect=()=>{selectedFieldElement.addEventListener("click",onSelectedFieldClick),selectListElement.addEventListener("click",onSelectListClick),document.addEventListener("click",onDocumentClick)};export{initSelect};