import {createSvg} from "../../createComponent.js";

export const getCity = (parentName) => {
  
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