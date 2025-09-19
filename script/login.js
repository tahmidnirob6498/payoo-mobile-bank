document.getElementById("btn-click").addEventListener('click',function(event){

const num=document.getElementById('num')
const pass=document.getElementById('pass')
const values=num.value;
const len=values.length;
event.preventDefault()
 if(len===11){
    
   if(pass.value==='69269'){
     window.location.href='https://tahmidnirob6498.github.io/payoo-mobile-bank/main.html';

   } 
   else{
    alert('pin')
   }

 }
 else{

  alert('incorrect number')
 }


})