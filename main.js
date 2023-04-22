function encriptar() {
    const encryptTextBase = [
        {
            letter: "a",
            encrypt: "ai"
        },
        {
            letter: "e",
            encrypt: "enter"
        },
        {
            letter: "i",
            encrypt: "imes"
        },
        {
            letter: "o",
            encrypt: "ober"
        },
        {
            letter: "u",
            encrypt: "ufat"
        }
    ];
    let inputText = document.getElementById("input-text").value;
    let separatedText = inputText.split("");
    let encrypText = "";
        for(let i = 0; i < separatedText.length; i++) {
            if(separatedText[i] == "a" || separatedText[i] == "e" || separatedText[i] == "i" || separatedText[i] == "o" || separatedText[i] == "u") {
                //si encontramos vocal buscaremos en el objeto por cual string cambiar esa vocal
                encrypText += encryptTextBase.filter((obj) => obj.letter == separatedText[i])[0].encrypt;
            }
            else {
                encrypText += separatedText[i];
            }
        }
    imprimirHtml(encrypText)
}

function desencriptar() {
    const encryptTextBase = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    let inputText = document.getElementById("input-text").value;
        for(let i = 0; i < encryptTextBase.length; i++) {
            let regExp = new RegExp(`${encryptTextBase[i][1]}`, "g");
            inputText = inputText.replace(regExp, encryptTextBase[i] [0]);
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