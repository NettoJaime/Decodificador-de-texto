var codigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

var input1 ="gato";
var input2 ="gaitober";

var letra = 0;

//console.log(input1.length)

//console.log(codigo[0][1])

while (letra < input1.length) {

    var codigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    if (codigo.length != 0) {

        for (var item = 0; item < codigo.length; item++) {
            
            if (input1[letra] == codigo[item][0]) {
                
                console.log(codigo[item][1]);
                break;
            
            }
        }
            
        if (input1[letra] != codigo[item][0]) {

            console.log(input1[letra]);
        
        }
       
    }

    letra ++
    
}

