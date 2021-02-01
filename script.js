
// first question

let correct1 = document.getElementById("correct1");
let wrong1 = document.getElementById("wrong1");
let win = document.getElementById("win");
let fail = document.getElementById("fail");
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

//third question

let correct3 = document.getElementById("correct3");
let wrong3 = document.getElementById("wrong3");


let score3;

correct3.addEventListener("click",function () {
    score3 = 1;
    correct3.setAttribute("style", "background-color: pink; color: black; "); 
    wrong3.setAttribute("style", "");     
})

wrong3.addEventListener("click",function () {
    score3 = 0;
    wrong3.setAttribute("style", "background-color: pink; color: black; ");
    correct3.setAttribute("style", "");       
})

if(score == 1 && score2 == 1 && score3 == 1) {
win.style.display();}

else {fail.style.display();}

