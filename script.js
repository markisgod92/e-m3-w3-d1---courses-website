const USER_NAME = "marco"
const PASSWORD = "1234"

const usernameInput = document.getElementById("user-name");
const passwordInput = document.getElementById("user-password");
const messageBox = document.getElementById("message");
const submitBtn = document.getElementById("submit");

const redirectToHome = () => {
    window.location.href = "./home.html";
}

submitBtn.addEventListener("click", () => {
    if (usernameInput.value === USER_NAME && passwordInput.value === PASSWORD) {
        redirectToHome()
    } else {
        messageBox.innerText = "I dati inseriti sono errati. Il tuo account è stato cancellato per questioni di sicurezza."
    }
})