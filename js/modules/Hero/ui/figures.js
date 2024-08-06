import {createDiv, createImg} from "../../createComponent.js";

export const getFigures = (parentName) => {
  
  const peshka = {path: 'public/img/chess-figures/peshka.png', alt: 'фигура пешки', className: 'peshka'};
  const slon = {path: 'public/img/chess-figures/slon.png', alt: 'фигура слона', className: 'slon'};
  const korol = {path: 'public/img/chess-figures/korol.png', alt: 'фигура короля', className: 'korol'};
  const koroleva = {path: 'public/img/chess-figures/koroleva.png', alt: 'фигура королевы', className: 'koroleva'};
  
  const peshkaIMG = createImg(peshka, parentName);
  const slonIMG = createImg(slon, parentName);
  const korolIMG = createImg(korol, parentName);
  const korolevaIMG = createImg(koroleva, parentName);
  
  const figureBlock = createDiv(parentName, 'figures-block');
  
  const elements = [
    peshkaIMG,
    slonIMG,
    korolIMG,
    korolevaIMG,
  ];
  
  elements.forEach(element => {
    figureBlock.appendChild(element);
  });
  
  return figureBlock;
};