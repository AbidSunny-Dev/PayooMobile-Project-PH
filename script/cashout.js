document.getElementById('cashout-btn').addEventListener('click' , function(){

   const cashoutNumberInput = document.getElementById('cashout-number');

   const cashoutNumber = cashoutNumberInput.value ;
   
   if(cashoutNumber.length != 11){
    alert('Invalid Agent Number');

    return ;
   }

   const cashoutAmountInput = document.getElementById("cashout-amount") ;

   const cashoutAmount = cashoutAmountInput.value ;

   

   const totalBalanceOnAccount = document.getElementById('balance');

   const totalBalance = totalBalanceOnAccount.innerText;

   const newBalance = Number(totalBalance) - Number(cashoutAmount);


   if(newBalance<0){
    alert('Invalid Amount');

    return;
   }

   const cashoutPinInput = document.getElementById('cashout-pin');

   const cashoutPin =cashoutPinInput.value ;

   if(cashoutPin == '1234'){
    alert('Cashout Successful');

    totalBalanceOnAccount.innerText = newBalance ;
   }else{


    alert('Invalid Pin');

    return;
   }











});