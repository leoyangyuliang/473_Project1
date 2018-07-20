function createQuiz1(){
  console.log("clicked");
}


function createQuiz() {
  var username = "leo";
  var quizname = "leo test 1";
  var question = [];
  var answer = [];
  var question_name = "question_";
  for(var i = 1; i <= 10; i++){
    var question_real_name = question_name + i.toString();
    question.push(document.getElementById(question_real_name).value);
    console.log(question_real_name);
    console.log(document.getElementById(question_name + i.toString()).value);
  }

  dpd.quiz.post({"username":username,"quizName":quizname,
   "questions":question, "answers":answer}
  , function(result, err) {
    if(err) return console.log(err);
    console.log(result, result.id);
  });

}
