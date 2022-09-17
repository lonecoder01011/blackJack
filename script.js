let userCard = document.querySelector('#user-card');
let total = document.querySelector('#total');
let result = document.querySelector('#result');
let newGameButton = document.querySelector('#new-game');
let drawCard = document.querySelector('#draw-card');

newGameButton.addEventListener('click', renderGame);


function renderGame(){
    let firstCard = Math.floor(Math.random() * 13) + 1;
    let secondCard = Math.floor(Math.random() * 13) + 1;
    const cardList = [firstCard, secondCard];
    let cardTotal;
    drawCard.addEventListener('click', drawOneCard)
    startGame()

    function startGame() {
    cardTotal = cardList.reduce((a, b) => a + b);
    userCard.innerText = 'Your card: '
    for(let i = 0; i < cardList.length; i++) {
        userCard.innerText += " " + cardList[i]
    }
    total.innerText = `Total: ${cardTotal}`;
    getResult()
    }

    function getResult() {
        if(cardTotal === 21){
            result.innerText = "You hit the Jackpot!"
            drawCard.removeEventListener('click', drawOneCard);
        } else if(cardTotal < 21){
            result.innerText = "Draw Again :(";
            if(cardList.length === 3){
                result.innerText = "Try Again!";
                drawCard.removeEventListener('click', drawOneCard);
            }
        }else{
            result.innerText = "Too bad!, You Lose! \nPlay Again!";
            drawCard.removeEventListener('click', drawOneCard);
        }
    }
    function drawOneCard(){
        let thirdCard = Math.floor(Math.random() *13) + 1
        cardList.push(thirdCard)
        startGame() 
    }
}