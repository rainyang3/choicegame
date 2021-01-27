
// first question

let correct1 = document.getElementById("correct1");
let wrong1 = document.getElementById("wrong1");
// correct1.style.color = "red"; TEST

let score;

correct1.addEventListener("click",function () {
    score = 1;
    correct1.setAttribute("style", "background-color: pink; color: black; "); 
    wrong1.setAttribute("style", "");    
    console.log (score);
})

wrong1.addEventListener("click",function () {
    score = 0;
    wrong1.setAttribute("style", "background-color: pink; color: black; ");
    correct1.setAttribute("style", "");       
})

//second question

let correct2 = document.getElementById("correct2");
let wrong2 = document.getElementById("wrong2");
// correct1.style.color = "red"; TEST

let score2;

correct2.addEventListener("click",function () {
    score2 = 1;
    correct2.setAttribute("style", "background-color: pink; color: black; "); 
    wrong2.setAttribute("style", "");     
})

wrong2.addEventListener("click",function () {
    score2 = 0;
    wrong2.setAttribute("style", "background-color: pink; color: black; ");
    correct2.setAttribute("style", "");       
})