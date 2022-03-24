let category = "";
let domNotebooks = document.querySelector(".notebooks")
let notebooks =""

document.addEventListener("DOMContentLoaded", async () =>{
	const productosLista = new Productos();
	const ui = new UI();

	ui.setAPP()

	productos = await productosLista.getProductos()
	notebooks = productos.filter(regx => regx.tipo === "notebooks")
    console.log(notebooks)
    console.log(productos)
	
		ui.renderProductos(notebooks, domNotebooks)
		Storage.saveProduct(productos)
		ui.getButtons();
		ui.cartLogic();
	
})
