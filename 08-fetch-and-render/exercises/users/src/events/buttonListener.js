import dom from "../dom.js";
import userHandler from "../handlers/userHandler.js";

const buttonListener = () => {
    dom.button.addEventListener('click', (e) => {
        e.preventDefault();
        userHandler();
    })
};

export default buttonListener;