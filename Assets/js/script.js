isUserLogin()




function toggleTopCategories(elem) {
  let prevElem = document.getElementsByClassName("active_btn_toogle_categories")[0];
  prevElem.classList.remove("active_btn_toogle_categories");
  elem.classList.add("active_btn_toogle_categories")
}
function toogle_featureproduct(elemtop) {
  let previouselement = document.getElementsByClassName("active_btn_toogle_top_categories")[0];
  previouselement.classList.remove("active_btn_toogle_top_categories");
  elemtop.classList.add("active_btn_toogle_top_categories");
}

function toogle_ourblog(blogelement) {
  let previousblogele = document.getElementsByClassName("active_btn_toogle_blog")[0];
  previousblogele.classList.remove("active_btn_toogle_blog");
  blogelement.classList.add("active_btn_toogle_blog");
}

// login form show logic

function showmudal(self) {
  document.querySelector('.overlay').classList.add('showlay');

  if (self.classList.contains('login')) {
    document.querySelector('#loginform').classList.add('showloginform');
  } else {
    document.querySelector('#registerform').classList.add('showloginform');
  }

}

function closemudal() {
  const loginhide = document.querySelector('#loginform')
  const registerhide = document.querySelector('#registerform')

  document.querySelector('.overlay').classList.remove('showlay');

  if (loginhide.classList.contains('showloginform')) {
    loginhide.classList.remove('showloginform');
  } else {
    registerhide.classList.remove('showloginform');
  }


}


function registerUser(event) {
  event.preventDefault();

  var username = document.getElementById('user-name').value;
  var email = document.getElementById('e-mail-reg').value;
  var password = document.getElementById('password-type-reg').value;
  var confirmPassword = document.getElementById('confirm-password').value;

  // Check if the username already exists in local storage
  if (localStorage.getItem(username)) {
    alert('Username already exists!');
  } else if (password !== confirmPassword) {
    alert('Passwords do not match!');
  } else {
    let registeredUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Create a new user object
    var user = {
      username: username,
      email: email,
      password: password
    };
    registeredUsers.push(user);

    // Store the user object in local storage
    localStorage.setItem("users", JSON.stringify(registeredUsers));
    alert('Registration successful!');
    closemudal()
  }
}

document.getElementById('registerform').addEventListener('submit', registerUser);








// Function to handle login
function loginFn(event) {
  event.preventDefault();

  // Get the input values
  var email = document.getElementById('e-mail').value;
  var password = document.getElementById('password-type').value;

  // Check if the user exists and the password is correct
  let user = null;
  let fetchusersdata = JSON.parse(localStorage.getItem("users"));
  console.log(fetchusersdata)

  let loggedIn = false;
  fetchusersdata.forEach(user => {
    if (user.email === email && user.password === password) {
      loggedIn = true;
      localStorage.setItem("user", JSON.stringify(user));
    }
  });

  if (loggedIn) {

    let userregname = JSON.parse(localStorage.getItem("user")).username;
    alert('Login successful!');
    let userlogout = document.getElementById("userlogout");
    let userregistericon = document.getElementById("userregistericon");

    let displayusername = document.getElementById("dispusername");
    displayusername.innerHTML = userregname;
    userlogout.style.display = "block";
    userregistericon.style.display = "none";
    closemudal()
                

  } else {
    alert('Invalid email or password!');
  }
}

// Function to close the modal
function closeModal() {
  document.getElementById('loginform').classList.remove('showmodal');
}

// Add event listener to the login form
document.getElementById('loginform').addEventListener('submit', loginFn);


function showusername_login_reg() {




}
function logoutuser() {

 
  localStorage.removeItem("user");
  let userregistericon = document.getElementById("userregistericon");
  userregistericon.style.display = "block";
  let userlogout = document.getElementById("userlogout");
  userlogout.style.display = "none";
  let displayusername = document.getElementById("dispusername");
  displayusername.innerHTML = "login";

}

function isUserLogin (){
  let user = JSON.parse(localStorage.getItem("user"));
  if(user){
    let userlogout = document.getElementById("userlogout");
    let userregistericon = document.getElementById("userregistericon");

    let displayusername = document.getElementById("dispusername");
    displayusername.innerHTML = user.username;
    userlogout.style.display = "block";
    userregistericon.style.display = "none";
  }
}
