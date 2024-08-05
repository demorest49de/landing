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

export const createSvg = (svgPath, parentName, className) => {
  const svgContainer = createDiv(parentName, className);
  loadSVG(svgPath,svgContainer)
  return svgContainer;
};

export function loadSVG(svgUrl, svgContainer) {
  fetch(svgUrl)
    .then(response => response.text())
    .then(svgText => {
      svgContainer.innerHTML = svgText;
      
    })
    .catch(error => console.error('Error loading SVG:', error));
}

export const createParagraph = (parentName, text, className) => {
  const paragraph = createElement('p');
  paragraph.textContent = text;
  addClass(paragraph, parentName, className);
  return paragraph;
};

export const createButtons = (parentName, text, className) => {
  const button = createElement('button');
  button.innerText = text;
  addClass(button, parentName, className);
  return button;
};

export const createAnchors = (parentName, attr, className) => {
  const anchor = createElement('a');
  anchor.textContent = attr.text;
  anchor.href = attr.href;
  addClass(anchor, parentName, className);
  return anchor;
};

export const createDiv = (parentName, className) => {
  const div = createElement('div');
  addClass(div, parentName, className);
  return div;
};