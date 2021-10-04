import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';



function App() {
  const [highScore, updateHighScore] = useState(0)

  const listOfSigns = ["*", "/", "+", "-"]
  const randomNumber = Math.floor(Math.random() * 4)
  const randomOper = listOfSigns[randomNumber]
  const operation = randomOper;

  const [currentOperator, useCurrent] = useState(operation)
  const [one, useOne] = useState(Math.floor(Math.random() * 10))
  const [two, useTwo] = useState(Math.floor(Math.random() * 10))
  const [three, useThree] = useState(Math.floor(Math.random() * 10))
  const [four, useFour] = useState(Math.floor(Math.random() * 10))
  const [rounds, countRounds] = useState(0)
  const [score, useScore] = useState(100)



  function returnValue(a, b, c) {

    if (a === "*") {
      return (parseInt(b) * parseInt(c))
    }
    else if (a === "/") {
      return (parseInt(b) / parseInt(c))
    }
    else if (a === "+") {
      return (parseInt(b) + parseInt(c))
    }
    else {
      return (parseInt(b) - parseInt(c))
    }
  }



  function SayHello(name) {


    if (rounds === 10) {
      showEnd()
    }
    if (isFinite(score) === false) {
      showEnd()
    }


    useScore(returnValue(currentOperator, score, document.getElementById(name).innerHTML))


    const randomNumber = Math.floor(Math.random() * 4)
    const randomOper = listOfSigns[randomNumber]
    const operation = randomOper;


    useCurrent(operation)
    useOne(Math.floor(Math.random() * 10))
    useTwo(Math.floor(Math.random() * 10))
    useThree(Math.floor(Math.random() * 10))
    useFour(Math.floor(Math.random() * 10))
    countRounds(rounds + 1)
  }

  function showEnd() {
    document.getElementById("niceStuff").style.display = "none"
    document.getElementById("compScreen").style.display = 'grid'
    document.getElementById("highScoreTracker").style.display = 'none'

  }



  function ResetRounds() {
    if (score === "Infinity") {
      updateHighScore(0)
    }

    else if (score === "NaN") {
      updateHighScore(0)
    }

    else {
      updateHighScore((100 - score.toFixed(1)).toFixed(1))
    }
    countRounds(0)
    useScore(100)
    document.getElementById("niceStuff").style.display = "block"
    document.getElementById("compScreen").style.display = 'none'
    document.getElementById("highScoreTracker").style.display = "flex"
  }

  useEffect(function () {
    console.log("nice")
  }, [])



  return (
    <div className="App">
      <div className="CompleteScreen" id="compScreen">
        <div className="explainEd" id="Explain">Good job you were {Math.abs(100 - Math.abs(score))} points away from 100</div>
        <button onClick={ResetRounds} className="Reset">Reset</button>
      </div>
      <div id="highScoreTracker">
        <span>
          {"\t"}Last Score : {Math.abs(highScore)} {'\n'}
          {"\t"}Round: {rounds}</span>
      </div>
      <div className="gameContainer" id="niceStuff">
        <div className="Score">
          <div id="scoreKeep" className="keepScore">{(parseFloat(score).toFixed(2))}</div>
          <div id="sign" className="sign">{currentOperator}</div>
        </div>
        <div className="cards">
          <button className="Card" id="one" onClick={() => SayHello('one')}>{one}</button>
          <button className="Card" id="two" onClick={() => SayHello('two')}>{two}</button>
          <button className="Card" id="three" onClick={() => SayHello('three')}>{three}</button>
          <button className="Card" id="four" onClick={() => SayHello('four')}>{four}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
