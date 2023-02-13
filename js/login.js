// Step-1: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function() {
// step-2: get the email address inside the email input field
const userEmail = document.getElementById("user-email");
// always remember to use .value to get  text form an input field
const email = userEmail.value;
// step-3: get password 
//3.1: set id on the html element
//3.2: get the element
//3.3: get the value from the element
const userPassword = document.getElementById("user-password");
const password = userPassword.value;

// DANGER: Do Not VERIFY email password on the client side
// step-4: verify email and password and check whether valid user or not
if(email === "sontan@baap.com" && password === "secret"){
  console.log("valid user");
  window.location.href = "bank.html";
}
else{
  alert("tui password vule gesos tuke ami tejo sontan gosona korlam Invalid user hesabe");
}
});