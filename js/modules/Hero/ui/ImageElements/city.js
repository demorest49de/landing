import {createDiv, createFigure, createImg, createSvg} from "../../../createElement.js";

export const getCity = (parentName) => {
  
  const city = createFigure(parentName, 'city');
  
  const cityObject = {path: 'public/img/city/city.png', alt: 'город на шахматной доске', className: 'city-image'};
  const cityIMG = createImg(cityObject, parentName);
  city.appendChild(cityIMG);
  
  const path = createFigure(parentName, 'path')
  
  const pathObject = {path: 'public/img/city/path.png', alt: 'белая обводка', className: 'path-image'};
  const pathIMG = createImg(pathObject, parentName);
  path.appendChild(pathIMG);
  
  
  const elements = [
    city,
    path
  ];
  
  // cityBlock.appendChild(city)
  // cityBlock.appendChild(path)
  
  // return cityBlock;
  return elements;
};