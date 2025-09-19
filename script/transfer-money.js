document.getElementById("transferMoney").addEventListener('click',function(){

  setDisplay('transfer','block')
  setDisplay("add-money-form","none")
   setDisplay("cash-out-form","none")
   setDisplay("transaction-history","none")

})
document.getElementById('transfer-button').addEventListener('click',function(event){
event.preventDefault()    

const number=document.getElementById("user-account-number").value
const pin=getInputValueById("pinNumber")

if(number && pin){
if(number.length===11 && pin==69269){
   
const amount=getInputValueById("transferAmount")
 const mainBalance=getInnerTextById("availableBalance")

 const sub=mainBalance - amount;

 setInnerTextByIdAndValue("availableBalance",sub)

 const div=document.createElement("div")
 div.classList.add('bg-red-300',"text-gray-300")
 div.innerHTML=`
<h1 class="text-yellow-300"> Transfer Money to ${number}</h1>
<p> Amount: ${amount}</p>
`

const transactionHistory=document.getElementById("transaction-history")
 
transactionHistory.appendChild(div)


}


}
else{

    alert("invalid input")
}
})

