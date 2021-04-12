import { defineColor } from "./index";


export interface CoddeiUIColors {
    primary: string
    success: string
    danger: string
    warning: string
    dark: string
    [item: string]: any
}

export interface CoddeiUIOptions {
    colors?: CoddeiUIColors
}

const defineColors = (colors: CoddeiUIColors) => {
    if (!document.body) return;

    Object.keys(colors).forEach(el => {
        defineColor(el, colors[el], document.body);
    })
}

export const defineOptions = (options: CoddeiUIOptions) => {
    if (!!options.colors) {
        defineColors(options.colors);
    }
}
