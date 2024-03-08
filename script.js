let from1 = document.querySelector("#Please-inter-badget");



var badget_input = document.querySelector("#badget-input");
let button1 = document.querySelector("#Calculate");

let from2 = document.querySelector("#expense-from");

let expense_input = document.querySelector("#expense-input");

let expense_amount = document.querySelector('#expense-amount');

let budget = document.querySelector("#budget");
let expense = document.querySelector("#expense");
let balance = document.querySelector("#balance");

let ul_titel = document.querySelector("#ul-titel");
let ul_value = document.querySelector("#ul-value");

let expense_down = document.querySelector("#expense-down");
let temtamount = 0;

from1.addEventListener('submit',(e)=>{
  e.preventDefault();
  temtamount= badget_input.value
  balance.innerHTML=parseInt(badget_input.value)
  budget.innerHTML=parseInt(badget_input.value);
  badget_input.value='';
});

let count = 0;
from2.addEventListener('submit',(e)=>{
  e.preventDefault()
  if (budget.innerHTML==0) {
    alert('please flill up from')
    parseInt(expense.innerHTML)=0;
  }
  //important start
  count++
  let expenseinnertext = parseInt(expense.innerHTML);
  let sum = parseInt(expense_amount.value) + expenseinnertext
expense.innerHTML=sum;
  
  
let totalbalence =  temtamount - sum;
balance.innerHTML=totalbalence
//imortant end

let randomid = Date.now().toString();
let div=document.createElement('div');

div.innerHTML+=`
<div class="flex justify-around text-center max-sm:mt-12 m-auto">
<div>
     <h3 class="text-xl" id='expencInput'> ${expense_input.value}
     </h3>
     </div>
     <div>
    <h3 class="text-xl" id='expenseAmount'> ${expense_amount.value}
    </h3>
     </div>
  <div class="flex">
     <div class="mr-6">
      <i id="toid" class="fa-solid fa-pen-to-square text-sky-500"></i>
      </div>
 <div>
    <i id="todoid" class="fa-solid fa-trash text-red-500 deletbutton"></i>
 </div>
 </div>
</div>`
 expense_down.appendChild(div)
 expense_input.value='';
 expense_amount.value='';
 div.id=randomid;
 let deletbutton = div.querySelector('#todoid')
 
 let expenseAmount = div.querySelector('#expenseAmount')
 let expencInput = div.querySelector('#expencInput')
 
 
deletbutton.addEventListener('click',(e)=>{
let removedata = e.target.parentElement.parentElement.parentElement.parentElement;
   expense_down.removeChild(removedata);
   
   expense.innerHTML=sum - parseInt(expenseAmount.innerHTML)
   
   balance.innerHTML= totalbalence + parseInt(expenseAmount.innerHTML)
})


let exchange = div.querySelector('#toid');  



exchange.addEventListener('click',(e)=>{
  let exchangedata = e.target.parentElement.parentElement.parentElement.parentElement; 

expense_input.value=expencInput.innerHTML;
expense_amount.value=parseInt(expenseAmount.innerHTML);

   expense_down.removeChild(exchangedata);

   

   expense.innerHTML=sum - parseInt(expenseAmount.innerHTML)
   
   balance.innerHTML= totalbalence + parseInt(expenseAmount.innerHTML)
})


});