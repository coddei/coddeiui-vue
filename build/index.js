const { execSync } = require("child_process");
const { show } = require("./utils/terminal.js");

const chalk = require("chalk");


show();
show("yellow")(`Bulding ${chalk.bold('CoddeiUI')} Core`);
show();

execSync(
    `npx webpack --config build/lib/webpack.lib.js`, {stdio: 'inherit'}
)

show();
show("yellow")(`Bulding ${chalk.bold('CoddeiUI')} Components`);
show();

execSync(
    `npx webpack --config build/lib/webpack.components.js`, {stdio: 'inherit'}
)

show();
show("yellow")(`Bulding ${chalk.bold('CoddeiUI')} Styles`);
show();

execSync(
    `npx webpack --config build/lib/webpack.styles.js`, {stdio: 'inherit'}
)

show();
show("green")("Build finished successfully!!!");
show();
