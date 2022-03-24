const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/, // 4 a 12 digitos.
	correo: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
};
let cuenta = {};
const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
};
class persona {
	constructor(usuario) {
		this.usuario = usuario;
	}
}
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, "usuario");
			break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, "nombre");
			break;
		case "password":
			validarCampo(expresiones.password, e.target, "password");
			validarPassword2();
			break;
		case "password2":
			validarPassword2();
			break;
		case "correo":
			validarCampo(expresiones.correo, e.target, "correo");
			break;
	}
};

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
		document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
		document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
		campos[campo] = false;
	}
};

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById("password");
	const inputPassword2 = document.getElementById("password2");

	if (inputPassword1.value !== inputPassword2.value) {
		document.getElementById(`grupo__password2`).classList.add("formulario__grupo-incorrecto");
		document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-correcto");
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add("formulario__input-error-activo");
		campos["password"] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-incorrecto");
		document.getElementById(`grupo__password2`).classList.add("formulario__grupo-correcto");
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove("formulario__input-error-activo");
		campos["password"] = true;
	}
};
inputs.forEach((input) => {
	input.addEventListener("keyup", validarFormulario);
	input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
	e.preventDefault();
	const terminos = document.getElementById("terminos");
	if (campos.usuario && campos.nombre && campos.password && campos.correo && terminos.checked) {
		document.getElementById("formulario__mensaje").classList.remove("formulario__mensaje-activo");
		signUp();
		formulario.reset();
		Swal.fire({
			icon: 'success',
			title: 'HAS CREADO LA CUENTA CORRECTAMENTE',
			showConfirmButton: false,
			timer: 1500,
			timerProgressBar: true,
			
		  })
		setTimeout(() => {
			window.location.href = "iniciarSesion.html";
		}, 1500);

		document.querySelectorAll(".formulario__grupo-correcto").forEach((icono) => {
				icono.classList.remove("formulario__grupo-correcto");
			});
	} else {
		document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
	}
});

const signUp = (e) => {
	let formData = {
		usuario: document.getElementById("usuario").value,
		nombre: document.getElementById("nombre").value,
		contraseña: document.getElementById("password").value,
		contraseña2: document.getElementById("password2").value,
		correo: document.getElementById("correo").value,
	};
	localStorage.setItem("formData", JSON.stringify(formData));
	console.log(localStorage.getItem("formData"));
};
document.addEventListener("DOMContentLoaded", async () =>{
	const productosLista = new Productos();
	const ui = new UI();

	ui.setAPP()

	productos = await productosLista.getProductos()
	
		ui.getButtons();
		ui.cartLogic();
	
})

