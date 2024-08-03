import {renderLanding} from './modules/render.js';


{
    const init = (selectorApp) => {
        const app = document.querySelector(selectorApp);
        
        renderLanding(app);
        // const crm = renderLanding(app);
        
        // const {URL, verbs, body, imageURL, clearURL, apiCategory} = getConsts();
        // const {addItemBtn, overlay, tbody, form, header, formContent, addItemError, addItemBlock} = crm;
        // const generalVars = {
        //     addItemBtn,
        //     overlay,
        //     tbody,
        //     form,
        //     header,
        //     title,
        //     URL,
        //     verbs,
        //     formContent,
        //     body,
        //     app,
        //     addItemError,
        //     imageURL,
        //     addItemBlock,
        //     apiCategory,
        //     clearURL
        // };

        // Функционал

        // handleControls(generalVars);
        // loadGoodsHandler(generalVars).then(data => {
        // });
        // handleSearch(generalVars);
    };

    window.init = init;
}

/**
 * Чтобы удалить последний коммит как локально, так и удаленно, следуйте этим шагам:
 *
 * Удаление последнего коммита локально:
 * Откатите локальный репозиторий к предыдущему коммиту, используя команду git reset:
 *
 * bash
 * Copy code
 * git reset --hard HEAD~1
 * Здесь HEAD~1 означает "один коммит назад от текущей позиции HEAD".
 *
 * Удаление последнего коммита удаленно:
 * Теперь вам нужно обновить удаленный репозиторий, чтобы он соответствовал вашему локальному состоянию. Используйте команду git push с флагом --force:
 *
 * bash
 * Copy code
 * git push origin HEAD --force
 * Эти команды удалят последний коммит как локально, так и в удаленном репозитории. Будьте осторожны при использовании флага --force, так как он перезапишет историю коммитов на удаленном репозитории и может повлиять на других разработчиков, работающих с этим репозиторием.
 */
