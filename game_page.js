player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";

player1_score = 0;
player2_score = 0;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send()
{
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lower case = " + word);

    At1 = word.charAt(1);
    console.log(At1);

    length_divide_2 = Math.floor(word.length/2);
    At2 = word.charAt(length_divide_2);
    console.log(At2);

    length_minus_1 = word.length - 1;
    At3 = word.charAt(length_minus_1);
    console.log(At3);

    remove_At1 = word.replace(At1, "_");
    remove_At2 = remove_At1.replace(At2, "_");
    remove_At3 = remove_At2.replace(At3, "_");
    console.log(remove_At3);

    question_word = "<h4 id = 'word_display'>Q. " + remove_At3 + "</h4>";
    input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-primary' onclick = 'check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}