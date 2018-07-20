var username = "leo";
var quizname = "leo test 1";
var question_name = "question_";
var query = {"username":"leo","quizName":"leo test 1"};

dpd.quiz.get(query, function (result) {
    console.log(result);
  for(var i = 1; i <= 10; i++){
    document.getElementById(question_name + i).value = result[0].questions[i];
  }
});
