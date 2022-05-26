import * as readline from "node:readline";
import { stdin as input, stdou as output } from "node:process";

const rl = readline.creatInterface({ input, output })

const question = question => new Promise((resolve, reject) => rl.question(question, answer => resolve(answer)))

const nome = await question("Qual o seu nome?")

console.log("O nome da pessoa é: ", nome);
