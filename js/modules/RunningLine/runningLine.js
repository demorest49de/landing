import {createSection} from "../createComponent.js";
import {getConveer} from "./ui/conveer.js";


const parentName = 'running-line';

const line = createSection(parentName, false);
const lineContainer = line.container;


const conveer = getConveer(parentName)

lineContainer.append(conveer)

export const getRunningLine = () => line;


