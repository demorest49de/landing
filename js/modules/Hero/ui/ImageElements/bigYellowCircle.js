import {createFigure, createImg} from "../../../createElement.js";

export const getBigYellowCircle = (parentName) => {
  
  const circleObject = {path: 'public/img/yellow-circle/yellow-circle.png', alt: 'желтый круг', className: 'circle-image'};
  const circleIMG = createImg(circleObject, parentName);
  
  const wordsObject = {path: 'public/img/yellow-circle/circle-words.png', alt: 'буквы по кругу', className: 'words-image'};
  const wordsIMG = createImg(wordsObject, parentName);

  const elements = [
    circleIMG,
    wordsIMG
  ];
  
  return elements;
};