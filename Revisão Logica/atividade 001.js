const readline = require('readline')
const { stdin: input, stdout: output } = require('process')
const rl = readline.createInterface({ input, output })
const question = q => new Promise((rs, rj) => rl.question(q + ' ', a => rs(a)))

void async function () {
    let soma = 0
    let counter = 0
    let media = 0

    let mensagem = '[   ERRO    ] Insira um número real entre 0 e 10'
    let min = 0
    let max = 10

    while (true) {
        let strNota = await question(`Digite o valor da ${counter + 1}° nota ou N/n para cacular a média entre os valores inseridos:`)
        if (strNota.toUpperCase() == 'N') break

            if (isNaN (strNota) ) {
                console.log(mensagem)
                continue
            }

                if (strNota < min || strNota > max) {
                    console.log(mensagem)
                    continue
            }

        let nota = parseFloat(strNota)
        soma += nota
        counter++
    }
    media = soma / counter
    console.log(`[ RESULTADO ] A média de todos os valores informados é`, media)
    process.exit()
}()