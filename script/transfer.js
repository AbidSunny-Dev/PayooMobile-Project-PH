

document.getElementById("transfer-btn").addEventListener("click",function(){


 const transferAccount = getValueInput("transfer-money-number");

if(transferAccount.length !=11){

    alert('Invalid Account Number');

    return ;
}

const transferAmount = getValueInput("Transer-money-amount");


const currentBalance = getBalance();

const newBalance = currentBalance - Number(transferAmount);

const transferPin = getValueInput('transfer-money-pin');

if(transferPin == '1234'){

    alert(`Transfer Successful to ${transferAccount}
 at ${ new Date() }`);

    setBalance(newBalance);
}else{
    alert("Invalid Pin");

    return;
}

















})