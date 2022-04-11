import React, { useState } from "react";

function Game() {
 const [tie, setTie] = useState(0);
 const [score, setScore] = useState(0);


  const diceBox = (userPick) => {
    const dice = ["rock", "paper", "scissors", "lizard", "spoke"];
    const cpuPick = dice[Math.floor(Math.random() * dice.length)];
    const rules = {
      rock: {
        lizard: "Rock crushes lizard",
        scissors: "Rock crushes scissors",
      },
      paper: {
        rock: "Paper covers rock",
        spoke: "Paper disproves Spock",
      },
      scissors: {
        paper: "Scissors cuts paper",
        lizard: "Scissors beheads lizard",
      },
      lizard: {
        spoke: "Lizard poisons Spock",
        paper: "Lizard eats paper",
      },
      spoke: {
        scissors: "Spock smashes scissors",
        rock: "Spock vaporizes rock",
      },
    };
    if (userPick === cpuPick){
     setTie(() => tie +1);
    }else if (cpuPick in rules[userPick] === true){
     setScore(()=> score + 1)
    }else{
     if (score === 0){
      setScore(0)
     }else{
      setScore(() => score - 1);
     }
    }
    // console.log(rules[userPick][cpuPick]);
    // console.log(cpuPick);
  };
  return (
    <div>
      <button onClick={() => diceBox("rock")}>Rock</button>
      <button onClick={() => diceBox("paper")}>Paper</button>
      <button onClick={() => diceBox("scissors")}>Scissors</button>
      <button onClick={() => diceBox("lizard")}>Lizard</button>
      <button onClick={() => diceBox("spoke")}>Spoke</button>
      <p>Result : </p>
      <p>Tie : {tie} </p>
      <p>Score : {score} </p>
    </div>
  );
}

export default Game;
