let input = document.getElementById("slider");
let button = document.getElementById("button");

let tamanhoSenha = document.getElementById("valor");
let password = document.getElementById("password");

let containerPassword = document.getElementById("container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let novaSenha = "";

tamanhoSenha.innerHTML = input.value;

slider.oninput = function(){
    tamanhoSenha.innerHTML = this.value;
}

function gerarSenha(){
    let pass = "";
    for(let i = 0, n = charset.length; i < input.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() *n))
    }
    
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}