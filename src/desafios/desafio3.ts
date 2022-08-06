// Desafio 3

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

if (campoSaldo){
    campoSaldo.innerHTML = '0'
}

function somarAoSaldo(soma : number) {
    if (campoSaldo){
        campoSaldo.innerHTML = String(Number(campoSaldo?.innerHTML) + soma);
    }
}

function limparSaldo() {
    if (campoSaldo){
        campoSaldo.innerHTML = '0';
    }
}

if (botaoAtualizar){
    botaoAtualizar.addEventListener('click', function () {
        if (soma){
            somarAoSaldo(Number(soma.value));
        }
    });
}

if (botaoLimpar){
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}   