/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game


/*
 -do something of final value
 when roll dice is called - 
 i) ek element show karu dark round a final  score which is hidden initially
 ii) as soon as roll dice is called  - it is check if it has any number on it.
    store that in that hidden element.
iii) as hide our final scoreinput element and show the round wala final score lemeent
 
//write function for taking final value 
//and call that from init only.
//document.querySelector('#final-value').classList.add('nodisp');
document.querySelector('#show-value').classList.add('disp');
var x = document.querySelector('#show-value').textContent;
console.log(x);



YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. 
The player looses his current score when one of them is a 1. 
(Hint: you will need CSS to position the second dice, 
    so take a look at the CSS code for the first one.)
*/
var scores, activePlayer,roundScore,gamePlaying;

init();
var lastdice;
//document.querySelector('#current-'+ activePlayer).textContent = dice;
//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector('#score-0').textContent;
console.log(x);

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('#dice-0').style.display = 'block';
document.querySelector('#dice-1').style.display = 'block';

function btn(){
    console.log('in Btn');
}

//document.querySelector('.btn-roll').addEventListener('click',btn);
document.querySelector('.btn-roll').addEventListener('click',function(){
//    console.log('Anonymous Function type; no name to this function; one time function');


    if(gamePlaying)
    {

        // 1. Random number;
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // 2. display result;
        document.querySelector('#dice-0').style.display = 'block';
        document.querySelector('#dice-1').style.display = 'block';
        document.querySelector('#dice-0').src ='dice-'+dice1+'.png'; 
        document.querySelector('#dice-1').src ='dice-'+dice2+'.png'; 

        if(dice1 !== 1 && dice2 !== 1)
        {//add score
            roundScore+= dice1 + dice2 ;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        }
        else {
            nextPlayer();
        }
        //3. update the round score if the rolled number was not 1
       /* if(lastdice === 6 && dice === 6)
        {
            scores[activePlayer] = 0;
            document.querySelector('#score-'+activePlayer).textContent = 0;
            nextPlayer();
        }
        else if(dice !== 1)
        {//add score
            roundScore+= dice;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        }
        else {
            nextPlayer();
        }
         lastdice = dice; */

      }

});

document.querySelector('.btn-hold').addEventListener('click',function(){
// Add current score to global score
    if(gamePlaying)
    {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
        // update the UI

       var input =  document.querySelector('.winning-value').value
        console.log("input: "+input);
        document.querySelector('#show-value').textContent = input;

        var winningScore;
        if(input)
        {
            winningScore = input;
        }
        else{
            winningScore = 100;
        }

        // checks if player wons
        if(scores[activePlayer] >= winningScore )
        {
            console.log('winner');
            document.querySelector('#dice-0').style.display = 'none';
            document.querySelector('#dice-1').style.display = 'none';

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
    document.querySelector('#dice-0').style.display = 'none';
    document.querySelector('#dice-1').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click',init)
function init()
{
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;    
    gamePlaying = 1;
    document.querySelector('#show-value').classList.add('nodisp');

    document.querySelector('#dice-0').style.display = 'none';
    document.querySelector('#dice-1').style.display = 'none';
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


