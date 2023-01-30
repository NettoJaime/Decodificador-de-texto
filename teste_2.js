var entrada ="gato";
var saida ="gaitober denter bobertais";

var posicao = 0;

function encriptar(entrada) {

    var vogais = ["e", "i", "a", "o", "u"];
    var conversao = ["enter", "imes", "ai", "ober", "ufat"];

    for (posicao; posicao < vogais.length; posicao++) {

        if (entrada.includes(vogais[posicao])) {

            entrada = entrada.replaceAll(vogais[posicao], conversao[posicao])
        
        }  

    }

    return entrada

}

console.log(encriptar(entrada));
//_____________________________________________________________________________

var posicao = 0;

function desencriptar(saida) {

    var vogais = ["e", "i", "a", "o", "u"];
    var conversao = ["enter", "imes", "ai", "ober", "ufat"];

    for (posicao; posicao < conversao.length; posicao++) {

        if (saida.includes(conversao[posicao])) {

            saida = saida.replaceAll(conversao[posicao], vogais[posicao])
        
        }  

    }

    return saida

}

console.log(desencriptar(saida));