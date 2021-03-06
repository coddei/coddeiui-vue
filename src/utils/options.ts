import { defineColor, setTheme } from "./index";


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
    theme?: string
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

    if (!!options.theme) {
        setTheme(options.theme);
    }
}
