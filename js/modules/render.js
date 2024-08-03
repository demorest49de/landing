import {getHero} from "./Hero/hero.js";

export const renderLanding = (app) => {
  
  const hero = getHero();
  
  const arr = [hero]
  app.append(...arr);
};
