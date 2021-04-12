const chalk = require("chalk");


const terminalSize = () => {
    const defaultSize = 80;

    var size;

    try {
        const terminalSize = execSync(`tput cols`, { stdio: ['pipe', 'pipe', 'ignore'] })
        size = parseInt(terminalSize.toString()) || defaultSize;
    } catch(e) {
        size = defaultSize;
    }

    return size;
}

const show = (color = null) => (str = "") => {
    const strSize = str.length;
    const leftSize = Math.floor((terminalSize() - strSize) / 2);

    // chalk string
    if (color !== null) {
        str = chalk[color](str)
    }

    console.log(`${" ".repeat(Math.max(leftSize, 0))}${str}`);
}

module.exports = {
    terminalSize,
    show
}
