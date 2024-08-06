import {createImg, createSvg} from "../../createComponent.js";

export const getCity = (parentName) => {
  
  // const cityObject = {path: 'public/img/city/city.png', alt: 'город на шахматной доске', className: 'city'};
  //   const city = createImg(cityObject, parentName);
  
  const svgPath = 'public/img/city/city.svg';
  const city = createSvg(svgPath, parentName, `city`);
  
    const svgPath2 = 'public/img/city/path.svg';
  const path = createSvg(svgPath2, parentName, `path`);
  const elements = [
    city,
    path
  ];
  
  return elements;
};