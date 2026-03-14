

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