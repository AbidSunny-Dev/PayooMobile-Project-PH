document.getElementById('cashout-btn').addEventListener('click' , function(){


   const cashoutNumber = getValueInput('cashout-number');
   
   if(cashoutNumber.length != 11){
    alert('Invalid Agent Number');

    return ;
   }


   const cashoutAmount = getValueInput("cashout-amount");

   

  

   const totalBalance = getBalance(); 

   const newBalance =totalBalance - Number(cashoutAmount);


   if(newBalance<0){
    alert('Invalid Amount');

    return;
   }

   const cashoutPinInput = document.getElementById('cashout-pin');

   const cashoutPin =cashoutPinInput.value ;

   if(cashoutPin == '1234'){
    alert('Cashout Successful');

   setBalance(newBalance);

   }else{


    alert('Invalid Pin');

    return;
   }











});