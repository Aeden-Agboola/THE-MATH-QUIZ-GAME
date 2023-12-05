player1name = localStorage.getItem("p1name")
player2name = localStorage.getItem("p2name")
document.getElementById("player1_name").innerHTML = player1name;
document.getElementById("player2_name").innerHTML = player2name;
document.getElementById("question_turn").innerHTML = "question turn:" + player1name
document.getElementById("answer_turn").innerHTML = "answer turn:" + player2name
player1score = 0;
player2score = 0;
q_turn = "p1";
a_turn = "p2";

document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;

function send() {
    number1 = document.getElementById("number1").value
    number2 = document.getElementById("number2").value
    actual_answer = parseInt(number1) * parseInt(number2)
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text'id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer = actual_answer) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document, getElementById("player1_score").innerHTML = player1_score;
        } else {
            update_player2_score = player2_score + 1;
            document.getElementById("player1_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1")
     {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
    }

    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
    }
}