const encryptTextBase = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

function encriptar() {
    let inputText = document.getElementById("input-text").value.toLowerCase();
    let separatedText = inputText.split("");
    let encrypText = "";
        for(let i = 0; i < separatedText.length; i++) {
            let findIndex = encryptTextBase.find((arr) => {return arr.some((str) => {return str === separatedText[i]})});
            if(findIndex === undefined) {
                encrypText += separatedText[i];
            }
            else {
                encrypText += findIndex[1];
            }
        }
    imprimirHtml(encrypText)
}

function desencriptar() {
    let inputText = document.getElementById("input-text").value.toLowerCase();
        for(let i = 0; i < encryptTextBase.length; i++) {
            let regExp = new RegExp(`${encryptTextBase[i][1]}`, "g");
            inputText = inputText.replace(regExp, encryptTextBase[i][0]);
        }
    imprimirHtml(inputText);
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
}