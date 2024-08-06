import {createSvg} from "../../components.js";

export const  getLogo =(parentName)=>{
  
  const svgPath = 'public/logo/logo.svg'
  
  const className = `logo`;
  const logo = createSvg(svgPath, parentName, className);
  return logo;
}