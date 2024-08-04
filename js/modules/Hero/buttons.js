import {createButtons, createDiv} from "../createElement.js";

export const getButtons = (parentName) => {
  const textArray = ['Поддержать шахматную мысль', 'Подробнее о турнире'];
  
  const buttons = textArray.map(text => {
    return createButtons(parentName, text, 'button');
  });
  
  const buttonsBlock = createDiv(parentName, "buttons-block");
  buttons.forEach(button => {
    buttonsBlock.appendChild(button);
  });
  return buttonsBlock;
};