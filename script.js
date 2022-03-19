

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

let date1 = document.getElementById('date').setAttribute('min', currentDate);

console.log(date1);
//console.log(currentDate);

let form  = document.getElementById('form');

form.addEventListener('submit', ()=>{
   let name = document.getElementById('name');
   let email =  document.getElementById('email');
   let phone = document.getElementById('phone');
   
})

// show slot timings
date.addEventListener('input', ()=>{
    document.getElementById('show').classList = "d-block";
})

