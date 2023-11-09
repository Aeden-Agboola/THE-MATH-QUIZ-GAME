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
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>checl</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("number1").value = "";
    document.getElementById("nummber2").value = "";

}

function check_answer() {
    a_word = document.getElementById("ans_word").value
    a_word = a_word.toLowerCase();
    if (a_word == q_word) {
        window.alert("well done you got it right")
        if (a_turn == "p1") {
            player1score += 1;
            document.getElementById("player1_score").innerHTML = player1score;
        } else {
            player2score += 1;
            document.getElementById("player2_score").innerHTML = player2score;
        }
    } else {
        window.alert("sorry the correct answer is " + q_word)
    }
    document.getElementById("output").innerHTML = "";
    if (q_turn == "p1") {
        q_turn = "p2";
        a_turn = "p1";
        document.getElementById("question_turn").innerHTML = "question turn:" + player2name;
        document.getElementById("answer_turn").innerHTML = "answer turn:" + player1name;
    } else {
        q_turn = "p1";
        a_turn = "p2";
        document.getElementById("question_turn").innerHTML = "question turn:" + player1name;
        document.getElementById("answer_turn").innerHTML = "answer turn:" + player2name;
    }
}