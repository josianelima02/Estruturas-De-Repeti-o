//DO WHILE
/** O DO.WHILE sempre irá EXECUTAR ANTES DE VERIFICAR A CONDIÇÃO */

let contador = 1; // variavel 

do {
    console.log('Dentro do DO.while :', contador);
    contador = contador + 1; //incremento 
} while (contador < 8)// condição 

console.log("Fora do DO.while :", contador); 
console.log('');


//while
/** While verifica a condição antes de executar */
let contadorr = 1; // Variavel

while (contadorr < 10){
    console.log('Dentro do While :', contadorr);
    contadorr = contadorr + 1;
}
console.log('Fora do while :', contadorr);
console.log('');


//for 
// O for terá (variavel;condição; incremento) em um só linha//

for (let contador = 0; contador <= 5; contador++){
    console.log('Dentro do for :', contador);
}

console.log('fora do for :', contador);
console.log('')


/// Exercitando

//While
let nomes = ['Josiane', 'Julia', 'Katia', 'Robson', 'Ricardo'];
let i = 0;

while(i < 5) {
    console.log('Nomes :', nomes[i] + 'Lima');
    i = i + 1;
}
console.log('');


// Do while
let alunos = ['Josiane', 'Julia', 'Katia', 'Robson', 'Ricardo'];
let ii = 0;

do{
    console.log('Nome do aluno(a) :', alunos[ii] + ' Lima')
    ii = ii + 1;
} while(ii < 5);

console.log('')


// for 
let user = ['Josiane', 'Julia', 'Katia', 'Robson', 'Ricardo']; 
for(let a = 0; a < 5; a = a + 1){
    console.log('Nome do usuario : ', user[a] + ' Lima')
}

console.log('')

/// TABUADA 

//WHILE 

let b = 0;

while(b <= 10){
    console.log('TABUADA :', tabuada);
    console.log('Tabuada : ', tabuada[b])

}


//for 

for (let k = 0; k <= 10; k++) {
    console.log(k + " x " + 2 + " = " + k * 2);
}

let tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];