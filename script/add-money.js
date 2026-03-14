document.getElementById('add-money-btn').addEventListener('click' , function(){



const addMoneyBank = getValueInput("add-money-bank") ;

if(addMoneyBank =="Select A Bank"){
     
    alert('Please Select A Bannk') ;

    return;
}

const accountNumber = getValueInput('add-money-number') ;

if(accountNumber.length !=11){
     
    alert('Invalid Account Number') ;

    return;
}


const amount  =getValueInput('add-money-amount');

const currentBalance = getBalance() ;

const newBalance = currentBalance+Number(amount) ;


const pinNumber = getValueInput('add-money-pin') ;


if(pinNumber =="1234"){

    alert(`Add Money Success From ${addMoneyBank} 
    
at ${new Date()}`);

    setBalance(newBalance) ;
}else{
    alert("Invalid Pin");

    return;
}






});