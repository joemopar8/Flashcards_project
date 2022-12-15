// function addition() {
//   var ourAnswer = document.getElementById("answer").value;
//   isNaN(ourAnswer);
//   if (isNaN(ourAnswer)) {
//     document.getElementById("output").innerHTML =
//       "Hey! " + ourAnswer + " is 'not' a Number!";
//   } else {
//     if (ourAnswer == correctAnswer) {
//       document.getElementById("output").innerHTML =
//         "Correct! " + num_1 + " + " + num_2 + " = " + correctAnswer;
//     } else {
//       document.getElementById("output").innerHTML =
//         "Incorrect! " +
//         num_1 +
//         " + " +
//         num_2 +
//         " = " +
//         correctAnswer +
//         ", not " +
//         ourAnswer;
//     }
//   }
// }

// function newCard() {
//   document.getElementById("output").innerHTML = "";
//   document.getElementById("answer").value = "";
//   num_1 = Math.floor(Math.random() * 10) + 1;
//   num_2 = Math.floor(Math.random() * 10) + 1;
//   document.getElementById("demo").innerHTML = num_1 + " + " + num_2;
//   correctAnswer = num_1 + num_2;
// }

// function subtraction() {
//   var ourAnswer = document.getElementById("answer").value;
//   isNaN(ourAnswer);
//   if (isNaN(ourAnswer)) {
//     document.getElementById("output").innerHTML =
//       "Hey! " + ourAnswer + " is 'not' a Number!";
//   } else {
//     if (ourAnswer == correctAnswer) {
//       document.getElementById("output").innerHTML =
//         "Correct! " + num_1 + " - " + num_2 + " = " + correctAnswer;
//     } else {
//       document.getElementById("output").innerHTML =
//         "Incorrect! " +
//         num_1 +
//         " - " +
//         num_2 +
//         " = " +
//         correctAnswer +
//         ", not " +
//         ourAnswer;
//     }
//   }
// }

// function newCard() {
//   document.getElementById("output").innerHTML = "";
//   document.getElementById("answer").value = "";
//   num_1 = Math.floor(Math.random() * 10) + 1;
//   num_2 = Math.floor(Math.random() * 10) + 1;
//   document.getElementById("demo").innerHTML = num_1 + " - " + num_2;
//   correctAnswer = num_1 - num_2;
// }

function multiplication() {
  var ourAnswer = document.getElementById("answer").value;
  isNaN(ourAnswer);
  if (isNaN(ourAnswer)) {
    document.getElementById("output_3").innerHTML =
      "Hey! " + ourAnswer + " is 'not' a Number!";
  } else {
    if (ourAnswer == correctAnswer) {
      document.getElementById("output").innerHTML =
        "Correct! " + num_1 + " * " + num_2 + " = " + correctAnswer;
    } else {
      document.getElementById("output").innerHTML =
        "Incorrect! " +
        num_1 +
        " * " +
        num_2 +
        " = " +
        correctAnswer +
        ", not " +
        ourAnswer;
    }
  }
}

function newCard() {
  document.getElementById("output").innerHTML = "";
  document.getElementById("answer").value = "";
  num_1 = Math.floor(Math.random() * 10) + 1;
  num_2 = Math.floor(Math.random() * 10) + 1;
  document.getElementById("demo").innerHTML = num_1 + " * " + num_2;
  correctAnswer = num_1 * num_2;
}
