import "./style.sass";

import cButton from "./cButton.vue";

cButton.install = (vue: any) => {
    vue.component("c-button", cButton);
}

if (typeof window !== "undefined" && window.vue) {
    cButton.install(window.vue);
}

export default cButton;
