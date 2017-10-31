

var response = prompt("Which calculator would you like to use? Basic, advanced, bmi")

// Basic Calculator
if (response == "basic"){
  alert("Basic")
  var firstNumber = prompt("Give me the first number")
  var secondNumber = prompt("Give me the second number")
  var operation = prompt("Choose an opertaion")

  if (operation == "+"){
     var sum = parseFloat(firstNumber) + parseFloat(secondNumber)
     alert("The answer is " + sum)
  } else if (operation == "-"){
     var sum = parseFloat(firstNumber) - parseFloat(secondNumber)
     alert("The answer is " + sum)
  } else if (operation == "/"){
     var sum = parseFloat(firstNumber) / parseFloat(secondNumber)
     alert("The answer is " + sum)
  } else if (operation == "*"){
     var sum = parseFloat(firstNumber) * parseFloat(secondNumber)
     alert("The answer is " + sum)
  }


}

// Advanced Calculator

else if (response == "advanced"){
var operation = prompt("Choose an operation. square root or power")
if (operation == "square root"){
  var numberToBeSquared = prompt("Enter the number that you would like to be squared")
  answer = Math.sqrt(numberToBeSquared)
  alert("The answer is " + answer)
} else if (operation == "power"){

 var firstNumber = prompt("Give me the first number")
 var secondNumber = prompt("Give me the second number")
 var sum = Math.pow(parseFloat(firstNumber), parseFloat(secondNumber))
 alert("The answer is " + sum)
 }


}

else if (response == "bmi"){
  alert("This is the BMI calculator")
  var measureSystem = prompt("Which system do you want to use? Imperial or metric?")
  if (measureSystem == "metric"){
    var height = prompt("Enter your height in metres")
    var weight = prompt("Enter your weight in kg")
    var heightSquared = height * height
    var bmiResult = weight / heightSquared
    alert("Your BMI result is " + bmiResult)

  } else if (measureSystem == "imperial") {
    var height = prompt("Enter your height in inches")
    var weight = prompt("Enter your weight in pounds")
    var inchesToMetres = height * 0.025
    var poundsToKilograms = weight * 0.45
    var heightSquared = inchesToMetres * inchesToMetres
    var bmiResult = poundsToKilograms / heightSquared
    alert("Your BMI result is " + bmiResult)

  }


}

else{
  alert("Invalid response")
}
