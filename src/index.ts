import * as cComponents from './components/index';
import defineFunctions from './utils/functions';

import './styles/coddeiui.sass'
import { defineOptions, CoddeiUIOptions } from "./utils/options";

const install = (Vue: any, options?: CoddeiUIOptions) => {
    Object.values(cComponents).forEach((cComponent) => {
        Vue.use(cComponent);
    })

    if (options) {
        defineOptions(options);
    }

    defineFunctions(Vue);
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default install
