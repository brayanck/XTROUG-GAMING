const inputs = document.querySelectorAll("#formulario input");
document.addEventListener("DOMContentLoaded", async () =>{
	const productosLista = new Productos();
	const ui = new UI();

	ui.setAPP()

	productos = await productosLista.getProductos()
	
		ui.getButtons();
		ui.cartLogic();
	
})
function dispData() {
    const valorInput = document.getElementById("correo").value;
    const contras = document.getElementById("password").value;
    const boton = document.querySelector(".formulario__btn");
    if (localStorage.getItem("formData")) {
        const cuenta = JSON.parse(localStorage.getItem("formData"));
        const {correo, contraseña} = cuenta
            console.log(correo)
            console.log(contraseña)
            boton.addEventListener("click", (e) => {
            e.preventDefault();
            if (correo === valorInput && contraseña === contras) {
                Swal.fire({ 
                    icon: 'success',
                    title: 'HAS INICIADO SESION',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                  })
                  setTimeout(() => {
                    window.location.href = "../index.html";
                }, 1500);
                document.getElementById("formulario__mensaje").classList.remove("formulario__mensaje-activo");
            } else{
                document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
                setTimeout(() => {
                    document.getElementById("formulario__mensaje").classList.remove("formulario__mensaje-activo");
                }, 3000)
            }
            
        });
    }else{
        boton.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
                setTimeout(() => {
                    document.getElementById("formulario__mensaje").classList.remove("formulario__mensaje-activo");
                }, 3000)
        })
    }
}
inputs.forEach((input) => {
    input.addEventListener("keyup", dispData);
    input.addEventListener("blur", dispData);
});
