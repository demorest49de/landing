import {createDiv, createElement} from "../../Hero/Components/createElement.js";

export const getConveer = (parentName) => {
  
  const block = createDiv(parentName, 'block');
  const conveerBlock = createDiv(parentName, 'conveer-block');
  const conveer = createElement('span', parentName, 'conveer');
  
  const textArray = [
    'Дело помощи утопающим — дело рук самих утопающих!',
    'Шахматы двигают вперед не только культуру, но и экономику!',
    'Лед тронулся, господа присяжные заседатели!'
  ]
  
  conveer.innerText = textArray.join('  ');
  conveerBlock.append(conveer)
  block.append(conveerBlock);
  return block;
};