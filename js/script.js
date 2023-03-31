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

console.log('array vuoto', randomNumbers)

// Generiamo 5 numeri casuali diversi e li inseriamo nell'array
while (randomNumbers.length < 5) {
  let randomNumber = Math.floor(Math.random() * 10);

  console.log('numeri generati casualmente ->', randomNumber)

  if (!randomNumbers.includes(randomNumber)) {
    randomNumbers.push(randomNumber);

    console.log('array con numeri', randomNumbers)
  }
}