// função sem parâmetros e sem retorno
function mandar_mensagem() {
    alert('Essa é a mensagem')
}

// // função com parâmetros sem retorno
function mandar_mensagem_personalizada(nome,idade) {
    alert(`Seja bem-vindo ${nome}, sua iade é ${idade}`)
}

// função com parâmetros e retorno
function somar_numeros(n1,n2) {
    let soma = n1 + n2
    return soma    
}
// // 35
// alert(somar_numeros(15,20))

// 2. Crie uma função que receba um número e retorne se ele é par ou imprar

// Crie uma função que verifica a faixa etaria do user
function verificar_faixa_etaria(idade) {
    if (idade > 0 && idade <=12) {
        return 'Criança'
    } else if (idade > 12 && idade <=17) {
        return 'Adolescente'
    } else if (idade > 17 && idade <= 59) {
        return 'adulto'
    } else if (idade > 59) {
        return 'Velho'
    }
}

function depositar_valor(deprosito, saldo) {
    saldo += deprosito
    return saldo
}

function sacar_valor(saque, saldo) {
    if (saldo >= saque) {
        saldo -= saque
        alert('Saque realizado com sucesso')
        return saldo
    } else {
        alert('Saldo insuficiente')
        return saldo
    }
}

function mostrar_saldo(saldo) {
    alert(`Seu saldo é ${saldo}`)
}



