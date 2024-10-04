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
  {name: 'Hanged Man', id: 12},
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

function Card({ cardName }) {

  const cardPath = 'tarot/'
  const cardExt = '.webp'

  let reveal = false; // reveal ? card : back
  let played = false; // display on board
  let picked = false; // choosen by the player


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
  let difficulty = 6;

  const playedCards = []
  for (let i = 0; i < difficulty; i++) {
    playedCards.push(<Card key={cards[i].id} cardName={cards[i].name}/>)
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
      </header>

      <div className='card-ct'>
        {playedCards}
      </div>
    </div>
  );
}

export default App
