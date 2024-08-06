import {createSvg} from "../../createComponent.js";

export const  getLogo =(parentName)=>{
  
  const svgPath = 'public/logo/logo.svg'
  
  const className = `logo`;
  const logo = createSvg(svgPath, parentName, className);
  return logo;
}