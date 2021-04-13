import "./style.sass";

import cRow from "./cRow.vue";

cRow.install = (vue: any) => {
    vue.component("c-row", cRow);
}

if (typeof window !== "undefined" && window.vue) {
    cRow.install(window.vue);
}

export default cRow;
