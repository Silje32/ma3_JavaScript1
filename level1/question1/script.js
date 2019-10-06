//Use RegEx to validate form

//Validating that "name" and "last name" inputs are not empty.
function checkName(name) {
  var myName = /(\w+)/;
  if (name.match(myName)) {
     return true;
  }  else {
     alert( "The name entered is invalid!" );
     return false;
  }
}
function checkLastName(lastname) {
  var myLastName = /(\w+)/;
  if (lastname.match(myLastName)) {
     return true;
  }  else {
     alert( "The last name entered is invalid!" );
     return false;
  }
}

//Validating that the phone and e-mail adress are correct.
function checkPhone(phone) {
  var myPhone = /^d\d\d\d\d\d\d\d$/;
  if (phone.match(myPhone)) {
     return true;
  }  else {
     alert( "The phone number entered is invalid!" );
     return false;
  }
}
function checkEmail(email) {
  var myEmail = /\w+\.\w+\/;
  if (email.match(myEmail)) {
     return true;
  }) else {
     alert( "The e-mail number entered is invalid!" );
     return false;
  }
}

//Function to check the submit button.
function checkSubmitBtn (submit) {
  var mySubmitBtn = testInfo(document.getElementById('submit'));
  if (submit === true) {
     console.log("True");
}    else {
     console.log("False");
  }
}
checkSubmitBtn();
