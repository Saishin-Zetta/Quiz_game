var start_button = $("#start_button");
var question_1 = $("#question_1")
var question_2 = $("#question_2")
var question_3 = $("#question_3")
var question_4 = $("#question_4")
var question_5 = $("#question_5")
var clock_counter = $(".clock")
var past_players = $(".players")
var board = $("#scoreboard")
var score = 0
var clock = 30
var questions = 0
var record_list = []

function scoreboard(){
    question_5.css("visibility","hidden")
    board.css("visibility","visible")
    var initials = prompt("What are your initials?")
    var high_score = (initials + ": " + score)
    record_list += high_score
    past_players.append(high_score)
    
    
}

function timer(){
    var count = setInterval(function() {}, 1000) 
    // quiz questions start()
    countdown_start()
    q1()

}
function countdown_start() {
    clock = 30;
    var game_timer = setInterval(function(){
        clock--;
        clock_counter.text("clock: " + clock);
    if (clock <= 0){
        clearInterval(game_timer);
    }
    if (questions >= 5){
        clearInterval(game_timer);
    }
    }, 1000);

}


function q1(){
    question_1.css("visibility","visible")
    question_1.on("click",function(event){
        var answer1 = $(event.target)
        if(answer1.hasClass("correct1")){
            score += 20
            console.log("correct")
            questions += 1
            q2()
            
        }
        else{
            console.log("incorrect")
            clock -= 10
            questions += 1
            q2()
        }
     
    })
    
}
function q2(){
    question_1.css("visibility","hidden")
    question_2.css("visibility","visible")
    question_2.on("click",function(event){
        var answer1 = $(event.target)
        if(answer1.hasClass("correct1")){
            console.log("correct")
            score += 20
            questions += 1
            q3()
        }
        else{
            console.log("incorrect")
            clock -= 10
            questions += 1
            q3()
        }
     
    })
}

function q3(){
    question_2.css("visibility","hidden")
    question_3.css("visibility","visible")
    question_3.on("click",function(event){
        var answer1 = $(event.target)
        if(answer1.hasClass("correct1")){
            console.log("correct")
            score += 20
            questions += 1
            q4()
        }
        else{
            console.log("incorrect")
            clock -= 10
            questions += 1
            q4()
        }
     
    })
}
function q4(){
    question_3.css("visibility","hidden")
    question_4.css("visibility","visible")
    question_4.on("click",function(event){
        var answer1 = $(event.target)
        if(answer1.hasClass("correct1")){
            console.log("correct")
            score += 20
            questions += 1
            q5()
        }
        else{
            console.log("incorrect")
            clock -= 10
            questions += 1
            q5()
        }
     
    })
    
}
function q5(){
    question_4.css("visibility","hidden")
    question_5.css("visibility","visible")
    question_5.on("click",function(event){
        var answer1 = $(event.target)
        if(answer1.hasClass("correct1")){
            console.log("correct")
            question_5.css("visibility","hidden")
            score += 20
            questions += 1
            scoreboard()
        }
        else{
            console.log("incorrect")
            question_5.css("visibility","hidden")
            clock -= 10
            questions += 1
            if (score >= 80){
                scoreboard()
            }
            

        }
     
    })
}

start_button.on("click", timer)