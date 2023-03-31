/*
1. Creiamo un array vuoto per memorizzare i numeri casuali
2. Generiamo 5 numeri casuali diversi e li inseriamo nell'array
3. Visualizziamo i numeri in pagina per 5 secondi prima che scompaiano 
4. Chiediamo all'utente di inserire i numeri che ha visto
5. Controlliamo quanti e quali dei numeri casuali sono stati indovinati dall'utente
6. Stampiamo il risultato finale in pagina
*/

// Creiamo un array vuoto per memorizzare i numeri casuali
let randomNumbers = [];
const output = document.querySelector("h1")

console.log('array vuoto', randomNumbers)

// Generiamo 5 numeri casuali diversi e li inseriamo nell'array
while (randomNumbers.length < 5) {
  let randomNumber = Math.floor(Math.random() * 10);

  console.log('numeri generati casualmente ->', randomNumber)

  if (!randomNumbers.includes(randomNumber)) {
    randomNumbers.push(randomNumber);

    console.log('array con numeri', randomNumbers)

    output.innerHTML = `Memorizza i numeri in 5 secondi: ${randomNumbers}
    `

    
  }
}

// Visualizziamo i numeri in pagina per 5 secondi prima che scompaiano 
setTimeout(function() {


  // Chiediamo all'utente di inserire i numeri che ha visto
  let userInput = [];
  for (let i = 0; i < 5; i++) {
    let inputNumber = prompt("Inserisci un numero da 0 a 9");
    userInput.push(parseInt(inputNumber));

    console.log('Numeri inseriti dall\'utente',userInput)
  }

  // Controlliamo quanti e quali dei numeri casuali sono stati indovinati dall'utente
  let correctNumbers = [];
  for (let i = 0; i < randomNumbers.length; i++) {
    if (userInput.includes(randomNumbers[i])) {
      correctNumbers.push(randomNumbers[i]);
    }
  }

  // Stampiamo il risultato finale in pagina
  output.innerHTML = `Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers}.`;  
  
}, 5000);