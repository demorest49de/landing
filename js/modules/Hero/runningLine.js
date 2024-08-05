import {createDiv} from "../createElement.js";

export const getRunningLine = (parentName) => {
  
  const block = createDiv(parentName, 'running-line-block');
  const line = createDiv(parentName, 'running-line');
  block.appendChild(line);
  return block;
};