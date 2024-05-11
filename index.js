// let player = {
//     name: 'Michael Aladejobi',
//     chips: 100
// }

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''

let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardEl = document.querySelector("#card-el")
let playerEl = document.querySelector('#player-el')

// playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
    let randomNumber = Math.ceil(Math.random() * 13)

    if ( randomNumber > 10 ){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}

function startGame(){
    alert("Hint: Your cards gotta sum up to 51 to hit the Blackjack! \n\n\nYou've got 10 moves. 😎")
    alert('Once you win, kindly send a screenshot of your full screen to "+2348181010186" 🤡 ...\n\n\nGoodluck Champ! 💪🥳')


    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    
    isAlive = true
    return renderGame()
}

function renderGame(){
    
    if (sum <= 50){
        message = 'Do you want to draw a new card?! '
    } else if (sum === 51){
        message = "You've got blackjack! 🤯"
        hasBlackJack = true
    } else {
        message = 'You are out of the game, Try Again! 😭'
        isAlive = false
    }
    
    cardEl.textContent = 'Cards: '
    for (let i  = 0; i < cards.length; i++){
        cardEl.textContent +=  "  " + cards[i]
    }

    messageEl.textContent = message
    sumEl.textContent = 'Sum: ' + sum
     
}

function newCard(){
    if ( isAlive === true && hasBlackJack === false ){
        let newCard = getRandomCard()
        sum += newCard 
        cards.push(newCard)
        renderGame()
    }
    
}
