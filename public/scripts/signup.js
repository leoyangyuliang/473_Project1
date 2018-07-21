function signup(){
  event.preventDefault();
  var username = document.getElementById("signupName").value;
  var password = document.getElementById("signupPassword").value;
  var email = document.getElementById("signupEmail").value;
  var password_again = document.getElementById("signupPasswordAgain").value;
  var query = {"username":username};

  if(password==password_again){
  dpd.users.post({"username": username, "password": password, "email":email}, function(user, err) {
  if(err) return console.log(err.errors );
  else{
    location.href = "createQuiz.html";
    localStorage.setItem("username", username);
    console.log(user);
  }
  });
  }  else{
      alert("Password doesn't match");
    }



}
