var users = [];
var loggedInUser;
var userNameInput = document.querySelector("#uname");
var emailInput = document.querySelector("#uemail");
var passwordInput = document.querySelector("#upassword");
var welcomeH1 = document.querySelector("#welcome");
var signUpBtn = document.querySelector("#signUpBtn");
var loginBtn = document.querySelector("#loginBtn");
var logOutBtn = document.querySelector("#logOutBtn");

if (localStorage.getItem("users") !== null) {
  users = JSON.parse(localStorage.getItem("users"));
}
if (localStorage.getItem("loggedInUser") !== null) {
  loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
}

if (
  !loggedInUser?.loggedIn &&
  location.pathname === "/route-projects/loginSystem/home.html"
) {
  location.pathname = "/route-projects/loginSystem/index.html";
} else if (
  loggedInUser?.loggedIn &&
  location.pathname === "/route-projects/loginSystem/index.html"
) {
  location.pathname = "/route-projects/loginSystem/home.html";
}

if (location.pathname == "/route-projects/loginSystem/home.html") {
  welcomeH1.textContent = `Welcome ${loggedInUser.name}`;
}

loginBtn?.addEventListener("click", function (e) {
  e.preventDefault();
  var isValid;

  if (emailInput.value === "" || passwordInput.value === "") {
    document
      .querySelector("#inputsAlert")
      .classList.replace("d-none", "d-block");
    document.querySelector("#inputsAlert").textContent =
      "All inputs is required";
  } else {
    if (document.querySelector("#inputsAlert").classList.contains("d-block")) {
      document
        .querySelector("#inputsAlert")
        .classList.replace("d-block", "d-none");
    }

    for (var i = 0; i < users.length; i++) {
      if (
        users[i].email === emailInput.value &&
        users[i].password === passwordInput.value
      ) {
        var loggedInUser = users[i];
        loggedInUser.loggedIn = true;
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        location.pathname = "/route-projects/loginSystem/home.html";
        isValid = true;
        clearInputs();
      }
    }

    if (!isValid) {
      document
        .querySelector("#inputsAlert")
        .classList.replace("d-none", "d-block");
      document.querySelector("#inputsAlert").textContent =
        "incorrect email or password";
    }
  }
});

signUpBtn?.addEventListener("click", function (e) {
  e.preventDefault();
  var isUnique = true;
  for (var i = 0; i < users.length; i++) {
    if (users[i].email == emailInput.value) {
      isUnique = false;
    }
  }
  if (
    userNameInput.value === "" ||
    emailInput.value === "" ||
    passwordInput.value === ""
  ) {
    document
      .querySelector("#inputsAlert")
      .classList.replace("d-none", "d-block");
  } else {
    if (document.querySelector("#inputsAlert").classList.contains("d-block")) {
      document
        .querySelector("#inputsAlert")
        .classList.replace("d-block", "d-none");
    }

    if (isUnique) {
      var newUser = {
        name: userNameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      clearInputs();
      if (
        emailInput.nextElementSibling.nextElementSibling.classList.contains(
          "d-block"
        )
      ) {
        emailInput.nextElementSibling.nextElementSibling.classList.replace(
          "d-block",
          "d-none"
        );
      }
    } else {
      emailInput.nextElementSibling.nextElementSibling.classList.replace(
        "d-none",
        "d-block"
      );
    }
  }
});

logOutBtn?.addEventListener("click", function () {
  localStorage.removeItem("loggedInUser");
  location.reload();
});

function clearInputs() {
  userNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  alert("Email Created Successfully");
}
