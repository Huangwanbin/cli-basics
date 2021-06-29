#! /usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');

program
    .version('0.0.1')
    .command('create <name>')
    .description('create a new project')
    .action(name => {
        inquirer.prompt({
            type: "input",
            name: "age",
            message: "input your age please",
            default: "18"
        }).then(answer => {
            console.log("project name is " + chalk.bgRed(name) + ", author's age is " + chalk.hex('#049CDB').bold(answer.age))
        })
    });
program.parse();