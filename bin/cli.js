#! /usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const ora = require('ora');
const spinner = ora("loading...");

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
            spinner.start();
            setTimeout(() => {
                // 修改动画样式

                // Type: string
                // Default: 'cyan'
                // Values: 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'
                spinner.color = 'red';    
                spinner.text = 'Loading rainbows';
                setTimeout(() => {
                    // 加载状态修改
                    spinner.stop() // 停止
                    spinner.succeed('Loading succeed'+" project name is " + chalk.bgRed(name) + ", author's age is " + chalk.hex('#049CDB').bold(answer.age)); // 成功 ✔
                    // spinner.fail(text?);  失败 ✖
                    // spinner.warn(text?);  提示 ⚠
                    // spinner.info(text?);  信息 ℹ
                }, 2000);
                
            }, 2000);
        })
    });
program.parse();