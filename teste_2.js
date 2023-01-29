var input1 ="gaitober";
var input2 ="gato";

var letra = 0;

console.log(input1.length)

while (letra < input1.length) {

    var vogais = ["a", "e", "i", "o", "u"];
    var conversao = ["ai", "enter", "imes", "ober", "ufat"];

    if (vogais.length != 0) {

        for (var item = 0; item < vogais.length; item++) {

            if (input1[letra] == vogais[item]) {
                
                console.log(conversao[item]);
                break;
            
            }
        }
            
        if (input1[letra] != vogais[item]){

            console.log(input1[letra]);
        
        }
       
    }

    letra ++
    
}

