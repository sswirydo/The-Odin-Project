/* eslint-disable react/prop-types */

// import { useState } from 'react'
import './App.css'


/* * * * * * * * * * * * * *
          TODO LIST
 - create deck object
 - deck shuffle
 - separate picked and deck
 - not picked reshuffled into deck

 * * * * * * * * * * * * * */

 
const cards = [
  {name: 'Aeon', id: 200},
  {name: 'Chariot', id: 7},
  {name: 'Death', id: 13},
  {name: 'Devil', id: 15},
  {name: 'Emperor', id: 4},
  {name: 'Empress', id: 3},
  {name: 'Fool', id: 0},
  {name: 'Fortune', id: 10},
  {name: 'Hanged', id: 12},
  {name: 'Hermit', id: 9},
  {name: 'Hierophant', id: 5},
  {name: 'Hunger', id: 111},
  {name: 'Jester', id: 100},
  {name: 'Judgement', id: 20},
  {name: 'Justice', id: 8},
  {name: 'Lovers', id: 6},
  {name: 'Magician', id: 1},
  {name: 'Moon', id: 18},
  {name: 'Priestess', id: 2},
  {name: 'Star', id: 17},
  {name: 'Strength', id: 11},
  {name: 'Sun', id: 19},
  {name: 'Temperance', id: 14},
  {name: 'Tower', id: 16},
  {name: 'World', id: 21}
]


class CardDeck {
  constructor(cards) {
    this.cards = cards;
  }

  shuffle() {
    // https://stackoverflow.com/a/12646864
    for (let i = this.cards.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  pop() {
    return this.cards.pop();
  }

  insert(cardObj) {
    this.cards.push(cardObj);
  }

  size() {
    return this.cards.length;
  }

}


function Card({ cardName }) {

  const cardPath = 'tarot/'
  const cardExt = '.webp'

  // let reveal = false; // reveal ? card : back
  // let played = false; // display on board
  // let picked = false; // choosen by the player

  return (
    <div className='card'>
      <img src={`${cardPath}${cardName}${cardExt}`}/>
      <h1>{`${cardName}`}</h1>
    </div>
  );
}


function App() {

  let victory = 0;
  let defeat = 0;
  let score = 0;
  let difficulty = cards.length;// - cards.length;
  let handSize = 6;

  const pickedCards = [];


  const tempCards = []
  for (let i = 0; i < difficulty; i++) {
    tempCards.push(<Card key={cards[i].id} cardName={cards[i].name}/>)
  }

  let deck = new CardDeck(tempCards);
  deck.shuffle();
  const playedCards = [];
  
  // todo: care about re-renders etc.
  for (let i = 0; i < handSize; i++) {
    playedCards.push(deck.pop());
  }

  if (pickedCards.length == difficulty) {
    return (
      <div>GG! YOU WIN!</div>
    )
  }

  return (
    <div className='main'>
      
      <header>
        <div className="score">
          SCORE: {score}/{difficulty}
        </div>
        <div className="stats">
          WIN: {victory} - DEFEAT: {defeat}
        </div>
        <div className="difficulty">
          DIFFICULTY: {handSize}/{difficulty}
        </div>
        <div>
          DECK SIZE: {deck.size()}
        </div>
      </header>

      <div className='card-ct'>
        {playedCards}
      </div>

      <footer>
        <button>A</button>
        <button>B</button>
        <button>C</button>
      </footer>
    </div>
  );
}

export default App
