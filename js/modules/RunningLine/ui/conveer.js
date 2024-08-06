import {createDiv} from "../../components.js";

export const getConveer = (parentName) => {
  
  const block = createDiv(parentName, 'block');
  const conveer = createDiv(parentName, 'conveer');
  const textArray = [
    'Дело помощи утопающим — дело рук самих утопающих!',
    'Шахматы двигают вперед не только культуру, но и экономику!',
    'Лед тронулся, господа присяжные заседатели!'
  ]
  conveer.innerText = textArray.join('  ');
  block.appendChild(conveer);
  return block;
};