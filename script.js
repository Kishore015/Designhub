let date = document.getElementById('date');

let btn = document.getElementsByTagName('button');


let date_1 = document.getElementById('date1');

let date_2 = document.getElementById('date2');

let js_date = new Date();

let today = js_date.getDate();

let month = js_date.getMonth() + 1;

if(today < 10){
    today = "0" + today;
}

if(month<10){
    month = "0" + month;
}

let year = js_date.getFullYear();

let currentDate =  year + "-" + month + "-" + today;

let d_date =  year + "-" + month + "-" + today;

let date1 = document.getElementById('date').setAttribute('min', currentDate);

let date2 = document.getElementById('date2').setAttribute('min', currentDate);



//console.log(currentDate);

let form  = document.getElementById('form');
let username = document.getElementById('name');
let email =  document.getElementById('email');
let phone = document.getElementById('phone');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
  
   console.log(username.value);
   console.log(email.value);
   console.log(phone.value);
   console.log(date.value);
   console.log(btn.value);
 
})


let form1  = document.getElementById('form1');
let username1 = document.getElementById('name1');
let email1 =  document.getElementById('email1');
let phone1 = document.getElementById('phone1');

form1.addEventListener('submit', (e)=>{
    e.preventDefault();
    
  
   console.log(username1.value);
   console.log(email1.value);
   console.log(phone1.value);
   console.log(date1.value);
   console.log(btn1.value);
 
})



// show slot timings
date.addEventListener('input', ()=>{
    document.getElementById('show').classList = "d-block";
})

date_2.addEventListener('input', ()=>{
    document.getElementById('show1').classList = "d-block";
})


