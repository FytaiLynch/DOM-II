import './less/index.less'

// Your code goes here!
const headers = document.querySelector(".text-content h2");

headers.addEventListener("click", function(){
    this.style.backgroundColor = "red";
})

const letsGo = document.querySelector(".text-content p:nth-of-type(1)");
letsGo.addEventListener("click", function(){
    this.style.fontSize = "5rem";
})

const heading = document.querySelector("h1");
heading.addEventListener("mouseover", function(){
    this.style.color = "yellow";
})

const sunFun = document.querySelector(".destination h4:nth-of-type(1)");
sunFun.addEventListener("mouseover", function(){
    this.style.backgroundColor = "orange";
})


// function randomBgColor() {
//     let x = Math.floor(Math.random() * 256);
//     let y = Math.floor(Math.random() * 256);
//     let z = Math.floor(Math.random() * 256);
//     let bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
//     // console.log(bgColor);
// //    document.body.style.background = bgColor;
// //    button.style.backgroundColor = bgColor;
// } 


const button1 = document.querySelector(".destination:nth-of-type(1) .btn");
button1.addEventListener("mouseover", function(){
    this.style.backgroundColor = "pink";
});

const button2 = document.querySelector(".destination:nth-of-type(2) .btn");
button2.addEventListener("mouseover", function(){
    this.style.backgroundColor = "purple";
});

const button3 = document.querySelector(".destination:nth-of-type(3) .btn");
button3.addEventListener("mouseover", function(){
    this.style.backgroundColor = "green";
});