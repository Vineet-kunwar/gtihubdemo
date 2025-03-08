let inputSlider = document.querySelector("#inputSlider");
let sliderValue = document.querySelector("#sliderValue");
let passbox = document.querySelector("#passbox");
let lowercase = document.querySelector("#lowercase");
let uppercase = document.querySelector("#uppercase");
let number = document.querySelector("#number");
let symbol = document.querySelector("#symbols");
sliderValue.textContent = inputSlider.value;
let genbtn = document.querySelector("#genbtn");
let copyicon = document.querySelector("#copyicon")

inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
});

genbtn.addEventListener('click', () => {
    passbox.value = generatePassword();
});

let lowerCases = "abcdefghijklmnopqrstuvwxyz";
let upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "~!@#$%^&*";

function generatePassword() {
    let genPassword = "";
    let allChars = "";
    allChars += lowercase.checked ? lowerCases : "";
    allChars += uppercase.checked ? upperCases : "";
    allChars += number.checked ? numbers : "";
    allChars += symbol.checked ? symbols : "";

    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }

    let i = 1;
    while (i <= inputSlider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPassword;
}

copyicon.addEventListener("click", () => {
    if (passbox.value != "" || passbox.value.length >= 1) {
        navigator.clipboard.writeText(passbox.value);
        copyicon.innerText = "check";
        copyicon.title = "Password Copied";
    }

    setTimeout(() => {
        copyicon.innerHTML = "content_copy";
        copyicon.title = "";
    }, 2000);
});