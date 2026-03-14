document.getElementById('bonus-btn').addEventListener('click' ,function(){



   const coupon = getValueInput('coupon-number') ;

   const currentBalance = getBalance() ;

   const newBalance = currentBalance+  Number(200) ;

  if(coupon=='Abid-200'){

   alert('200 has been added to your account');

   setBalance(newBalance);

  }else{
    alert('Invalid Coupon')
    return;
  }








});