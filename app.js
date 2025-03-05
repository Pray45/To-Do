
// on-click Menu............................................. 

let menu = document.querySelector(".menu")
let slider = document.querySelector(".slider")
let sliderConstant = true;


menu.addEventListener("click" , () =>{

    if(sliderConstant == true){
        slider.style.transform = 'translate(0%)'
        sliderConstant = false;
    }
    else{
        console.log("Hello !!!");
        slider.style.transform = 'translate(-110%)'
        sliderConstant = true;
    }
})


// heart color change............................................. 

let heart = document.querySelector(".fav")
let fav = true

heart.addEventListener("click" , () =>{
    if(fav == true){
        heart.style.backgroundColor = '#C51104'
        fav = false;
    }
    else{
        heart.style.backgroundColor = 'grey'
        fav = true;
    }
})


// time wise msg............................................. 

let wish = document.querySelector(".wish")
let time = new Date().getHours()

let msg = ""

if(time>=5 && time<12){
    msg = `<p>Hii user <br> Good morning</p>`
}
if(time>=12 && time<18){
    msg = `<p>Hii user <br> Good Afternoon</p>`
}
if(time>=18 && time<23){
    msg = `<p>Hii user <br> Good Evening</p>`
}
if(time>=23 || time == 24 || time>=0 && time<5){
    msg = `<p>Hii user <br> go to bed !!!</p>`
}

wish.innerHTML = msg

// time wise msg............................................. 


let innerDate = document.querySelector(".date")
let innerMonth = document.querySelector(".month")
let date = new Date().getDate()
let month = new Date().getMonth()

console.log(date);
console.log(month);

switch(month){
    case 0:
        month = "January"
        break
    case 1:
        month = "February"
        break
    case 2:
        month = "March"
        break
    case 3:
        month = "April"
        break
    case 4:
        month = "May"
        break
    case 5:
        month = "June"
        break
    case 6:
        month = "July"
        break
    case 7:
        month = "August"
        break
    case 8:
        month = "September"
        break
    case 9:
        month = "Obctober"
        break
    case 10:
        month = "November"
        break
    case 11:
        month = "December"
        break
}

innerDate.innerHTML = `${date}`
innerMonth.innerHTML = `${month}`

