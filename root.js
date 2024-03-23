var grade = "";

function output(){
    const inputText = document.getElementById("inputText");
    const number = inputText.value;
    const Result = parseFloat(number);
   
    if (Result >= 80 && Result <=100){
        grade = "A+";
        document.getElementById('value').style.color = "green";
    }
    else if (Result > 100){
        grade = "The input cannot be more than 100";
    }
    else if (Result < 0){
        grade = "The input cannot be less than 0";
    }
    else if (Result <= 79 && Result >= 70){
        grade = "A";
        document.getElementById('value').style.color = "green";
    }
    else if (Result <= 69 && Result >= 60){
        grade = "B";
        document.getElementById('value').style.color = "green";
    }
    else if (Result <= 59 && Result >= 50){
        grade = "C";
        document.getElementById('value').style.color = "green";
    }
    else if (Result <= 49 && Result >= 33){
        grade = "D";
        document.getElementById('value').style.color = "green";
    }
    else{
        grade = "F";
        document.getElementById('value').style.color = "red";
    }
    document.getElementById('main').style.display = "none";
    document.getElementById('show').innerHTML = "Your grade is: ";
    document.getElementById('value').innerHTML = grade;
    var showGrade = document.getElementById('showGrade');
    gradeValue.style.zIndex = "3";
    showGrade.style.display = "flex";
    showGrade.border = "1px solid black";
    document.getElementById('value').style.fontSize = "90px";
    var cross = document.getElementById('cross');
    cross.style.position = "relative";
    cross.style.left = "180px";
    cross.style.bottom = "80px";
    document.getElementById('background').style.filter = "blur(8px)";
}
function out(){
    document.getElementById('gradeValue').style.zIndex = "-1";
    document.getElementById('showGrade').style.display = "none";
    document.getElementById('main').style.display = "flex";
    document.getElementById('background').style.filter = "none";
}
function color(){
    var text = document.getElementById("inputText");
    text.style.color = "#0071aa";
}
var input = document.getElementById("inputText");
input.addEventListener(
    "keypress",function(event){
        if(event.key === "Enter"){
            document.getElementById("button").click()
        }
    }
);

