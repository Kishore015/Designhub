let date = document.getElementById('date');

let date_1 = document.getElementById('date1');

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


// show slots

// show slot timings
date_1.addEventListener('input', ()=>{
    document.getElementById('show1').classList = "d-block";
})

let date2 = document.getElementById('date_1').setAttribute('min', currentDate);

