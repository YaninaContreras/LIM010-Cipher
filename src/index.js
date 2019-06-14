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
		screen2.classList.remove("hide");
		screen1.classList.add("hide");
	}
	else if (contador > 1) {

		error.innerHTML = "ACCESO DENEGADO";
	}
	else {
		error.innerHTML = "INTENTA DE NUEVO";
		contador++;
	}
});

/*cifrar y descifrar*/

let texto = document.getElementById("texto");
let codigo = document.getElementById('codigo');
const cifrar = document.getElementById('cifrar');
const descifrar = document.getElementById('descifrar');

/*RESULTADO*/
let resultado = document.getElementById('resultado');

cifrar.addEventListener("click", () => {
	let text = texto.value.toUpperCase();
	let code = parseInt(codigo.value);
	let cipherjs = window.cipher.encode(code, text);

	screen1.classList.add("hide");
	screen2.classList.add("hide");
	screen3.classList.remove("hide");

	resultado.value = cipherjs;
});

descifrar.addEventListener("click", () => {
	let text = texto.value.toUpperCase();
	let code = parseInt(codigo.value);
	let cipherjs = window.cipher.decode(code, text);

	screen1.classList.add("hide");
	screen2.classList.add("hide");
	screen3.classList.remove("hide");
	resultado.value = cipherjs;
})
/*BOTONES PARA REGRESAR O SALIR*/
const volver = document.getElementById('volver');
volver.addEventListener("click", () => {

	screen1.classList.add("hide");
	screen2.classList.remove("hide");
	screen3.classList.add("hide");

})
const salir = document.getElementById('salir');
salir.addEventListener("click"), () => {

	screen1.classList.remove("hide");
	screen2.classList.add("hide");
	screen3.classList.add("hide");
};







