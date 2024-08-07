import { createSection, createDiv} from "../createElement.js";
import {getWrapperElements} from "./ui/WrapperElements/WrapperElements.js";
import {getImageElements} from "./ui/ImageElements/ImageElements.js";

const parentName = 'hero';
const hero = createSection(parentName);

const heroContainer = hero.container;
const wrapper = createDiv(parentName, "wrapper");
heroContainer.appendChild(wrapper);

const elements = createDiv(parentName, "elements");
heroContainer.appendChild(elements);

const wrapperElements = getWrapperElements(parentName)
const imageElements = getImageElements(parentName)


wrapper.append(...wrapperElements);
elements.append(...imageElements);

export const getHero = () => hero;