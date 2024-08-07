import {getContainer} from "../ui/container.js";

export const createElement = (elementName, parentName, className = '', classNames = undefined) => {
  const elem = document.createElement(elementName);
  addClass(elem, parentName, className, classNames);
  return elem;
};


export const createSection = (sectionName, hasContainer = true) => {
  const section = createElement('section', sectionName);
  
  const container = getContainer(sectionName, hasContainer);
  section.container = container;
  section.append(container);
  
  
  return section;
};

export const createMainTitle = (parentName) => {
  const classNames = [`visually-hidden`];
  const className = `title`;
  const title = createElement('h1', parentName, className, classNames);
  title.textContent = 'Превратите уездный город в столицу земного шара';
  return title;
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

export async function loadSVG(svgUrl, svgContainer) {
  try {
    const response = await fetch(svgUrl);
    if (!response.ok) {
      throw new Error(`SVG loading error! Status: ${response.status}`);
    }
    const text = await response.text();
    svgContainer.innerHTML = text;
  } catch (error) {
    console.error('Error loading svg:', error);
  }
}

export const createImg = (figure, parentName) => {
  const imgContainer = createElement('img', parentName, figure.className);
  imgContainer.alt = figure.alt;
  loadIMG(figure.path, imgContainer);
  return imgContainer;
};

export async function loadIMG(imgURL, imgContainer) {
  try {
    const response = await fetch(imgURL);
    if (!response.ok) {
      throw new Error(`IMG loading error! Status: ${response.status}`);
    }
    
    const blob = await response.blob();
    const imageObjectURL = URL.createObjectURL(blob);
    
    imgContainer.src = imageObjectURL;
  } catch (error) {
    console.error('Error loading image:', error);
  }
}

export const createParagraph = (parentName, text, className) => {
  const paragraph = createElement('p', parentName, className);
  paragraph.textContent = text;
  return paragraph;
};

export const createButton = (parentName, text, className) => {
  const button = createElement('button', parentName, className);
  button.innerText = text;
  return button;
};

export const createAnchor = (parentName, attr, className) => {
  const anchor = createElement('a', parentName, className);
  anchor.textContent = attr.text;
  anchor.href = attr.href;
  return anchor;
};

export const createDiv = (parentName, className) => {
  const div = createElement('div', parentName, className);
  return div;
};

export const createFigure = (parentName, className) => {
  const figure = createElement('figure', parentName, className);
  return figure;
};