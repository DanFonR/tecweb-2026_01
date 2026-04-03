import './style.css'

/** @type {HTMLInputElement} */const email = document.getElementById("email");
/** @type {HTMLInputElement} */const senha = document.getElementById("senha");
/** @type {HTMLButtonElement} */const botao = document.getElementById("envio");

/** @type {HTMLParagraphElement} */const msgEmail = document.getElementById("mensagem-email");
/** @type {HTMLParagraphElement} */const msgSenha = document.getElementById("mensagem-senha");

const emailRegex = /^(?!.*[.+-]{2,})[+.-\w]+@\w+(\.\w+)+$/;
const senhaRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z\d]).{8,}$/;

const validado = {
    email: false,
    senha: false
};

if (email) email.addEventListener("focusout", () =>{validarEntrada("email")});
if (senha) senha.addEventListener("focusout", () => {validarEntrada("senha")});

function validarEntrada(entrada) {
    let erroEmail = "";
    let erroSenha = "";

    /** @type {string}  */ const emailStr = (email.value).trim();
    /** @type {string}  */ const senhaStr = senha.value;

    if (entrada === "email") {
        if (!emailStr) erroEmail = "O campo de email é obrigatório.";
        else if (!emailRegex.test(emailStr)) erroEmail = "E-mail inválido";

        validado.email = erroEmail === "";

        if (msgEmail) msgEmail.textContent = erroEmail;
    }

    else if (entrada === "senha") {
        if (!senhaStr) erroSenha = "O campo de senha é obrigatório.";
        else if (!senhaRegex.test(senhaStr)) erroSenha = (
                "Senha inválida. Deve conter ao menos 8 caracteres e ao menos " +
                "uma letra minúscula, uma maiúscula, um dígito, e um caracter especial."
        );

        validado.senha = erroSenha === "";

        if (msgSenha) msgSenha.textContent = erroSenha;
    }

    if (botao) botao.disabled = !(validado.email && validado.senha);
    console.log(msgSenha.textContent, msgEmail.textContent, botao.disabled);
}
