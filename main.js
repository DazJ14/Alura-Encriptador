const encryptTextBase = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
const buttonSwitch = document.querySelector("#dark-mode");
const checkLetterRegExp = new RegExp(/[^a-z\s]/);

function encriptar() {
    let inputText = document.getElementById("input-text").value;
    let separatedText = inputText.split("");
    let encrypText = "";
    if(checkLetterRegExp.test(inputText)) {
        alertToast("warning", "warning-close")
    }
    else {
        for(let i = 0; i < separatedText.length; i++) {
            let findIndex = encryptTextBase.find((arr) => {return arr.some((str) => {return str === separatedText[i]})});
            if(findIndex === undefined) {
                encrypText += separatedText[i];
            }
            else {
                encrypText += findIndex[1];
            }
        } 
    imprimirHtml(encrypText);
    }
}

function desencriptar() {
    let inputText = document.getElementById("input-text").value;
    if(checkLetterRegExp.test(inputText)) {
        alertToast("warning", "warning-close")
    }
    else {
        for(let i = 0; i < encryptTextBase.length; i++) {
            let regExp = new RegExp(`${encryptTextBase[i][1]}`, "g");
            inputText = inputText.replace(regExp, encryptTextBase[i][0]);
        }
        imprimirHtml(inputText);
    }
}

function imprimirHtml(texto){
    document.getElementById("output-text-show").innerHTML = texto;
        if(document.getElementById("output-text-show").textContent.trim().length !== 0) {
            document.getElementById("text-toggle").classList.add("no-text");
            document.getElementById("text-show-wrapper").classList.remove("no-text");
        }
        else {
            document.getElementById("text-toggle").classList.remove("no-text");
            document.getElementById("text-show-wrapper").classList.add("no-text");
        }
}

function copiar() {
    let copyText = document.getElementById("output-text-show").innerText;
    navigator.clipboard.writeText(copyText);
    alertToast("succed", "succed-close");
}

buttonSwitch.addEventListener("click", () => {
    document.body.classList.toggle('dark');
	buttonSwitch.classList.toggle('active');
});

function alertToast(alertType, closeId) {
    let succedAlert = document.getElementById(alertType);
    let closeAlert = document.getElementById(closeId);
    succedAlert.classList.add("show");
    let temporizador = setTimeout(function() {
        succedAlert.classList.remove("show");
    }, 2500);
    closeAlert.addEventListener("click", function() {
        clearTimeout(temporizador);
        succedAlert.classList.remove("show");
    });
};