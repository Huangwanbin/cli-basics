#! /usr/bin/env node
const program = require('commander'); //自定义命令行指令
const chalk = require('chalk'); //命令行美化工具
const inquirer = require('inquirer'); //命令行交互工具
const ora = require('ora'); //loading动效
const crossSpawn = require('cross-spawn'); //跨平台shell执行工具
const spinner = ora("loading...");
const dependencies = ['vue', 'vuex', 'vue-router'];// 定义需要按照的依赖

program
    .version('0.0.1')
    .command('create <name>')
    .description('create a new project')
    .action(name => {
        inquirer.prompt({
            type: "input",
            name: "confirm",
            message: "press ok to start",
            default: "ok"
        }).then(answer => {
            spinner.start(); //开始loading
            if (answer.confirm === 'ok') {
                // 执行安装
                const child = crossSpawn('npm', ['install', '-D'].concat(dependencies), { 
                    stdio: 'inherit' 
                });
                // 监听执行结果
                child.on('close', function(code) {
                    spinner.stop() // 停止loading
                    // 执行失败
                    if(code !== 0) {
                        spinner.fail(chalk.bgRed('Error occurred while installing dependencies!'));  //失败 ✖
                        process.exit(1); //退出
                    }
                    // 执行成功
                    else {
                        spinner.succeed(chalk.bgGreen('Install finished')); // 成功 ✔
                    }
                })
            }else {
                spinner.stop() // 停止loading
                spinner.fail(chalk.bgRed('please press ok to create')); // 失败,输入不对
            }
        })
    });
program.parse();