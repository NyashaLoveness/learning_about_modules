import chalk from 'chalk';
//import greet module that is in current folder
import greet from './greet.js'

const styledMessage = chalk.bgGreen.black(greet('Xola'))
console.log(styledMessage)