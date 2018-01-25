

var scores, activePlayer,roundScore,gamePlaying;

init();
//document.querySelector('#current-'+ activePlayer).textContent = dice;
//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector('#score-0').textContent;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.dice').style.display = 'none';

function btn(){
    console.log('in Btn');
}

//document.querySelector('.btn-roll').addEventListener('click',btn);
document.querySelector('.btn-roll').addEventListener('click',function(){
//    console.log('Anonymous Function type; no name to this function; one time function');




    if(gamePlaying)
    {

        // 1. Random number;
        var dice = Math.floor(Math.random() * 6) + 1;
        var val = dice;

        // 2. display result;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src ='dice-'+dice+'.png'; 

        //3. update the round score if the rolled number was not 1
        if(dice !== 1)
        {//add score
            roundScore+= dice;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        }
        else {
            nextPlayer();
        }
      }

});

document.querySelector('.btn-hold').addEventListener('click',function(){
// Add current score to global score
    if(gamePlaying)
    {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
        // update the UI

        // checks if player wons
        if(scores[activePlayer] >= 50)
        {
            console.log('winner');
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('#name-'+activePlayer).textContent = 'Winner..!!';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;
        
        }else
        {
            nextPlayer();

        }

    }
  
});

function nextPlayer()
{

    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none'; 
}
document.querySelector('.btn-new').addEventListener('click',init)
function init()
{
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;    
    gamePlaying = 1;

    document.querySelector('.dice').style.display = 'none'; 
    document.querySelector('.winning-value').value = 50;
    document.querySelector('.winning-value').readOnly = true;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

}


