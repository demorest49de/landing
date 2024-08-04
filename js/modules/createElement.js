export const createElement = (elem) => document.createElement(elem);


export const createSection = (sectionName, classes = undefined) => {
  const section = createElement('section');
  addClass(section, sectionName);
  const container = createContainer(sectionName, classes);
  section.container = container;
  section.append(container);
  return section;
};


const addClass = (element, name, classes = undefined) => {
  if (Array.isArray(classes)) {
    element.classList.add(name, ...classes);
  }
  if(typeof classes === 'string') {
    element.classList.add(name, classes);
  }
  if(typeof classes === `undefined`) {
    element.classList.add(name);
  }
};

const createContainer = (text, classes = undefined) => {
  const container = document.createElement('div');
  const name = text + `__container`;
  addClass(container, name, classes);
  return container;
};

export const createSvg = (svgHTML) => {
  const svgContainer = createElement('div');
  
  svgContainer.innerHTML = svgHTML;
  return svgContainer;
};

export const createParagraph = (parentName, text, className) => {
  const paragraph = createElement('p');
  paragraph.textContent = text;
  paragraph.classList.add(`${parentName}__${className}`)
  return paragraph;
};

export const createButtons = (parentName, text, className) => {
  const button = createElement('button');
  button.innerText = text;
  button.classList.add(`${parentName}__${className}`)
  return button;
};

export const createDiv = (parentName, className) => {
  const div = createElement('div');
  div.classList.add(`${parentName}__${className}`)
  return div;
};