

const uiColor = (color: string) => {
    const colors = [
        'primary', 'secondary', 'success', 'danger', 'warning', 'dark', 'light',
    ]

    return colors.includes(color);
}

const setStyleVar = (name: string, value: string, el: any) => {
    if (el) {
        el.style.setProperty(`--c-${name}`, value);
        return;
    }

    document.documentElement.style.setProperty(`--c-${name}`, value);
}

const defineColor = (name: string, color: string, el: any) => {
    const newColor = getColor(color);
    setStyleVar(name, newColor, el);
}

const getColor = (color: string) => {
    let newColor;

    if (isRGB(color)) {
        const rgb = color.replace(/[rgba()]/g, '').split(',');
        newColor = `${rgb[0]},${rgb[1]},${rgb[2]}`;
    } else if (isHEX(color)) {
        const rgb = hexToRgb(color);
        newColor = `${rgb!.r},${rgb!.g},${rgb!.b}`;
    } else if (uiColor(color)) {
        const style = window.getComputedStyle(document.body);
        newColor = style.getPropertyValue(`--c-${color}`);

        if (isHEX(newColor.trim())) {
            const rgb = hexToRgb(newColor.trim());
            newColor = `${rgb!.r},${rgb!.g},${rgb!.b}`;
        }
    } else {
        // TODO console error
    }

    return newColor;
}

function isRGB(color: string) {
    // for rgba -> 0,0,0,1
    // ((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d))(,((0.[\d]|0)|1))?

    const nCheck = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(color)
    const rgbCheck = /^(rgb|rgba)/.test(color);

    return nCheck || rgbCheck;
}

function isHEX(color: string) {
    return /^(#)/.test(color);
}

function hexToRgb(hex: string) {
    var regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

    // short hex
    if (hex.length < 6) {
        regex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    }

    var result = regex.exec(hex);

    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

export {
    uiColor,
    defineColor,
    getColor,
    setStyleVar
}
