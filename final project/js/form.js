
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phoneNumber = document.getElementById("phoneNumber");
const gender = document.registration;
const language = document.getElementById("language");
const zipcode = document.getElementById("zipcode");


function formValidation() {
  
  
  if (name.value.length < 6 || name.value.length > 20) {
    alert("Name should be more than 6 character ");
    name.focus();
    return false;
  }

  if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Please enter a valid email!");
    email.focus();
    return false;
  }

  if (!password.value.match(/^.{5,15}$/)) {
    alert("Password length must be between 5-15 characters!");
    password.focus();
    return false;
  }
 
  if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
    alert("Phone number must be 10 characters!");
    phoneNumber.focus();
    return false;
  }
 
  if (gender.gender.value === "") {
    alert("Please select your gender!");
    return false;
  }
  
  if (language.value === "") {
    alert("Please select your language!")
    return false;
  }
  // checking zip code
  if (!zipcode.value.match(/^[0-9]{6}$/)) {
    alert("Zip code must be 6 characters long number!");
    zipcode.focus();
    return false;
  }
  return true;
}




