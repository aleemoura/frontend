// NULLISH COALESCING OPERATOR:

//const idade = 0;

//document.body.innerText = 'Sua idade é: ' + (idade ?? ' Não informado.') 
// Se fosse utilizado '||' como exemplo, não retornaria o valor 0;

// OBJETOS:

//const user = {
//    name: 'Alexandre',
//    idade: 30,
//    address: {
//        street: 'Rua teste',
//        number: 999
//    }
//};

//document.body.innerText = ('name' in user) // Procura o 'name' no objeto user;
//document.body.innerText = Object.keys(user) // Traz as chaves primárias do objeto;
//document.body.innerText = Object.values(user) // Traz todos valores do objeto;
//document.body.innerText = JSON.stringify(Object.values(user)) // Traz todos valores do objeto em JSON
//document.body.innerText = JSON.stringify(Object.entries(user)) // Traz todos valores do objeto em JSON mais estruturado

// >> Desestruturação:

//const { address, idade: age, nickname = 'Alex'} = user 
// Trouxe os dados específicos e alterou a idade para age

//document.body.innerText = JSON.stringify({address, age, nickname})

//function mostrarIdade({ idade }) {
//    return idade;
//}

//ocument.body.innerText = mostrarIdade(user)

// >> Rest Operator:

//const { name, ...rest} = user;

//document.body.innerText = JSON.stringify(rest)
// Rest traz todo o resto do objeto menos o 'name' declarado

//const array = [1,2,3,4,5,6,7,8,9,10];

//const [first, second, ...rest] = array;

//document.body.innerText = JSON.stringify({first, second, rest})

// >> Short Syntax:

// const name = 'Alexandre'
// const age = 30;

// const user = {
//     name,
//     age,
// }

// document.body.innerText = JSON.stringify(user)

// >> Optional Chaining:

// const user = {
// //    name: 'Alexandre',
//    age: 30,
//    address: {
//        street: 'Rua teste',
//        number: 999,
//        zip: {
//         code: 14095000,
//         city: 'São Paulo'
//        },
//        showFullAdress (){
//         return "Ok";
//        }
//    }
// };

// //document.body.innerText = user.address?.zip?.code ?? 'Não informado'

// //document.body.innerText = user.address?.showFullAdress?.()

// const key = 'name'

// document.body.innerText = user?. [key] ?? 'Não informado'

// >> Métodos de array:

const array = [1,2,3,4,5];

// for (const i of array){
//     document.body.innerText += i;
// }

// array.forEach(item1 =>{
//     document.body.innerText += item1;
// })

// const novoArray = array.map(item =>{
//     return item * 2;
// })

// document.body.innerText = JSON.stringify(novoArray)

const novoArray = array.map(item =>{
    if (item % 2 == 0){
    return item * 10
}
return item
})

document.body.innerText = JSON.stringify(novoArray)