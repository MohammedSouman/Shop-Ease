const loginForm = document.querySelector(".login-form")
const registerForm = document.querySelector(".register-form")
const logUsername = document.getElementById("log-username")
const regUsername = document.getElementById("reg-username")
const logPassword = document.getElementById("log-password")
const regPassword = document.getElementById("reg-password")
const regEmail = document.getElementById("reg-email")
const show = document.querySelectorAll(".show")
const loginBtn = document.querySelector(".login-btn")
const registerBtn = document.querySelector(".register-btn")
const register = document.querySelector(".sign-up")
const login = document.querySelector(".log-in")

for (let i = 0; i < show.length; i++) {
    show[i].addEventListener("click", function() {
        if (logPassword.type === "password" || regPassword.type === "password") {
            show[i].classList.add("fa-eye-slash")
            logPassword.type = "text"
            regPassword.type = "text"
        }
        else {
            show[i].classList.remove("fa-eye-slash")
            logPassword.type = "password"
            regPassword.type = "password"
        }
    })
}

// loginBtn.addEventListener("click", function() {
//     if (password.value.length < 6 && password.value.length > 0) {
//         password.value = ""
//         password.placeholder = "It must be greater than 6 characters"
//     }
// })

register.addEventListener("click", function() {
    loginForm.style.transform = "rotateY(180deg)"
    registerForm.style.transform = "rotateY(0deg)"
})

login.addEventListener("click", function() {
    loginForm.style.transform = "rotateY(0deg)"
    registerForm.style.transform = "rotateY(-180deg)"
})

const Body = document.getElementById("body")

registerBtn.addEventListener("click", ()=> {
    if (regUsername.value !== "" && regPassword.value !== "" && regEmail.value !== ""){
        document.getElementById("main").style.display = "none"
        Body.style.background = "red"
        Body.textContent = "REGISTERED"
        Body.style.display = "flex"
        Body.style.justifyContent = "center"
        Body.style.alignItems = "center"
        Body.style.alignItems = ""
        
    }
})

