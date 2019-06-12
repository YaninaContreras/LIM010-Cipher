/* Acá va tu código */
/*llamando los inputs*/

const go1 = document.getElementById('go1');

/*condicional y contador*/
let contador = 0;
const contraseña = document.getElementById('contraseña');

go1.addEventListener("click", () => {
	const pass = contraseña.value;
	const error = document.getElementById("error");

	if (pass === "LABORATORIA") {
		screen2.style.display = 'block';
		screen1.style.display = 'none';
	} 
	else if (contador > 1) {
		
	    error.innerHTML="ACCESO DENEGADO";
	}
	else {
		error.innerHTML="INTENTA DE NUEVO";
        contador++;
	}
});

/*cifrar y descifrar*/

let texto = document.getElementById("texto");
let codigo = document.getElementById('codigo');
const cifrar = document.getElementById('cifrar');
const descifrar = document.getElementById('descifrar');

cifrar.addEventListener("click", () =>{
let text = texto.value.toUpperCase();
let code = parseInt(codigo.value);
let cipherjs = cipher.encode(text,code);
resultado.value = cipherjs;

screen1.style.display = 'none';
screen2.style.display = 'none';
screen3.style.display = 'block';
});

/*RESULTADO*/
let resultado = document.getElementById('resultado');
const volver = document.getElementById('volver');
const salir = document.getElementById('salir');


screen2.style.display = 'none';
screen3.style.display = 'none';






