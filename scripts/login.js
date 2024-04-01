// getting all html elements into js
const login_submitForm = document.querySelector(".login-submit-form");

// using the same array to get from localStorage
const array = JSON.parse(localStorage.getItem("userInfo"));

// Login form event
login_submitForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // getting all html elements into js to get their input values
  const login_email = document.getElementById("loginEmail").value;
  const login_password = document.getElementById("loginPassword").value;

  // using count variable for email and password
  let count1 = 0;
  let count2 = 0;

  // checking for the correct email and passowrd of the user if so increase the count
  array.forEach(function (ele) {
    if (ele.email === login_email) {
      count1++;
    }

    if (ele.password === login_password) {
      count2++;
    }
  });

  // checking if both count is greater than 0 then login successful otherwise throw an alert
  //   if (count1 > 0 && count2 > 0) {
  //     alert("Login successful");
  //     window.location.href = "./home.html";
  //   } else if (count1 === 0) {
  //     alert("Invalid credentials");
  //   } else if (count2 === 0) {
  //     alert("Invalid credentials");
  //   }
  if (
    login_email === "Agantuk.Sarkar@gds.ey.com" &&
    login_password === "abcd@123"
  ) {
    alert("Admin login successful");
    window.location.href = "./admin.html";
  } else if (count1 > 0 && count2 > 0) {
    alert("Login successful");
    window.location.href = "./home.html";
  } else if (count1 === 0) {
    alert("Invalid credentials");
  } else if (count2 === 0) {
    alert("Invalid credentials");
  }
});
