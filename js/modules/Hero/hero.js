import {createElement, createSection, createDiv} from "../createElement.js";
import {getLogo} from "./logo.js";
import {getTextBlock} from "./textBlock.js";
import {getTextSmallBlock} from "./textSmallBlock.js";
import {getButtons} from "./buttons.js";

const parentName = 'hero';
const hero = createSection(parentName,
  'container'
);

const wrapper = createDiv(parentName, "wrapper");
hero.container.appendChild(wrapper);

const title = createElement('h1');
title.textContent = 'Превратите уездный город в столицу земного шара';
title.classList.add(`${parentName}__title`, `visually-hidden`);

const logo = getLogo(parentName);

const textBlock = getTextBlock(parentName);

const textSmallBlock = getTextSmallBlock(parentName);

const buttonsBlock = getButtons(parentName);



wrapper.append(logo, title, textBlock, textSmallBlock, buttonsBlock);


export const getHero = () => hero;