import {createAnchors, createButtons, createDiv} from "../../components.js";

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
    return createAnchors(parentName, attr, 'link');
  });
  
  const buttonsBlock = createDiv(parentName, "link-block");
  buttons.forEach(button => {
    buttonsBlock.appendChild(button);
  });
  return buttonsBlock;
};