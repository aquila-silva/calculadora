visor = document.getElementById("display");
n0 = document.getElementById("0");
n1 = document.getElementById("1");
n2 = document.getElementById("2");
n3 = document.getElementById("3");
n4 = document.getElementById("4");
n5 = document.getElementById("5");
n6 = document.getElementById("6");
n7 = document.getElementById("7");
n8 = document.getElementById("8");
n9 = document.getElementById("9");
virgula = document.getElementById("virgula");
apaga = document.getElementById("apagar");
mais = document.getElementById("mais");
menos = document.getElementById("menos");
mult = document.getElementById("mult");
divisao = document.getElementById("divisao");

resultado = document.getElementById("resultado");


n0.addEventListener("click", function () { addNumero("0") });
n1.addEventListener("click", function () { addNumero("1") });
n2.addEventListener("click", function () { addNumero("2") });
n3.addEventListener("click", function () { addNumero("3") });
n4.addEventListener("click", function () { addNumero("4") });
n5.addEventListener("click", function () { addNumero("5") });
n6.addEventListener("click", function () { addNumero("6") });
n7.addEventListener("click", function () { addNumero("7") });
n8.addEventListener("click", function () { addNumero("8") });
n9.addEventListener("click", function () { addNumero("9") });
apaga.addEventListener("click", function () { addNumero("") });
virgula.addEventListener("click", function () { addNumero(".") });

mais.addEventListener("click", function () { addNumero("+") });
menos.addEventListener("click", function () { addNumero("-") });
mult.addEventListener("click", function () { addNumero("*") });
divisao.addEventListener("click", function () { addNumero("/") });

resultado.addEventListener("click", resultadoVisor);

function resultadoVisor() {
    visor.value = eval(visor.value);
}

function addNumero(numero) {
    if (visor.value == "0") {
        visor.value = numero;
    } else {
        if (numero != "") {
            visor.value = visor.value + numero;
        } else
            visor.value = "0";
    }
}
