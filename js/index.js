import {renderLanding} from './modules/render.js';

{
    const init = (selectorApp) => {
        const app = document.querySelector(selectorApp);
        renderLanding(app);
    };

    window.init = init;
}

//