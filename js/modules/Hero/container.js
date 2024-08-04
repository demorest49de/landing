import {addClass, createDiv} from "../createElement.js";


export const getContainer = (sectionName) => {
  const classNameToConcat = 'container';
  const classNames =['container',]
  return  createContainer(sectionName, classNameToConcat, classNames);
}

export const createContainer = (parentName, className, classNames = undefined) => {
  const container = createDiv(parentName, className);
  addClass(container, parentName, className, classNames);
  return container;
};