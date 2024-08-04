import {getContainer} from "./Hero/container.js";

export const createElement = (elem) => document.createElement(elem);


export const createSection = (sectionName) => {
  const section = createElement('section');
  addClass(section, sectionName, '');
  const container = getContainer(sectionName);
  section.container = container;
  section.append(container);
  return section;
};


export const addClass = (element, parentName, className, classNames = undefined) => {
  if (typeof className === 'string' && className.length > 0 && classNames && Array.isArray(classNames)) {
    element.classList.add(`${parentName}__${className}`, ...classNames);
  }
  if (typeof className === 'string' && className.length > 0) {
    
    element.classList.add(`${parentName}__${className}`);
  }
  if (typeof className === `string` && className.length === 0) {
    element.classList.add(parentName);
  }
};

export const createSvg = (svgHTML, parentName, className) => {
  
  const svgContainer = createDiv(parentName, className);
  svgContainer.innerHTML = svgHTML;
  return svgContainer;
};

export const createParagraph = (parentName, text, className) => {
  const paragraph = createElement('p');
  paragraph.textContent = text;
  addClass(paragraph, parentName, className);
  // paragraph.classList.add(`${parentName}__${className}`)
  return paragraph;
};

export const createButtons = (parentName, text, className) => {
  const button = createElement('button');
  button.innerText = text;
  button.classList.add(`${parentName}__${className}`);
  return button;
};

export const createDiv = (parentName, className) => {
  const div = createElement('div');
  div.classList.add(`${parentName}__${className}`);
  return div;
};