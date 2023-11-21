import chalk from "chalk";

import wilders from "./information.js";


console.log(
    chalk.grey("Hello les Wilders :"),
    chalk.blue(wilders.wilder1 + ","),
    chalk.red(wilders.wilder2),
    chalk.grey("and"),
    chalk.green(wilders.wilder3)
);

