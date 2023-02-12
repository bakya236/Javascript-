// //storing temprory data in local storage 

// const InputEmail = document.querySelector("#InputEmail");
// const InputPassword = document.querySelector("#InputPassword")
// const button = document.querySelector("button")

// InputEmail.addEventListener("input", letter => {
//     InputEmail.textContent = letter.target.value
// })

// InputPassword.addEventListener("input", letter => {
//     InputPassword.textContent = letter.target.value
// })

// const storage = () => {
//     // localStorage.setItem("InputEmail", InputEmail.textContent)

//     localStorage.setItem("InputPassword", InputPassword.textContent)
// }

// button.addEventListener("click", storage)

/////////////////////////
// let InputEmail = document.querySelector("#InputEmail");

function signup(e){
    e.preventDefault();
    
    // console.log("working"); //to check if this function working


    let InputEmail = document.querySelector("#InputEmail").value;

    let InputPassword = document.querySelector("#InputPassword").value;

    let user = [{
        email: InputEmail,
        password: InputPassword
    }];

    let json = JSON.stringify(user);
    localStorage.setItem("user", json);
}

