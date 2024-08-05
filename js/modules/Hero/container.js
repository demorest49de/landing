import {addClass, createDiv} from "../createElement.js";


export const getContainer = (sectionName, hasContainer = true) => {
  const classNameToConcat = 'container';
  let classNames =['container',]
  if (!hasContainer) {
    classNames = undefined
  }
  return  createContainer(sectionName, classNameToConcat, classNames);
}

export const createContainer = (parentName, className, classNames = undefined) => {
  const container = createDiv(parentName, className);
  addClass(container, parentName, className, classNames);
  return container;
};