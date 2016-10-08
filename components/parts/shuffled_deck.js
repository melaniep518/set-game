import React from 'react';
import {cards} from "./card_deck.js";

function shuffle(cards) {
  let cardsCopy = cards.slice();
  let shuffled = [];
  for(let i = cardsCopy.length; i > 0; i--) {
    let randomInd = Math.floor(Math.random()*cardsCopy.length);
    let randomCard = cardsCopy[randomInd];
    shuffled.push(randomCard);
    cardsCopy.splice(randomInd, 1);
  }
  return shuffled;
}
  

export {shuffle}