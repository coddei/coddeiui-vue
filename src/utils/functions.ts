import { defineColor } from "./index";


export default (Vue: any) => {
    const cFunctions = {
        setColor(color: string, value: string) {
            defineColor(color, value, document.body);
        }
    }

    Vue.prototype.$c = cFunctions;
}
