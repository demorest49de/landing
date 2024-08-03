import {getConsts} from './varsStorage.js';

const $ = getConsts();

const addClass = (element, tokens) => {
  element.classList.add(...tokens);
};

const createContainer = () => {
  const container = document.createElement('div');
  addClass(container, ['container']);
  return container;
};

const createSection = () => {
  const section = document.createElement('section');
  addClass(section, ['list-product']);
  const container = createContainer();
  section.container = container;
  section.append(container);
  return section;
};

const createLogo = (title) => {
  const h1 = document.createElement('h1');
  h1.classList.add('list-product__title');
  h1.textContent = title;
  return h1;
};

const createElem = (elem) => document.createElement(elem);

const createTitleSum = () => {
  const titleSum = createElem('div');
  addClass(titleSum, ['list-product__sum', 'card-sum']);
  titleSum.insertAdjacentHTML('beforeend',
      `
      <span class="card-sum__text">Итоговая стоимость:</span>
    `);
  const cardSumPrice = createElem('span');
  addClass(cardSumPrice, ['card-sum__price']);
  cardSumPrice.textContent = `$`;
  const cardSumPriceValue = createElem('span');
  addClass(cardSumPriceValue, ['card-sum__price-value']);
  cardSumPriceValue.textContent = `0`;
  cardSumPrice.append(cardSumPriceValue);
  titleSum.append(cardSumPrice);
  return titleSum;
};

const createHeader = (title) => {
  const header = document.createElement('div');
  addClass(header, ['list-product__header']);
  const logo = createLogo(title);
  header.append(logo);
  const titleSum = createTitleSum();
  header.append(titleSum);
  return header;
};

const createNav = () => {
  const nav = createElem('div');
  addClass(nav, ['list-product__nav', 'nav']);
  const navBlock = createElem('div');
  addClass(navBlock, ['nav__block']);
  nav.append(navBlock);

  const filterBtn = createElem('button');
  addClass(filterBtn, ['nav__filter-btn']);
  filterBtn.textContent = 'Фильтр';
  navBlock.append(filterBtn);

  const form = createElem('form');
  addClass(form, ['nav__search']);
  form.insertAdjacentHTML('beforeend',
      `
        <input class="nav__input" type="search"
         placeholder="Поиск по наименованию и категории">      
      `);
  navBlock.append(form);

  const addItemBtn = createElem('button');
  addClass(addItemBtn, ['nav__add-btn']);
  addItemBtn.textContent = 'Добавить товар';
  navBlock.append(addItemBtn);

  return {nav, addItemBtn};
};

const createWrapper = () => {
  const wrapper = createElem('div');
  addClass(wrapper, ['list-product__wrapper']);
  const table = createElem('table');
  addClass(table, ['list-product__table']);
  wrapper.append(table);
  const thead = createElem('thead');
  addClass(thead, ['list-product__table-head']);
  thead.insertAdjacentHTML('beforeend',
      `
        <tr>
        <th class="list-product__table-td">ID</th>
        <th class="list-product__table-td">Наименование</th>
        <th class="list-product__table-td">Категория</th>
        <th class="list-product__table-td">Ед/Изм</th>
        <th class="list-product__table-td">Количество</th>
        <th class="list-product__table-td">Цена</th>
        <th class="list-product__table-td">Итог</th>
        <th class="list-product__table-td"></th>
      </tr>
      `);
  const tbody = createElem('tbody');
  addClass(tbody, ['list-product__table-body']);
  table.append(thead, tbody);
  table.tbody = tbody;
  return {
    tbody,
    wrapper,
  };
};

const createFooter = () => {
  const footer = createElem('div');
  addClass(footer, ['list-product__footer']);
  footer.insertAdjacentHTML('beforeend',
      `
        <div class="list-product__footer">
          <div class="list-product__footer-block">
            <div class="list-product__footer-sub-block">
              <span class="list-product__footer-span">
              Показывать на странице:</span>
              <select class="list-product__select-page">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
            <div class="list-product__pages">
              <div class="list-product__pages-displayed">1-5 of</div>
              <div class="list-product__total-pages">25</div>
            </div>
            <button class="list-product__arrow-pages 
            list-product__prev-page" aria-label="left"></button>
            <button class="list-product__arrow-pages 
            list-product__next-page" aria-label="right"></button>
          </div>
        </div>
      `);
  return footer;
};

