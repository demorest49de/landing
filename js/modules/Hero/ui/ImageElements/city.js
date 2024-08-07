import {createImg} from "../../../createElement.js";

export const getCity = (parentName) => {
  
  const cityObject = {path: 'public/img/city/city.png', alt: 'город на шахматной доске', className: 'city-image'};
  const cityIMG = createImg(cityObject, parentName);
  
  const pathObject = {path: 'public/img/city/path.png', alt: 'белая обводка', className: 'path-image'};
  const pathIMG = createImg(pathObject, parentName);
  
  const elements = [
    cityIMG,
    pathIMG
  ];
  
  return elements;
};