import {createElement, createSection, createDiv, addClass, createMainTitle} from "../createElement.js";
import {getLogo} from "./ui/logo.js";
import {getTextBlock} from "./ui/textBlock.js";
import {getTextSmallBlock} from "./ui/textSmallBlock.js";
import {getAnchors} from "./ui/anchors.js";
import {getBigYellowCircle} from "./ui/bigYellowCircle.js";
import {getCity} from "./ui/city.js";
import {getFigures} from "./ui/figures.js";

const parentName = 'hero';
const hero = createSection(parentName);

const heroContainer = hero.container;
const wrapper = createDiv(parentName, "wrapper");
heroContainer.appendChild(wrapper);

const logo = getLogo(parentName);

const title = createMainTitle(parentName)

const textBlock = getTextBlock(parentName);

const textSmallBlock = getTextSmallBlock(parentName);

const anchorsBlock = getAnchors(parentName);

const yellowCircle = getBigYellowCircle(parentName);

const city = getCity(parentName);

const figures = getFigures(parentName)

wrapper.append(logo, title, textBlock, textSmallBlock, anchorsBlock,);
// heroContainer.append(bigYellowCircleBlock, city, figures);
heroContainer.append(...yellowCircle, ...city, figures);


export const getHero = () => hero;