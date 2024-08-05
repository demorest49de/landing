import {createElement, createSection, createDiv} from "../createElement.js";
import {getLogo} from "./logo.js";
import {getTextBlock} from "./textBlock.js";
import {getTextSmallBlock} from "./textSmallBlock.js";
import {getButtons} from "./buttons.js";
import {getBigYellowCircle} from "./bigYellowCircle.js";
import {getCity} from "./city.js";

const parentName = 'hero';
const hero = createSection(parentName);
const heroContainer = hero.container;
const wrapper = createDiv(parentName, "wrapper");
heroContainer.appendChild(wrapper);

const logo = getLogo(parentName);

const title = createElement('h1');
title.textContent = 'Превратите уездный город в столицу земного шара';
title.classList.add(`${parentName}__title`, `visually-hidden`);


const textBlock = getTextBlock(parentName);

const textSmallBlock = getTextSmallBlock(parentName);

const buttonsBlock = getButtons(parentName);

const bigYellowCircleBlock = getBigYellowCircle(parentName);

const city = getCity(parentName);

wrapper.append(logo, title, textBlock, textSmallBlock, buttonsBlock,);
heroContainer.append(bigYellowCircleBlock);
// heroContainer.append(...city)
// heroContainer.append(city);

export const getHero = () => hero;