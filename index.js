billAmount=document.getElementById("bill-amount");
custom=document.querySelector(".custom-tip");
people=document.getElementById("people");
tips=document.querySelectorAll(".tips");
tipAmount=document.querySelector(".tip-amount");
totalAmount=document.querySelector(".total-amount");
reset=document.querySelector(".reset");

let billValue=0;
let peopleValue=0;
let tipValue=0;
let tipPerPerson=0;
let totalPerPerson=0;


function billAmountHandle(){
    billValue=parseFloat(billAmount.value);
    calculate();
    
}
function customHandle(){
    
    for(let i=0;i<tips.length;i++){tips[i].checked=false;}

    tipValue=custom.value/100;
    
    calculate();
}
function peopleHandle(){
    peopleValue=people.value;
    calculate();
}

for(let i=0;i<tips.length;i++){
    tips[i].addEventListener("click",function(){
        custom.value="";
        tipValue=tips[i].value/100;
        calculate();
    });
}

function calculate(){
    let flag=0;
    flag=billValue*tipValue;
    tipPerPerson=flag/peopleValue;
    flag=billValue/peopleValue;
    totalPerPerson=flag+tipPerPerson;

    if(tipValue>0 & totalPerPerson>0 & peopleValue>0){
    tipAmount.innerHTML=tipPerPerson;
    totalAmount.innerHTML=totalPerPerson;}
}

reset.addEventListener("click",function(){
    billValue=0;
    peopleValue=0;
    tipValue=0;
    tipPerPerson=0;
    totalPerPerson=0;
    
    for(let i=0;i<tips.length;i++){tips[i].checked=false;}
    
    billAmount.value="";
    custom.value="";
    people.value="";
    tipAmount.innerHTML="0.00";
    totalAmount.innerHTML="0.00";
});

billAmount.addEventListener("input", billAmountHandle);
custom.addEventListener("input", customHandle);
custom.addEventListener("click", customHandle);
people.addEventListener("input", peopleHandle);