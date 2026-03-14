document.getElementById('bill-btn').addEventListener("click" ,function(){



const billService = getValueInput("paybill-service");

if(billService=='Select To Pay'){

    alert('Please Select A Service');

    return ;
}


const billerNumber =getValueInput('biller-number') ;

if(billerNumber.length !=11){
    alert('Invalid Acc No');

    return ;
}

const billAmount = getValueInput("bill-amount") ;

const currentBalance = getBalance() ;

const newBalance = currentBalance - Number(billAmount);

const billerPin = getValueInput("biller-pin");

if(billerPin=='1234'){

    alert(`${billService} bill is Successfully Paid`) ;

    setBalance(newBalance);
}else{
    alert('Invalid Pin');
    return;
}















})