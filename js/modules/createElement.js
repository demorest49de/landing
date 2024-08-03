export const createElement = (elem) => document.createElement(elem);


export const createSection = (sectionName) => {
  
  const section = createElement('section');
  addClass(section, sectionName);
  const container = createContainer(sectionName);
  section.container = container;
  section.append(container);
  return section;
};


const addClass = (element, names) => {
  if (Array.isArray(names)) {
    element.classList.add(...names);
  } else {
    element.classList.add(names);
  }
};

const createContainer = (text) => {
  const container = document.createElement('div');
  const name = text + `__container`;
  addClass(container, name);
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