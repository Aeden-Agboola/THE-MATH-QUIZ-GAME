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
    q_word = document.getElementById("word").value;
    q_word = q_word.toLowerCase();
    second_letter = q_word.charAt(1);
    word_length = q_word.length;
    last_letter = q_word.charAt(word_length - 1);
    middle_letter = q_word.charAt(Math.floor(word_length / 2));
    console.log(second_letter, middle_letter, last_letter);
    replace_word = q_word.replace(second_letter, "_")
    console.log(replace_word);
    replace_word = replace_word.replace(middle_letter, "_");
    console.log(replace_word);
    replace_word = replace_word.replace(last_letter, "_")
    console.log(replace_word);
    h4_tag = '<h4 id="q"> Q:' + replace_word + '</h4>';
    input_tag = '<br> Ans:<input id="ans_word">';
    button_tag = '<br> <br> <button class="btn btn-success" onclick="check_answer()"> check </button>';
    document.getElementById("output").innerHTML = h4_tag + input_tag + button_tag;
    document.getElementById("word").value = "";
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