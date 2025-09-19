document.getElementById('cashout-button').addEventListener('click',function(event){
    event.preventDefault();

    const pin=document.getElementById('account-pass').value;
    const convertedPin=parseInt(pin);
    const amount=document.getElementById('withdraw-amount').value;
    const convertedAmmount=parseInt(amount);
    const availableBalance=document.getElementById("availableBalance").innerText;
    const convertedAvailableBalance=parseInt(availableBalance);

if(convertedAmmount>convertedAvailableBalance){
  
    alert('invaild amount')
    return;

}
    if(amount && pin){

        if(convertedPin===69269){

        const sub= convertedAvailableBalance - convertedAmmount;

        document.getElementById("availableBalance").innerText= sub;

        }
    }
    else{
        alert('please input your data')
    }
    const  cashoutAmount=document.getElementById("withdraw-amount").value
    const number=document.getElementById('num').value
const p=document.createElement('p')
p.innerText=`
Added ${cashoutAmount} taka from ${number} 

`
const transactionHistory=document.getElementById("transaction-history")
transactionHistory.appendChild(p)


})