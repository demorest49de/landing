import {getHero} from "./Hero/hero.js";
import {getRunningLine} from "./RunningLine/runningLine.js";

export const renderLanding = (app) => {
  
  const hero = getHero();
  const line = getRunningLine();
  
  const arr = [hero, line];
  app.append(...arr);
};
