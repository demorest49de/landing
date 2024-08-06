import {createDiv, createFigure, createImg, createSvg} from "../../createElement.js";

export const getBigYellowCircle = (parentName) => {
  
  
  const circle = createFigure(parentName, `circle`);
  
  const circleObject = {path: 'public/img/yellow-circle/yellow-circle.png', alt: 'желтый круг', className: 'circle-image'};
  const circleIMG = createImg(circleObject, parentName);
  circle.appendChild(circleIMG);
  
  const words = createFigure(parentName, `words`);
  
  const wordsObject = {path: 'public/img/yellow-circle/circle-words.png', alt: 'буквы по кругу', className: 'words-image'};
  const wordsIMG = createImg(wordsObject, parentName);
  words.appendChild(wordsIMG);
  const elements = [
    circle,
    words
  ];
  
  return elements;
};