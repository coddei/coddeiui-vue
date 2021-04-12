const { execSync } = require("child_process");
const { show } = require("./utils/terminal.js");

const chalk = require("chalk");


show();
show();
show("yellow")(`Watching changes for ${chalk.bold('CoddeiUI')}`);
show();
show();

execSync(
    `npx webpack --watch --config build/lib/webpack.lib.js`, {stdio: 'inherit'}
)
