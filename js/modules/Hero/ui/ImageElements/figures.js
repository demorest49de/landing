import {createDiv, createImg} from "../../../createElement.js";

export const getFigures = (parentName) => {
  
  const peshka = {path: 'public/img/chess-figures/peshka.png', alt: 'фигура пешки', className: 'figure'};
  const slon = {path: 'public/img/chess-figures/slon.png', alt: 'фигура слона', className: 'figure'};
  const korol = {path: 'public/img/chess-figures/korol.png', alt: 'фигура короля', className: 'figure'};
  const koroleva = {path: 'public/img/chess-figures/koroleva.png', alt: 'фигура королевы', className: 'figure'};
  
  const peshkaIMG = createImg(peshka, parentName);
  const slonIMG = createImg(slon, parentName);
  const korolIMG = createImg(korol, parentName);
  const korolevaIMG = createImg(koroleva, parentName);
  
  const elements = [
    peshkaIMG,
    slonIMG,
    korolIMG,
    korolevaIMG,
  ];
  
  return elements;
};