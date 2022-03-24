
let domOfertas = document.querySelector(".oferta")
let domPc = document.querySelector(".pc")
let oferta =""
let pc =""

document.addEventListener("DOMContentLoaded", async () =>{
	const productosLista = new Productos();
	const ui = new UI();

	ui.setAPP()

	productos = await productosLista.getProductos()
	oferta = productos.filter(regx => regx.temporada === "oferta")
    pc = productos.filter(regx => regx.category === "pcArmada")
	
		ui.renderProductos(oferta, domOfertas)
        ui.renderProductos(pc, domPc)
		Storage.saveProduct(productos)
		ui.getButtons();
		ui.cartLogic();
	
})
