let encriptador = document.getElementById('encriptador');
let desencriptador = document.getElementById('encriptador');
let cripto = document.getElementById('cripto');
let cripto_h3 = document.getElementById('cripto-h3');
let cripto_p = document.getElementById('cripto-p');
let not_found = document.getElementById('not-found');
let copiador = document.getElementById('copiador');
let encriptado;

function encriptar(){
    
    let texto = document.getElementById('original').value.toLowerCase();
    
    if (texto!=""){

        console.log(texto);
        encriptado = texto.replace(/e/g, 'enter');
        encriptado = encriptado.replace(/i/g, 'imes');
        encriptado = encriptado.replace(/a/g, 'ai');
        encriptado = encriptado.replace(/o/g, 'ober');
        encriptado = encriptado.replace(/u/g, 'ufat');
        console.log(encriptado);
        cripto_h3.innerHTML = "Mensaje encriptado";
        cripto_p.innerHTML = encriptado;
        not_found.style.display = "none";
        cripto.style.display = "flex";

    } else {
        alert("Error! Introduzca texto para encriptarlo");
    }
}

// function copiar(){
//     encriptado
// }

encriptador.onclick = encriptar;
copiador.onclick = copiar;