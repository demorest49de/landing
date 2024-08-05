import {createDiv, createSvg} from "../createElement.js";

export const getBigYellowCircle = (parentName) => {
  
  
  const block = createDiv(parentName, `big-yellow-circle-block`);
  
  const svgPath = 'public/img/yellow-circle.svg'
  const circle = createSvg(svgPath, parentName, `circle`);
  
  block.appendChild(circle)
  return block;
};