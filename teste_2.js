var codigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
var vogais = ["a", "e", "i", "o", "u"];
var conversao = ["ai", "enter", "imes", "ober", "ufat"];
var input1 ="gato";
var input2 ="gaitober";

var posicaoLetra = 3;

console.log(input1[posicaoLetra])
console.log(vogais.indexOf(input1[posicaoLetra]))

if (vogais.indexOf(input1[posicaoLetra]) >= 0) {
    console.log(conversao[vogais.indexOf(input1[posicaoLetra])])
} else {
    console.log(input1[posicaoLetra])
}

//console.log(codigo[0][1])

/*while (posicaoLetra < input1.length) {

    
    //var codigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    var item = 0

    if (codigo.length != 0) {

        for (item; item < codigo.length; item++) {

            
            
            if (codigo.indexOf(input1[posicaoLetra]) == true) {
                
                console.log(codigo[item][1]);
                //break;
            
            } 
            
            if (input1[posicaoLetra] != codigo[item][0]) {
                
                console.log(input1[posicaoLetra]);
        
            
            }

            if (input1[posicaoLetra] != " ") {

                console.log(" ");
                break
            }

        }
        //console.log(codigo[item][item]);   
        
       
    }

    posicaoLetra ++
    
}*/

