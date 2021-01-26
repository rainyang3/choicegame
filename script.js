

var questions= [
    {
        prompt: "What is my name? \n (a) Rain\n (b) Bob ",

        answer: "a"
    }
]
}

var score = 0;

for (var a=0; a< questions.length; a++){
    var game = window.prompt(questions[a].prompt);
    if(game == questions[a].answer){
        score++;
        alert("NICE!");

    } else {
        alert("WRONG!");
    }
}