const createMainBlock = () => {
  const mainBlock = createElem('div');
  addClass(mainBlock, ['list-product__main-block']);
  const {nav, addItemBtn} = createNav();
  mainBlock.append(nav);
  const {wrapper, tbody} = createWrapper();
  mainBlock.append(wrapper);
  const footer = createFooter();
  mainBlock.append(footer);

  return {mainBlock, tbody, addItemBtn};
};

export const createRow = ({
  category,
  count,
  discount,
  id,
  image,
  price,
  title,
  units,
}) => {
  const tr = createElem('tr');
  addClass(tr, ['list-product__table-tr']);
  const total = Math.floor(+price * +count *
        (1 - (+discount ? +discount / 100 : 0)));

  tr.innerHTML = `
    <td class="list-product__table-td" data-id='${id}'>${id}</td>
    <td class="list-product__table-td">${title}</td>
    <td class="list-product__table-td">${category}</td>
    <td class="list-product__table-td">${units}</td>
    <td class="list-product__table-td">${count}</td>
    <td class="list-product__table-td">$${price}</td>
    <td class="list-product__table-td" data-total-price=${total}>$${total}</td>
    <td class="list-product__table-td">
    <button class="list-product__table-btn
    ${!(image && image?.includes('notimage.jpg')) ? 'list-product__button-img' :
        'list-product__button-no-img'}" aria-label="image" ${!(image && image.includes('notimage.jpg')) ?
      `data-pic="${$.imageURL}${image}"` : ''}></button>
    <button class="list-product__table-btn list-product__button-edit" 
    aria-label="edit"></button>
    <button class="list-product__table-btn list-product__button-delete" 
    aria-label="delete"></button>
    </td>
  `;
  return tr;
};

export const createErrorMessage = () => {
  const errorScreen = document.createElement('div');
  errorScreen.classList.add('add-item__overlay-error');
  errorScreen.innerHTML = `
        <div class="add-item__error error">
            <div class="add-item__error-container">
                <button class="add-item-close-button" type="button" title="закрыть">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L22 22" stroke="#6E6893" stroke-width="3" stroke-linecap="round"></path>
                    <path d="M2 22L22 2" stroke="#6E6893" stroke-width="3" stroke-linecap="round"></path>
                  </svg>
                </button>
                <div class="error__block">
                    
                    <svg class="add-item__red-big-error-cross" width="90" height="90" viewBox="0 0 90 90" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L92 92" stroke="#D80101" stroke-width="3" stroke-linecap="round"/>
                        <path d="M2 92L92 2" stroke="#D80101" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                    <p class="add-item__error-message">что-то пошло не так</p>
                </div>
            </div>
        </div>     
    `;

  return errorScreen;
};

