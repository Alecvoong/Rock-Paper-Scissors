let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    tie: 0,
    lose: 0
  };

scoredisplay();

function playgame(myMove) {
  const comMove = computerMove();
  let result = '';

  if (myMove === 'rock')
  {
      if(comMove === 'scissors')
      {
          result = 'You win.';
      }
      else if (comMove === 'rock')
      {
          result = 'Tie.';
      }
      else if (comMove === 'paper')
      {
          result = 'You lose.';
      }
  }
  else if (myMove === 'paper')
  {
      if(comMove === 'scissors')
      {
          result = 'You lose.';
      }
      else if (comMove === 'rock')
      {
          result = 'You win.';
      }
      else if (comMove === 'paper')
      {
          result = 'Tie.';
      }
  }
  else if (myMove === 'scissors')
  {
      if(comMove === 'scissors')
      {
          result = 'Tie.';
      }
      else if (comMove === 'rock')
      {
          result = 'You lose.';
      }
      else if (comMove === 'paper')
      {
          result = 'You win.';
      }
  }

  if (result === 'You win.') {
    score.win++;
  } else if (result === 'Tie.') {
    score.tie++;
  } else if (result === 'You lose.') {
        score.lose++;
  }

  localStorage.setItem('score',JSON.stringify(score));

  document.querySelector('.result').innerHTML = `Result: ${result}`;
  document.querySelector('.outcome').innerHTML = `You pick ${myMove}. The computer picks ${comMove}.`;
  scoredisplay();   
}

function scoredisplay() {
    document.querySelector('.score').innerHTML = `Wins: ${score.win}  Ties: ${score.tie}  Losses: ${score.lose}`;
}
  function computerMove() {
      const number = Math.random();
      let cMove = '';
      if (number < 1/3) 
      {
        cMove = 'rock';
      } else if (number >= 1/3 && number < 2/3)
      {
          cMove = 'paper';
      } else if (number >= 2/3 && number < 1)
      {
          cMove = 'scissors';
      }
      return cMove;
  }