#! /usr/bin/env node
const program = require('commander');

program
    .version('0.0.1')
    .command('create <name>')
    .description('create a new project')
    .action(name => {
        console.log('your project name :',name, 'right?')
    });
program.parse();