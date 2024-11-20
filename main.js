const coffee = document.getElementById("coffee");
const beans = document.getElementById("beans");
const info = document.getElementById("info");
// const buy = document.getElementsByClassName("button");

// document.addEventListener("DOMContentLoaded", () => {
//     const coffee = document.getElementById("coffee");
//     console.log(coffee); 
//     })


coffee.addEventListener("mousedown", ()=>{
    coffee.style.marginRight = "50vw";
 beans.style.marginBottom = "35Vw";
 info.style.display="block";
 });
coffee.addEventListener("mouseup", ()=>{
    coffee.style.marginRight = "0vw";
    beans.style.marginBottom = "5Vw";
     info.style.display="none";
 });

//  document.addEventListener('DOMContentLoaded', (event) => {
//     const buy = document.getElementById("buy");
//     if (buy) {  //Important check!
//         buy.addEventListener("click", () => {
//             buy.style.backgroundColor = " rgb(0, 122, 65)";
//         });
//     } else {
//         console.error("Element with id 'buy' not found.");
//     }
// });
