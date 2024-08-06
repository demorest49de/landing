import {getContainer} from "./Hero/ui/container.js";

export const createComponent = (elem) => document.createElement(elem);


export const createSection = (sectionName, hasContainer = true) => {
  const section = createComponent('section');
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

export const createImg = (figure, parentName) => {
  const imgContainer = new Image();
  imgContainer.alt = figure.alt;
  addClass(imgContainer, parentName, figure.className);
  loadIMG(figure.path, imgContainer);
  return imgContainer;
};

export async function loadIMG(imgURL, imgContainer) {
  try {
    const response = await fetch(imgURL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    debugger
    const blob = await response.blob();
    const imageObjectURL = URL.createObjectURL(blob);
    
    imgContainer.src = imageObjectURL;
  } catch (error) {
    console.error('Error loading image:', error);
  }
}

export const createParagraph = (parentName, text, className) => {
  const paragraph = createComponent('p');
  paragraph.textContent = text;
  addClass(paragraph, parentName, className);
  return paragraph;
};

export const createButton = (parentName, text, className) => {
  const button = createComponent('button');
  button.innerText = text;
  addClass(button, parentName, className);
  return button;
};

export const createAnchor = (parentName, attr, className) => {
  const anchor = createComponent('a');
  anchor.textContent = attr.text;
  anchor.href = attr.href;
  addClass(anchor, parentName, className);
  return anchor;
};

export const createDiv = (parentName, className) => {
  const div = createComponent('div');
  addClass(div, parentName, className);
  return div;
};