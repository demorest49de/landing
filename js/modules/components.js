import {getContainer} from "./Hero/ui/container.js";

export const components = (elem) => document.createElement(elem);


export const createSection = (sectionName, hasContainer = true) => {
  const section = components('section');
  addClass(section, sectionName, '');
  
    const container = getContainer(sectionName, hasContainer);
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
  loadSVG(svgPath, svgContainer);
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
  const paragraph = components('p');
  paragraph.textContent = text;
  addClass(paragraph, parentName, className);
  return paragraph;
};

export const createButtons = (parentName, text, className) => {
  const button = components('button');
  button.innerText = text;
  addClass(button, parentName, className);
  return button;
};

export const createAnchors = (parentName, attr, className) => {
  const anchor = components('a');
  anchor.textContent = attr.text;
  anchor.href = attr.href;
  addClass(anchor, parentName, className);
  return anchor;
};

export const createDiv = (parentName, className) => {
  const div = components('div');
  addClass(div, parentName, className);
  return div;
};