import {createDiv, createParagraph} from "../createElement.js";

export const getTextSmallBlock = (parentName) => {
  const textArray = ['Оплатите взнос на телеграммы для организации',
    'Международного васюкинского турнира по шахматам'];
  
  const paragraphs = textArray.map(text => {
    return createParagraph(parentName, text, 'text-small');
  });
  
  const textSmallBlock = createDiv(parentName, 'text-small-block');
  paragraphs.forEach(p => {
    textSmallBlock.appendChild(p);
  });
  return textSmallBlock;
};