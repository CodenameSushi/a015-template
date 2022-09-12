// let userInput 
// let soma = 0;
// while (userInput !== 0) {

//     userInput = Number(prompt('Digite outro numero'));
//     soma = soma + userInput
//     console.log(userInput)
//     console.log(soma);

// }

// const userInput = Number(prompt('Digite um numero!'))
// for(let x = 0; x <= userInput; x++ ){
// console.log(x)
// }


// const numeros = [1, 2, 3, 4, 5, 6, 7]

// for(let i = 0; i <= numeros.length-1; i++){

//     console.log(`o numero do indice ${i} e ${numeros[i]}`)
    
// }

let user = prompt('Insira seu usuario: A / B / C.').toLowerCase()



while (user !== "a" ){
   alert('ACESSO NEGADO')
   user = prompt('Digite Novamente Seu Usuario!').toLowerCase()
}alert("BOAS VINDAS")
