document.getElementById('button').addEventListener('click',function(event){
  event.preventDefault()

// const pin=document.getElementById('pass').value;
// const convertedPin=parseInt(pin)
const pin=getInputValueById('pass')
// const addAmount=document.getElementById('amount').value;
// const convertedAddAmount=parseFloat(addAmount)
const addAmount=getInputValueById('amount')
// const mainBalance=document.getElementById('availableBalance').innerText
// const convertedMainBalance=parseFloat(mainBalance)
const mainBalance=getInnerTextById('availableBalance')
if(addAmount<0){
  alert('invalid amount');
  return;
}


 
if(addAmount && pin){

// if(convertedPin===69269){
if(pin===69269){


 const sum= mainBalance + addAmount;
 

//  document.getElementById('availableBalance').innerText=sum;
setInnerTextByIdAndValue('availableBalance',sum)

}
else{
  alert('incorrect pin')
}

}
else{

  alert('please input your information')
}
const number=document.getElementById('num').value
// const p=document.createElement('p')
// p.innerText=`
// Added ${addAmount} taka from ${number} 

// `
// const transactionHistory=document.getElementById("transaction-history")
// transactionHistory.appendChild(p)

const selectBank=document.getElementById('all-bank').value
const div=document.createElement('div')
 div.classList.add('bg-red-300',"text-gray-300")


div.innerHTML=`
<h1 class="text-yellow-300"> Added Money from ${selectBank}</h1>
<h3> From ${number}<h3>
<p> Amount: ${addAmount}</p>
`

const transactionHistory=document.getElementById('transaction-history')
transactionHistory.appendChild(div)


}
)