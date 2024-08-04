import {createElement, createSection, createDiv} from "../createElement.js";
import {getLogo} from "./logo.js";
import {getTextBlock} from "./textBlock.js";
import {getTextSmallBlock} from "./textSmallBlock.js";
import {getButtons} from "./buttons.js";
import {getBigYellowCircle} from "./bigYellowCircle.js";

const parentName = 'hero';
const hero = createSection(parentName);
const heroContainer = hero.container;
const wrapper = createDiv(parentName, "wrapper");
heroContainer.appendChild(wrapper);

const title = createElement('h1');
title.textContent = 'Превратите уездный город в столицу земного шара';
title.classList.add(`${parentName}__title`, `visually-hidden`);

const logo = getLogo(parentName);

const textBlock = getTextBlock(parentName);

const textSmallBlock = getTextSmallBlock(parentName);

const buttonsBlock = getButtons(parentName);

const bigYellowCircleBlock = getBigYellowCircle(parentName)

wrapper.append(logo, title, textBlock, textSmallBlock, buttonsBlock, );
heroContainer.append(bigYellowCircleBlock)

export const getHero = () => hero;