const createOverlay = () => {
  const overlay = createElem('div');
  addClass(overlay, ['overlay']);
  const addItemBlock = createElem('div');
  addClass(addItemBlock, ['add-item']);
  const addItemContainer = createElem('div');
  addClass(addItemContainer, ['add-item__container']);

  addItemContainer.insertAdjacentHTML('beforeend', `
        <div class="add-item__title-block">
          <h1 class="add-item__title">добавить товар</h1>
          <p class="add-item__id-block">id:
            <span class="vendor-code__id"></span>
          </p>
        </div>
        <div class="add-item__line"></div>
        <form class="add-item__form"
         name="add-item__form"
          id="add-item__form" method="post">
          <fieldset class="add-item__content">
            <div class="add-item__block-id hide-element"></div>
            <div class="add-item__block add-item__name">
              <div class="add-item__subblock">
                  <label class="add-item__label" for="add-item__name">
                    наименование
                  </label>
              </div>
              <input class="add-item__input" type="text"
               name="name" id="add-item__name" required>
            </div>
          
            <div class="add-item__block add-item__category">
              <div class="add-item__subblock">
                  <label class="add-item__label" for="add-item__category">
                    категория
                  </label>
              </div>
              <input class="add-item__input" type="text"
               name="category" list="add-item__category-list" id="add-item__category" required>
                <datalist class="add-item__category-datalist" id="add-item__category-list">
                </datalist>
            </div>
          
            <div class="add-item__block add-item__measure">
              <div class="add-item__subblock">
                <label class="add-item__label" for="add-item__measure">
                  еденицы измерения
                </label>
              </div>
              <input class="add-item__input" type="text"
               name="measure" id="add-item__measure" required>
            </div>
          
            <div class="add-item__discount">
              <div class="add-item__subblock">
                <label class="add-item__label" for="add-item__discount">
                дисконт
                </label>
              </div>
              <div class="add-item__input-set">
                <input class="add-item__checkbox" type="checkbox">
                <input class="add-item__input" type="text"
                 name="discount" id="add-item__discount">
              </div>
            </div>  
          
            <div class="add-item__block add-item__description">
                <div class="add-item__subblock">
                  <label class="add-item__label" for="add-item__description">
                  описание </label>
                  <span class="add-item__text-count">0/80</span>
              </div>
              <textarea class="add-item__input" rows="5"
               name="description" 
              id="add-item__description" required></textarea>
            </div>
          
            <div class="add-item__block add-item__quantity">
              <div class="add-item__subblock">
                <label class="add-item__label" for="add-item__quantity">количество</label>
              </div>
              <input class="add-item__input" type="number"
               name="quantity" id="add-item__quantity" min="1" required>
            </div>
          
            <div class="add-item__block add-item__price">
              <div class="add-item__subblock">
                <label class="add-item__label" for="add-item__price">
                  цена
                </label>
              </div>
              <input class="add-item__input" type="number"
               name="price" id="add-item__price" min="1" required>
            </div>
            <div class="add-item__image-text remove-margin">
              <p class="add-item__image-size-text">изображение не должно превышать размер 1 мб</p>
            </div>
          
            <div class="add-item__add-image-button">
              <label class="add-item__label-add-image"
               for="add-item__button-image">добавить
                изображение</label>
              <input class="add-item__button add-item__button-image" type="file"
                id="add-item__button-image"
                name="image"
                accept="image/jpeg, image/png">
                <p class="add-item__file-size"></p>
            </div>
            <div class="add-item__block add-item__image">
               
                  <div class="add-item__image-wrapper hide-image">
                   <div class="add-item__trashcan">
                </div>
                  </div>
            </div>
          </fieldset>
        </form>
    `);

  const form = addItemContainer.querySelector('form');
  const formInputs = form.querySelectorAll('.add-item__content input:not(.add-item__checkbox), #add-item__description');
  const addItemTotalBlock = createElem('div');
  addClass(addItemTotalBlock, ['add-item__total-block']);

  addItemTotalBlock.insertAdjacentHTML('beforeend', `
      <p class="add-item__total">
        <span class="add-item__total-text">Итоговая стоимость: </span>
        <span class="add-item__total-currency">
        $<span class="add-item__total-value">0</span></span>
      </p>
    `);

  const addItemFormBtn = createElem('button');
  addClass(addItemFormBtn, ['add-item__button',
    'add-item__button-item']);
  addItemFormBtn.type = 'submit';
  addItemFormBtn.textContent = 'добавить товар';
  addItemFormBtn.setAttribute('form',
      'add-item__form');

  const addItemCloseBtn = createElem('button');
  addClass(addItemCloseBtn, ['add-item-close-button']);
  addItemCloseBtn.type = 'button';
  addItemCloseBtn.title = 'закрыть';
  addItemCloseBtn.insertAdjacentHTML('beforeend', `
      <svg width="20" height="20" viewbox="0 0 24 24" 
      fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L22 22" stroke="#6E6893" 
        stroke-width="3" stroke-linecap="round"/>
        <path d="M2 22L22 2" stroke="#6E6893" 
        stroke-width="3" stroke-linecap="round"/>
      </svg>
    `);

  addItemTotalBlock.append(addItemFormBtn);
  addItemContainer.append(addItemTotalBlock);
  addItemBlock.append(addItemContainer);
  addItemBlock.append(addItemCloseBtn);
  overlay.append(addItemBlock);
  const addItemError = createErrorMessage();
  return {overlay, form, formContent: formInputs, addItemError, addItemBlock};
};

export const createId = () => {
  let ID = ``;
  const characters = '0123456789';
  for (let i = 0; i < 9; i++) {
    ID += characters.charAt(Math.floor(Math.random() * 10));
  }
  return ID;
};

export default {
  addClass,
  createContainer,
  createSection,
  createLogo,
  createTitleSum,
  createHeader,
  createElem,
  createNav,
  createWrapper,
  createFooter,
  createMainBlock,
  createRow,
  createOverlay,
};
