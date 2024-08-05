import {createDiv} from "../createElement.js";

export const getConveer = (parentName) => {
  
  const block = createDiv(parentName, 'block');
  const conveer = createDiv(parentName, 'conveer');
  block.appendChild(conveer);
  return block;
};