//Buscar texto
function buscarTexto() {
    return document.querySelector("#texto").value;
}

//Criptografar texto
function criptografar() {
    let texto = buscarTexto();
    let textoFinal = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")
    exibirTextoNaTela(textoFinal);
    exibirBotaoCopiar();
}

//Descriptografar texto
function descriptografar() {
    let texto = buscarTexto();
    let textoFinal = texto
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    exibirTextoNaTela(textoFinal);
    exibirBotaoCopiar();
}

//Mostrar texto
function exibirTextoNaTela(textoFinal) {
    let campo = document.querySelector(".container__resultado__texto");
    campo.innerHTML = textoFinal;
}

//Exibir botão copiar
function exibirBotaoCopiar() {
    let botaoCopiar = document.querySelector(".container__resultado__btn");
    botaoCopiar.classList.remove("ocultar");
}

//Copiar texto
function copiar() {
    let texto = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(texto);
}

