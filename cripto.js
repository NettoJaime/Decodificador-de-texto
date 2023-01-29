var input ="gato";

var letra = 0;


while (letra < input.length) {

    var vogais = ["a", "e", "i", "o", "u"];
    var conversao = ["ai", "enter", "imes", "ober", "ufat"];

    var item = 0

    if (vogais.length != 0) {

        for (item; item < vogais.length; item++) {

            if (input[letra] == vogais[item]) {
                
                document.write(conversao[item]);
                break;
            
            }
        }
            
        if (input[letra] != vogais[item]){
            
            document.write(input[letra])
        
        }
       
    }

    letra ++
    
}