function sayHello(){
  var response1 = prompt("What is your name?");
  alert("Dear " + response1 + ",I feel honored to be your guide,you will meet a big question,please use your wisdom to solve it.");
}
sayHello()

function writeAnswer(){
  var response = prompt("who is the killer?");
  if (response == "王奇"){
  alert("Congratulations!You deserve to be a famous dective!");
}
  else {
  alert("The famous dective could also make mistakes,please try again.")
  }
}

function checkAnswer(){
  alert("The poison is on the pushpin tip of the seat. When pulling the stool, the pushpin pierces your finger and is poisoned. The killer is 王奇. The clerk chewed gum. The pushpin was stuck under the stool with gum.")
}
