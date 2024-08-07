import {getBigYellowCircle} from "./bigYellowCircle.js";
import {getCity} from "./city.js";
import {getFigures} from "./figures.js";

export function getImageElements(parentName) {
  const yellowCircle = getBigYellowCircle(parentName);
  
  const city = getCity(parentName);
  
  const figures = getFigures(parentName)
  
  return[...yellowCircle, ...city, ...figures];
}