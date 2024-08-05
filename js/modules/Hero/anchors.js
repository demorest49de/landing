import {createAnchors, createButtons, createDiv} from "../createElement.js";

export const getAnchors = (parentName) => {
  const attributeArray = [
    {
      text: 'Поддержать шахматную мысль',
      href: '/'
    },
    {
      text: 'Подробнее о турнире',
      href: '/'
    },];
  
  const buttons = attributeArray.map(attr => {
    return createAnchors(parentName, attr, 'button');
  });
  
  const buttonsBlock = createDiv(parentName, "buttons-block");
  buttons.forEach(button => {
    buttonsBlock.appendChild(button);
  });
  return buttonsBlock;
};