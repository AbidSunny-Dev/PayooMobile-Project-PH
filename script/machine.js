

function getValueInput(id){
    
    const input = document.getElementById(id);
    const value = input.value;

    return value;
}

// get balance


function getBalance(){

    const currentBalanceElement = document.getElementById('balance');

    const balance = currentBalanceElement.innerText ;

    return Number(balance);
}

//set balance


function setBalance(value){

        const currentBalanceElement = document.getElementById('balance');

        currentBalanceElement.innerText=value ;



}


//show only function


function showOnly(id){


const addMoney = document.getElementById('add-money');



const cashout = document.getElementById('cashout') ;

const transferMoney = document.getElementById('transfer-money');
const getBonus = document.getElementById('get-bonus');


addMoney.classList.add("hidden")
cashout.classList.add("hidden");
transferMoney.classList.add("hidden");
getBonus.classList.add("hidden");


const selected = document.getElementById(id) ;

selected.classList.remove('hidden');



}