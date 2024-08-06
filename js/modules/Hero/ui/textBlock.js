import {createDiv, createParagraph} from "../../createComponent.js";

export const getTextBlock = (parentName) => {
  const textArray = ['Превратите уездный город', 'в столицу', 'земного шара'];
  
  const textBlock = createDiv(parentName, "text-block");
  
  for (const text of textArray) {
    const paragraph = createParagraph(parentName, text, 'text');
    textBlock.append(paragraph);
  }
  return textBlock;
};