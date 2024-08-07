import {getLogo} from "./logo.js";
import {createMainTitle} from "../../Components/createElement.js";
import {getTextBlock} from "./textBlock.js";
import {getTextSmallBlock} from "./textSmallBlock.js";
import {getAnchors} from "./anchors.js";

export const getWrapperElements = (parentName) => {
  
  const logo = getLogo(parentName);
  
  const title = createMainTitle(parentName);
  
  const textBlock = getTextBlock(parentName);
  
  const textSmallBlock = getTextSmallBlock(parentName);
  
  const anchorsBlock = getAnchors(parentName);
  
  return [logo, title, textBlock, textSmallBlock, anchorsBlock];
};