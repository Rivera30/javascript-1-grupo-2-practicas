let opcion = prompt("Digite porfavor cual ejercicio quiere ejecutar 1 - 2 - 3 - 4");
switch (opcion) {

    case "1":
        //Cree un programa que reciba como parámetro un array de números, y
        //verifique la lista de manera que retorne el número mayor.
        
        var array1 = [60, 70, 40, 10, 20, 35];
        let mayor = 0;

        for (i = 0; i < array1.length; i++) {
            if (array1[i] > mayor) {
                mayor = array1[i];
            }
        }

        console.log(mayor);
        
        break
    
    case "2":

        //Cree un programa que reciba como parámetro una palabra y verifique si
        //dicha palabra es palíndromo, es decir, la palabra se lee igual de izquierda a
        //derecha o de derecha a izquierda, o no.Para la resolución de dicho problema
        //debe utilizar ciclo for

        let a = prompt("digite una palabra")
        let array2 = [];
        function palin(a) {
            for (let i = a.length - 1; i >= 0; i--) {
                array2.push(a[i]);
            }
            const p = array2.join("");
            if (p == a) {
                return "La palabra si es palindromo";
            } else {
                return "La palabra no es palindromo";
            }
        }
        console.log(palin(a));

        break
    
    case "3":

        //Dada la siguiente matriz[[1, 0, 0], [0, 1, 1], [0, 1, 0]], haga un programa que
        //cuente e imprima la cantidad de ceros totales en dicha matriz.Debe utilizar
        //ciclos

        function suma() {
            const array3 = [
                [1, 0, 0],
                [0, 1, 1],
                [0, 1, 0],];
            let contador = 0;
            for (let i = 0; i < array3.length; i++) {
                for (let j = 0; j < array3[i].length; j++) {
                    if (array3[i][j] == 0) {
                        contador = contador + 1
                    }
                }
            }
            return 'Los ceros en total son: ' + contador
        }

        console.log(suma());
            
        break
    
    case "4":

        //Cree un programa que reciba un array de números, verifique cuáles números
        //están repetidos y retorne un array con dichos números(los que estan
        //duplicados), si no hay números repetidos en el array debe retornar el
        //siguiente mensaje: “No se encontraron números repetidos en la lista de
        //números recibida”.Debe usar un ciclo for.
        
        let numeros = prompt("letras")
        numeros = numeros.split(",");
        function Num(numeros) {
            let array4 = [];
            for (let i = 0; i < numeros.length; i++) {
                if (numeros[i + 1] === numeros[i]) {
                    array4.push(numeros[i]);
                }
            }
            if (array4.length >= 1) {
                return array4;
            }
            else {
                return 'no hay numeros repetidos'
            }
        }
        console.log(Num(numeros));
            
        break
}





