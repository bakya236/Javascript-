
//getting the form control
const loginForm = document.querySelector("#login");

const loginDetails = document.querySelector(".logindetails")

let inputEmail = document.querySelector("#inputEmail");
let inputPassword = document.querySelector("#inputPassword");

var users = [];
//localStorage.getItem(JSON.parse("users")) ||
function adduser(email, password) {
    //  console.log("email:" + email);
    users.push({
        email: email,
        password: password
    });

    localStorage.setItem("users", JSON.stringify(users));

    return ({ email, password });

    // localStorage.setItem("user", JSON.stringify(user))

}

//const createLoginDetails = ({ email, password }) =>
function createLoginDetails({ email, password }) {
    const div_logindetails = document.createElement("div");
    div_logindetails.setAttribute("class", "container");
    const h2_email = document.createElement("h2");
    const h2_password = document.createElement("h2");

    h2_email.innerText = "email:" + email;
    h2_password.innerText = "password:" + password;

    div_logindetails.append(h2_email, h2_password);
    loginDetails.appendChild(div_logindetails);
}

//users.forEach(createLoginDetails);
function signUp(event) {
    //const signup = (event) => {

    event.preventDefault();
    const newUser = adduser(
        inputEmail.value,
        inputPassword.value
    );
    console.log(JSON.stringify(newUser));

    createLoginDetails(newUser);
    // inputEmail.value = '';
    // inputPassword.value = '';
}
