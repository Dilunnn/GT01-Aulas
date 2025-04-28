
// Questões
// ============================================================================
// 1. Crie uma função que receba dois números e retorne a soma deles.

// 2. Crie uma função que receba um número e retorne se ele é par ou ímpar.


function verificar_paridade(numero) {
    if (numero % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

// 3. Crie uma função que receba uma idade e retorne se é "Criança", "Adolescente" ou "Adulto".

function verificar_faixa_etaria(idade) {
    if (idade > 0 && idade <= 12) {
        return 'Criança'
    } else if (idade > 12 && idade <= 17) {
        return 'Adolescente'
    } else if (idade > 17 && idade <= 59) {
        return 'adulto'
    } else if (idade > 59) {
        return 'Velho'
    }
}


// 4. Crie uma função que receba um número de 1 a 7 e retorne o dia da semana correspondente.
function dia_da_semana(dia) {
    if (dia == 1) {
        return 'Segunda-feira'
    } else if (dia == 2) {
        return 'Terça-feira'
    } else if (dia == 3) {
        return 'Quarta-feira'
    } else if (dia == 4) {
        return 'Quinta-feira'
    } else if (dia == 5) {
        return 'Sexta-feira'
    } else if (dia == 6) {
        return 'Sábado'
    } else if (dia == 7) {
        return 'Domingo'
    }
}

// 6. Crie uma função que receba um número e imprima todos os números de 0 até ele.
function imprimir_numero(n1) {
    for (let i = -1; i < n1; i++) {
        console.log(i + 1);


    }

}

// 8. Crie uma função que receba um número e diga se é positivo, negativo ou zero.
function numero_pnz(n) {
    if (n > 0) {
        return 'Positivo'
    } else if (n < 0) {
        return 'Negativo'
    } else if (n == 0) {
        return 'Zero'
    }
}
// 9. Crie uma função que simule uma calculadora. A função deve receber 2 números e uma operação (+, -, *, /) e usar switch para calcular.
function somar(n1, n2) {
    let cal = n1 + n2
    return cal
}
function subtrair(n1, n2) {
    let cal = n1 - n2
    return cal
}
function dividir(n1, n2) {
    let cal = n1 / n2
    return cal
}
function multiplicar(n1, n2) {
    let cal = n1 * n2
    return cal
}
// =============================================================================
// 1. Crie uma função chamada cumprimentar que exibe "Olá, mundo!" no console.
function ola() {
    console.log('Olá mundo!');
    
}

// 2. Crie uma função chamada mostrarNome que receba um nome como parâmetro e exiba "Olá, [nome]" no console.
// (Exemplo: se passar "Maria", deve aparecer "Olá, Maria")
function ola_personalizado(nome) {
    console.log(`Olá, ${nome}`);
    
}

// 3. Crie uma função chamada somar que receba dois números como parâmetros e retorne a soma deles.
function somar(n1, n2) {
    return n1 + n2
}

// 4. Crie uma função chamada multiplicarPorDois que receba um número como parâmetro e retorne esse número multiplicado por 2.
function multiplicarPorDois(n1, n2) {
    return n1 * n2
}

// 5. Crie uma função mostrarMensagem que NÃO recebe parâmetros e NÃO retorna nada, apenas imprime no console: "Funções são legais!"
function mostrarMensagem() {
    alert('Funções são legais!!!')
}

// 6. Crie uma função chamada verificarPar que recebe um número e retorna true se o número for par, ou false se for ímpar.
function verificarPar(n) {
    if (n % 2 === 0) {
        console.log(true);
        
    } else {
        console.log(false);
        
    }
}

// 7. Crie uma função chamada converterParaMaiusculo que receba uma palavra e retorne a palavra toda em letras maiúsculas.
function converterParaMaiusculo(mini) {
    let minusculo = mini
    let maiusculo = minusculo.toUpperCase()
    console.log(maiusculo);
    
}

// 8. Crie uma função calcularAreaRetangulo que receba dois parâmetros (base e altura) e retorne a área do retângulo.
// (Fórmula: área = base × altura)
function calcularAreaRetangulo(base,altura) {
let area = base * altura
console.log(area);

}




// ========================================================================
// 2. Crie uma função classificarNota que receba uma nota de 0 a 10 e use switch para retornar: "Excelente" (9–10), "Bom" (7–8), "Regular" (5–6), ou "Reprovado" (0–4).

// 3. Crie uma função listarNumerosPares que receba um número n e imprima todos os números pares de 0 até n.
// Use for.

// 4. Crie uma função contarDezAZero que imprima no console os números de 10 até 0, usando while.


// 6. Crie uma função tabuada que receba um número e imprima a tabuada dele de 1 a 10 usando for.

// 9. Crie uma função mediaNotas que receba 5 notas (uma lista ou chamadas separadas) e calcule a média. Depois, com if/else, diga se a pessoa foi "Aprovada" (média ≥ 7) ou "Reprovada".


// Use switch para executar a operação matemática entre dois números.

