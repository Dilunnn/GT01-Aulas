// calcular IMC
function calcularoimc(altura,peso) {
    let imc = peso/(altura*altura)
    return imc
}

const classificarIdade = (idade,nome) => {
if (idade >= 18) {
    return `${nome} é adulto`
} else {
    return `${nome} não é adulto`
}
}


const converterTemperatura = (tc) => (tc*(9/5)) + 32

function calcularmedia(lista) {
    let soma = 0
    for (let i = 0; i < lista.length; i++) {
      soma += lista[i];
      // soma = soma + lista[i]
    }
    return soma;
}