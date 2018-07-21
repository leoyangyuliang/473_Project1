
var quizname = localStorage.getItem("quizname");
var question_name = "question_";
var query = {"quizName":quizname};
console.log(quizname);
dpd.quiz.get(query, function (result) {
    console.log(result);
  for(var i = 1; i <= 10; i++){
    document.getElementById(question_name + i.toString()).innerHTML = "Question "+ i +": " + result[0].questions[i-1];
  }
  for(var i = 1; i <= 40; i++){
    document.getElementById("answer" + i.toString()).innerHTML = result[0].answers[i-1];
  }
    localStorage.setItem("resultA", result[0].results[0]);
    localStorage.setItem("resultB", result[0].results[1]);
    localStorage.setItem("resultC", result[0].results[2]);
    localStorage.setItem("resultD", result[0].results[3]);
});


function calculateResult(){
  var a=0;
  var b=0;
  var c=0;
  var d=0;

  for(var i = 1; i <= 40; i++){

    if(document.getElementById("radio"+i.toString()).checked==true){
      if(document.getElementById("radio"+i.toString()).value=="A")
        a = a+1;
      else if(document.getElementById("radio"+i.toString()).value=="B")
        b = b+1;
      else if(document.getElementById("radio"+i.toString()).value=="C")
        c = c+1;
      else if(document.getElementById("radio"+i.toString()).value=="D")
        d = d+1;
    }

  }

  var final_result = localStorage.getItem("result_array");;
    if(Math.max(a, b, c, d)==a){
      var result = localStorage.getItem("resultA");
      localStorage.setItem("result", result);
    }
    else if(Math.max(a, b, c, d)==b){
      var result = localStorage.getItem("resultB");
      localStorage.setItem("result", result);
    }
    else if(Math.max(a, b, c, d)==c){
      var result = localStorage.getItem("resultC");
      localStorage.setItem("result", result);
    }
    else if(Math.max(a, b, c, d)==d){
      var result = localStorage.getItem("resultD");
      localStorage.setItem("result", result);
    }

    location.href = "result.html";
}
