import "./style.sass";

import cCol from "./cCol.vue";

cCol.install = (vue: any) => {
    vue.component("c-col", cCol);
}

if (typeof window !== "undefined" && window.vue) {
    cCol.install(window.vue);
}

export default cCol;
