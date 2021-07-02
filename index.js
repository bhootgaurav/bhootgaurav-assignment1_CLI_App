var readLineSync = require("readline-sync")
var chalk = require("chalk")
var score = 0
var userName = readLineSync.question("Please enter your name : ")
console.log("Welcome "+userName+" to the quiz on Indian Culture")
console.log("==================================")

// question answer bank

var question1 = {
  question : chalk.blue("The ratio of width of our National flag to its length is  \n  A.	3:5 \n  B.	2:3\n  C.	2:4\n  D.	3:4 \n"),
  answer : "B"
}
var question2 = {
  question : chalk.blue("Rabindranath Tagores Jana Gana Mana has been adopted as Indias National Anthem. How many stanzas of the said song were adopted? \n  A.	Only the first stanza \n  B.	The whole song\n  C.	Third and Fourth stanza \n  D.	First and Second stanza \n"),
  answer : "A"
}
var question3 = {
  question : chalk.blue("Natya - Shastra the main source of India's classical dances was written by \n  A.	Nara Muni \n  B.	Bharat Muni \n  C.	Abhinav Gupt  \n  D.	Tandu Muni \n"),
  answer : "B"
}
var question4 = {
  question : chalk.blue("Dandia is a popular dance of \n  A.	Punjab \n  B.	Gujarat \n  C.	Tamil Nadu \n  D.	Maharashtra \n"),
  answer : "B"
}
var question5 = {
  question : chalk.blue("The words Satyameva Jayate inscribed below the base plate of the emblem of India are taken from \n  A.	Rigveda \n  B.	Satpath Brahmana \n  C.	Mundak Upanishad \n  D.	Ramayana \n"),
  answer : "C"
}

var ques = [question1 , question2 , question3 , question4 , question5]

// highest score bank

var highestScore1 = {
  name : "Gaurav",
  hscore : 8
}

var highestScore2 = {
  name : "Kapil",
  hscore : 6
}

var highestScoreArr = [highestScore1 , highestScore2]

// main function

function indianCultureQuiz(question , answer){
  var userAnswer = readLineSync.question(question)
  if(userAnswer === answer){
    console.log(chalk.green("Correct"))
    score = score + 2
  }
  else {
    console.log(chalk.red("Wrong"))
    console.log(chalk.green("Correct answer is "+answer))
  }
  console.log(chalk.yellow("Current score : "+score))
  console.log("==================================")
}

// function call

for(i=0 ; i < ques.length ; i++){
  indianCultureQuiz(ques[i].question , ques[i].answer)
}

// highest score display

for (j=0 ; j < highestScoreArr.length ; j++){
  if(highestScoreArr[j].hscore < score){
    console.log("You have beaten or equalised highest score")
    break
  }
}