/* eslint-disable react/prop-types */

import Card from './Card.jsx'

import { useState } from 'react'

import './App.css'


/* * * * * * * * * * * * * *
          TODO LIST
 - create deck object
 - deck shuffle
 - separate picked and deck
 - not picked reshuffled into deck

 * * * * * * * * * * * * * */

function App() {  

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

  class GameLogic {

    constructor() {
      console.log("GameLogic: building game..")
      this.playedCards = [];
      this.pickedCards = [];
      this.deck = null;
      this.victory = 0;
      this.defeat = 0;
      this.score = 0;
      this.difficulty = CARDS.length;
      this.handSize = 6;

      this.tempCardElems = [];
      for (let i = 0; i < this.difficulty; i++) {
        this.tempCardElems.push(CARDS[i]);
      }

      this.deck = new CardDeck(this.tempCardElems);
      this.deck.shuffle();  
      
      this.playCards();
    }

    playCards() {
      console.log("Playing cards..");
      if (this.playedCards.length > 0) {
        console.log("board is not empty! Skipping");
        return
      }
      for (let i = 0; i < this.handSize; i++) {
        this.playedCards.push(this.deck.pop());
      }
    }

    getPlayedCards() {
      return this.playedCards;
    }
    
    getPickedCards() {
      return this.pickedCards;
    }

    insertBack() {
      this.playedCards.forEach(card => {
        this.deck.insert(card)
      }); 
      this.playedCards = [];
    }

    // todo picked card may be in pickedCards (lose condition)
    pickCard(cardObj) {
      let pickedCard = null;
      const idx = this.playedCards.indexOf(cardObj);
      if (idx >= 0) {
        pickedCard = this.playedCards.splice(idx, 1);
      }
      if (pickedCard == null) {
        console.error(`GameLogic.pickedCard: ${idx} ${pickedCard}`);
      }
      else {
        this.pickedCards.push(pickedCard);
      }
    }

  }



  const renderCards = (cardList) => {

    if (cardList.length == 0) {
      return <div>Waiting for cards...</div>
    } else {
      return cardList.map((card) => {
        return (
          <Card key={card.id}
            id={card.id} 
            name={card.name}
            path={`tarot/${card.name}.webp`}
            click={(e) => {
              // todo
              console.log("ok");
              console.log(e.target);
              console.log(gamelogic);
              
            }}
          /> 
        )
      })
    }
  }

  const [gamelogic, setGamelogic] = useState(new GameLogic());

  return (
    <div className='main'>
      
      <header>
        <div className="score">
          SCORE: {gamelogic.score}/{gamelogic.difficulty}
        </div>
        <div className="stats">
          WIN: {gamelogic.victory} - DEFEAT: {gamelogic.defeat}
        </div>
        <div className="difficulty">
          DIFFICULTY: {gamelogic.handSize}/{gamelogic.difficulty}
        </div>
        <div>
          DECK SIZE: {gamelogic.deck.size()}
        </div>
      </header>

      <div className='card-ct'>
        {
          renderCards(gamelogic.getPlayedCards())
        }
      </div>

      <footer>
        <button onClick={() => {setGamelogic(new GameLogic())}}>
          New Game
        </button>
      </footer>
    </div>
  );
}

export default App
