


function login(){
  event.preventDefault();
  var username = document.getElementById("usernameInput").value;
  var password =document.getElementById("passwordInput").value;
  dpd.users.login({"username": username, "password": password},
  function(user, err) {
  if(err) location.href = "signUp.html";
  else{
  console.log(user);
  location.href = "createQuiz.html";
}
});
}
