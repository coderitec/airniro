import React from 'react';
import styles from './center.module.css';
import {TbCurrencyNaira} from 'react-icons/tb'; 

export const games = [
  {
    match1: {
      id: 1,
      team1: {
        club: 'Chelsea',
        score: 0,
        status: ['win', 'loss', 'draw'],
        player: 'Adebola James',
        amount: 20000,
        statement: function () {
          return (
            <p>
              <span>{this.player} bets {this.club} to win with</span> <span className='inline'><TbCurrencyNaira className='inline'/><span>{this.amount}</span></span> 
            </p>
          );
        },
      },
      team2: {
        club: 'Liverpool',
        score: 0,
        status: ['win', 'loss', 'draw'],
        player: 'John David',
        amount: 20000,
        statement: function () {
          return (
            <p>
            <span>{this.player} bets {this.club} to win with</span> <span className='inline'><TbCurrencyNaira className='inline'/><span>{this.amount}</span></span> 
          </p>
          );
        },
      },
    },
  },
];


const loadMatch = games.map(game => (
    <section key={Math.random()} className={`${styles.btn}`}>
        <div className='grid grid-cols-[75px_10px_100px_100px_100px_300px] gap-4 items-center'>
            <span>{game.match1.team1.club}</span>
            <span>{game.match1.team1.score}</span>
            <button name={`xx${game.match1.id}`}>{game.match1.team1.status[0]}</button>
            <button name={`xxn${game.match1.id}`}>{game.match1.team1.status[1]}</button>
            <button name={`xxo${game.match1.id}`}>{game.match1.team1.status[2]}</button>
            <p className=''>{game.match1.team1.statement()}</p>
        </div>
        <div className='grid grid-cols-[75px_10px_100px_100px_100px_300px] gap-4 items-center'>
            <span>{game.match1.team2.club}</span>
            <span>{game.match1.team2.score}</span>
            <button name={`xx${game.match1.id}`}>{game.match1.team2.status[0]}</button>
            <button name={`xxn${game.match1.id}`}>{game.match1.team2.status[1]}</button>
            <button name={`xxo${game.match1.id}`}>{game.match1.team2.status[2]}</button>
            <p>{game.match1.team2.statement()}</p>
        </div>
    </section>
)
)


export default function Center() {
  return (
    <div className='m-auto md:w-[60%]'>
      {loadMatch}

      
    </div>
  )
}