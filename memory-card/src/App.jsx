/* eslint-disable react/prop-types */

import Card from './Card.jsx'

import { useState } from 'react'
import { useEffect } from 'react'

import './App.css'


/* * * * * * * * * * * * * *
          TODO LIST
- empty

 * * * * * * * * * * * * * */

const CARDS = [
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
  pop() { return this.cards.pop(); }
  insert(cardObj) { this.cards.push(cardObj); }
  size() { return this.cards.length; }
  shuffle() {
    for (let i = this.cards.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    } // https://stackoverflow.com/a/12646864
  }
}

let deck = null;
let shouldInit = true;
let pickedCards = [];

function App() {  

  console.log("--- RE-RENDER ---");

  // currently displayed on board
  let [playedCards, setPlayedCards] = useState([]);

  let [victory, setVictory] = useState(0);
  let [defeat, setDefeat] = useState(0);
  let [score, setScore] = useState(0);
  let [difficulty, setDifficulty] = useState(8);

  function playCards() {
    console.log("Playing cards..");
    if (playedCards.length > 0) {
      console.log("board is not empty! Skipping");
      return
    }
    deck.shuffle();
    let temp = [];
    for (let i = 0; i < difficulty; i++) {
      temp.push(deck.pop());
    }
    setPlayedCards(temp);
  }

  function insertBack() {
    console.log("InsertBack()");
    playedCards.forEach(card => {
      deck.insert(card)
    }); 
    setPlayedCards([]);
  }

  function pickCard(cardObj) {
    console.log("pickCard(): " + cardObj.name);
    let idx = pickedCards.indexOf(cardObj);
    if (idx < 0) {
      pickedCards.push(cardObj);
      setScore(score + 1);
    } 
    else {
      alert("You lose!");
      setScore(0);
      setDefeat(defeat + 1);
      pickedCards = [];
    }
    insertBack();
    playCards();
  }

  console.log(shouldInit);
  if (shouldInit) {
    shouldInit = false;
    let tempCardElems = [];
    for (let i = 0; i < difficulty; i++) {
      tempCardElems.push(CARDS[i]);
    }
    deck = new CardDeck(tempCardElems);
    playCards();
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
          DIFFICULTY: {difficulty}
        </div>
        <div>
          DECK SIZE: {deck.size()}
        </div>
      </header>

      <div className='card-ct'>
        {playedCards.map((card) => {
          return (
            <Card key={card.id}
              id={card.id} 
              name={card.name}
              path={`tarot/${card.name}.webp`}
              click={() => {
                console.log("Picking card:"); console.log(card);
                pickCard(card);
              }}
            /> 
          )
        })}
      </div>

      <footer>
        <button onClick={() => {playCards()}}>
          New Game
        </button>
      </footer>
    </div>
  );
}

export default App
