
window.onload = function() {
    limpaErro();
    limpaResposta();
};

function limpaErro() {
    montaErro('');
}
function limpaResposta() {
    document.querySelector('.cardBross .resposta').innerHTML  = '';
}
function montaErro(mensagem) {
    document.querySelector('.cardBross .error').innerHTML  = mensagem;
}
calcularIMC.onclick = function(){
    limpaErro();
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    if(!peso) {
        montaErro('Preencha o peso');
        return
    }
    if(!altura) {
        montaErro('Preencha a altura');
        return
    }
    calculaRetorno(parseInt(peso /(altura * altura)))
};

function calculaRetorno(imc) {
    var mensagem = ''
    if(imc < 18) {
        mensagem = retorno[0];
    } else if (imc < 25) {
        mensagem = retorno[1];
    } else if (imc < 30) {
        mensagem = retorno[2];
    } else if (imc > 30) {
        mensagem = retorno[3];
    }
    
    document.querySelector('.cardBross .resposta').innerHTML  = 'Seu IMC é ' + imc + ' - ' + mensagem;
}

var retorno = [
    'Magreza',
    'Normal',
    'Sobrepeso',
    'Obesidade'
]