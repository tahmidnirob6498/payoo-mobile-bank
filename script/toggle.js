// document.getElementById('add-money-form').style.display="block";
//     document.getElementById('cash-out-form').style.display="none";
setDisplay('add-money-form',"block");
setDisplay('cash-out-form', 'none')
setDisplay("transaction-history", 'none')
setDisplay("transfer" ,"none")


// add money
document.getElementById('add-money-box').addEventListener('click',function(){
    // document.getElementById('add-money-form').style.display="block";
    // document.getElementById('cash-out-form').style.display="none";
    setDisplay('cash-out-form','none')
    setDisplay('add-money-form','block')
    setDisplay("transaction-history", 'none')
   setDisplay("transfer" ,"none")})

// cash out

document.getElementById('cash-out-box').addEventListener('click',function(){
    // document.getElementById('add-money-form').style.display="none";
    // document.getElementById('cash-out-form').style.display="block";
   setDisplay('cash-out-form','block')
   setDisplay('add-money-form','none')
   setDisplay("transaction-history", 'none')
   setDisplay("transfer","none")
})

