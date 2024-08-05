import {createDiv, createSvg} from "../createElement.js";

export const getBigYellowCircle = (parentName) => {
  
  
  const block = createDiv(parentName, `big-yellow-circle-block`);
  
  const svgPath = 'public/img/yellow-circle.svg';
  const circle = createSvg(svgPath, parentName, `circle`);
  
  circle.addEventListener('mouseover', function () {
    circle.classList.add('hero__circle_rotate');
  });
  
  circle.addEventListener('click', function ({currentTarget}) {
    console.log(' currentTarget: ', currentTarget);
  });
  
  block.appendChild(circle);
  return block;
};