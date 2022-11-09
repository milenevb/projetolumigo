// MOSTRAR E ESCONDER DIVS SEGUNDA TELA 

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");


function showHideDiv1() {
    let aba = document.querySelector("#aba1");

    document.querySelector("#aba2").style.display = "none";
    document.querySelector("#aba3").style.display = "none";
    document.querySelector("#aba4").style.display = "none";
    document.querySelector("#aba5").style.display = "none";

    if(aba.style.display === "block") {
        aba.style.display = "none";
        btn1.classList.remove("active");
        
    } else {
        aba.style.display = "block";

        btn1.classList.add("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
        btn5.classList.remove("active");
    }
}

function showHideDiv2() {
    let aba = document.querySelector("#aba2");

    document.querySelector("#aba1").style.display = "none";
    document.querySelector("#aba3").style.display = "none";
    document.querySelector("#aba4").style.display = "none";
    document.querySelector("#aba5").style.display = "none";

    if(aba.style.display === "block") {
        aba.style.display = "none";
        btn2.classList.remove("active");
        
    } else {
        aba.style.display = "block";
        
        btn1.classList.remove("active");
        btn2.classList.add("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
        btn5.classList.remove("active");
    }
}

function showHideDiv3() {
    let aba = document.querySelector("#aba3");

    document.querySelector("#aba1").style.display = "none";
    document.querySelector("#aba2").style.display = "none";
    document.querySelector("#aba4").style.display = "none";
    document.querySelector("#aba5").style.display = "none";

    if(aba.style.display === "block") {
        aba.style.display = "none";
        btn3.classList.remove("active");
        
    } else {
        aba.style.display = "block";
        
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.add("active");
        btn4.classList.remove("active");
        btn5.classList.remove("active");
    }
}

function showHideDiv4() {
    let aba = document.querySelector("#aba4");

    document.querySelector("#aba1").style.display = "none";
    document.querySelector("#aba2").style.display = "none";
    document.querySelector("#aba3").style.display = "none";
    document.querySelector("#aba5").style.display = "none";

    if(aba.style.display === "block") {
        aba.style.display = "none";
        btn4.classList.remove("active");
        
    } else {
        aba.style.display = "block";
        
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.add("active");
        btn5.classList.remove("active");

        
    }
}
function showHideDiv5() {
    let aba = document.querySelector("#aba5");

    document.querySelector("#aba1").style.display = "none";
    document.querySelector("#aba2").style.display = "none";
    document.querySelector("#aba3").style.display = "none";
    document.querySelector("#aba4").style.display = "none";


    if(aba.style.display === "block") {
        aba.style.display = "none";
        btn5.classList.remove("active");
        
    } else {
        aba.style.display = "block";
        
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
        btn5.classList.add("active");
    }
}
/////////////////////////////////////////////////////////////////////


// MOSTRAR E ESCONDER SENHA 

function eyeClick() {
    let inputSenha = document.getElementById("inputSenha");
    let inputConfirmSenha = document.getElementById("inputConfirmSenha");
    let eye = document.querySelector(".senhaonoff");
    let senhaTypePassword = inputSenha.type == "password";

    if (senhaTypePassword) {
        inputSenha.setAttribute("type", "text");
        inputConfirmSenha.setAttribute("type", "text");
        eye.setAttribute("src", "img/dec-senhaoff.png");

    } else {
        inputSenha.setAttribute("type", "password");
        inputConfirmSenha.setAttribute("type", "password");
        eye.setAttribute("src", "img/dec-senhaon.png");

    }
}


/////////////////////////////////////////////////////////////////////

// VALIDAÇÃO DO FORMULÁRIO
function validacao(form) {
    inputSenha = document.getElementById("inputSenha").value;
    digitos = inputSenha.length;
    
    if (digitos < 8) {
        alert("A senha deve conter no mínimo 8 digitos.")
        return false;
    
    } else if (digitos > 10 ) {
        alert("A senha não pode exceder 10 digitos.")
        return false;
    
    } else if (document.getElementById("inputSenha").value != document.getElementById("inputConfirmSenha").value) {
        alert("As senhas não coincidem.");
        return false;

    } else {
        alert("Parabéns! Você já está cadastrado e pode receber nossos cupons a qualquer momento, fique ligado!");
        return true
    }
}

function only_letter(e) {
    tecla = (window.event)?event.keyCode:e.which;

    if ((tecla >= 65 && tecla <= 90) || (tecla >= 97 && tecla <= 122) || (tecla == 32) || (tecla == 8) || (tecla >= 37 &&  tecla <= 40) || (tecla == 116)) {
        return true
    } else {
        return false
    }
}

function only_number(e) {
    tecla = (window.event)?event.keyCode:e.which;

    if ((tecla >= 48 && tecla <= 57) || (tecla >= 96 && tecla <= 105) || (tecla == 8) || (tecla >= 37 && tecla <= 39) || (tecla == 46) || (tecla == 116)) {
        return false
    } else {
        return false
    }
}

function senha() {
    senha1 = document.getElementById("inputSenha").value;
    senha2 = document.getElementById("inputConfirmSenha").value;

    if (senha1 != senha2) {
        document.getElementById("msg").style.display = "block";
    } else {
        document.getElementById("msg").style.display = "none";
    }
}
//////////////////////////////////////////////////////////////////////