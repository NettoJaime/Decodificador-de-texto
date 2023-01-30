var entrada = "gato de botas";

var posicao = 0;

function encriptar(entrada) {

    var vogais = ["e", "i", "a", "o", "u"];
    var conversao = ["enter", "imes", "ai", "ober", "ufat"];

    for (posicao; posicao < vogais.length; posicao++) {

        if (entrada.includes(vogais[posicao])) {

            entrada = entrada.replaceAll(vogais[posicao], conversao[posicao]);
        
        }  

    }

    return entrada;

}

console.log(encriptar(entrada));
