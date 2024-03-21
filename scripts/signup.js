// using class constructor to create objects using input values from submit form event
class user{
    constructor(nameOfUser,userContact,userEmail,userPassword){
        this.name = nameOfUser;
        this.contact = userContact;
        this.email = userEmail;
        this.password = userPassword;
    }
}

// getting all html elements into js
const submit_form = document.querySelector(".signup-submit-form");

// array to store objects in localStorage
const arr = JSON.parse(localStorage.getItem("userInfo")) || [];

// Submit form event
submit_form.addEventListener("submit",function(event){
  event.preventDefault();

  // getting all html elements into js to get their input values
  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

// creating new objects using new keyword everytime the sign up button is clicked
  const userObj = new user(name, contact, email, password);

  // pushing the objects created by using class into an array
  arr.push(userObj);

  // storing the array in localStorage
  localStorage.setItem("userInfo", JSON.stringify(arr));

  // once sign up successful redirect to login page
  alert("Sign up successful");
  window.location.href = "./login.html";
});