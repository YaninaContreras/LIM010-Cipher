/* Acá va tu código */
/*llamando los inputs*/




const go1 = document.getElementById('go1');
let texto = document.getElementById('texto');
let codigo = document.getElementById('codigo');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const go = document.getElementById('go2');
let resultado = document.getElementById('reultado');
const volver = document.getElementById('volver');
const salir = document.getElementById('salir');


const contraseña = document.getElementById('contraseña');

go1.addEventListener("click", () => {
	const pass = contraseña.value;
	

	if (pass === "LABORATORIA") {
		alert("Bienvenida");
	} 
	else if (contador > 1) {
		
	    error.innerHTML="acceso denegado";
	}
	else {
		error.innerHTML="intenta de nuevo";
        contador++;
	}
});



screen2.style.display = 'none';
screen3.style.display = 'none';






