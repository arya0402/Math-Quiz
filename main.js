player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

function addUsers() {
    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player2_name").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location ="game_page.html";  
}

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = "Question Turn - " + player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player2_name;

function send() {
    get_number1 = document.getElementById("number_input1").value;
    get_number2 = document.getElementById("number_input2").value;
    actual_answer = parseInt(get_number1) * parseInt(get_number2);
    console.log(get_number1);
    console.log(get_number2);

    question_number = "<h4 id = 'number_display1'>" + get_number1 + " X " + get_number2 + "</h4>";
    input_box = "<br> Answer: <input id = 'input_check_box' type = 'number'>";
    check_button = "<br><br> <button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_input1").value = "";
    document.getElementById("number_input2").value = "";
}