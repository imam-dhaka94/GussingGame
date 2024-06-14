const card = document.querySelector(".card");
const form = card.querySelector('form');
const userInput = form.querySelector('#gusssingNumber');
const checkButton = document.querySelector(".check");
const resultMessage = card.querySelector('.result');
const remainingAttempt = card.querySelector('.remaininAttempt');
const finalResult = card.querySelector('.finalResult');
let createEl = document.createElement('p');
createEl.classList.add('large-text');
card.insertBefore(createEl, finalResult);


let totalAttemt = 5;
let attemt = 0;
let winCount = 0;
let lossCount = 0;


form.addEventListener('submit', (event)=>{
    event.preventDefault();
    checkResult(userInput.value);
    attemt++;
    if(attemt==5){
        userInput.disabled = true;
        checkButton.disabled = true; 
        remainingAttempt.innerHTML= `You have 0 chance left`;
        finalMesssage();
    };
    if(attemt<6){
        remainingAttempt.innerHTML= `You have ${totalAttemt-attemt} chance left.`;
        createEl.innerHTML= `Won: ${winCount} & Lost: ${lossCount}.`;
    };
   

    userInput.value= "";
    
    
});





const checkResult = (userInput)=>{
    let getRandom = randomNumber(5);
    if(userInput==getRandom){
        winCount++
        resultMessage.innerHTML = `You have won at this time.`;
    }else{
        lossCount++
        resultMessage.innerHTML = `You have lost and the Random number was ${getRandom}.`;
    }
    
};

const randomNumber = (limit)=>{
    return Math.floor(Math.random()* limit) + 1;
    
};

const finalMesssage = ()=>{
    if(winCount>lossCount){
        finalResult.innerHTML= `Congratulations!!`
    }
    else{
        finalResult.innerHTML= `Sorry! better luck next time.`
    }
};


