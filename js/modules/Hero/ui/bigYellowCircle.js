import {createDiv, createFigure, createImg, createSvg} from "../../createElement.js";

export const getBigYellowCircle = (parentName) => {
  
  
  const circle = createFigure(parentName, `circle`);
  
  const circleObject = {path: 'public/img/yellow-circle/yellow-circle.png', alt: 'желтый круг', className: 'circle-image'};
  const circleIMG = createImg(circleObject, parentName);
  circle.appendChild(circleIMG);
  
  // const svgPath = 'public/img/yellow-circle.svg';
  // const circle = createSvg(svgPath, parentName, `circle`);
  // block.appendChild(circle);
  
  return circle;
};