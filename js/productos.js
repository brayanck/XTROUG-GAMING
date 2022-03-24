
let category = "";
let domComponentes = document.querySelector(".hola")
let componentes =""

document.addEventListener("DOMContentLoaded", async () =>{
	const productosLista = new Productos();
	const ui = new UI();

	ui.setAPP()

	productos = await productosLista.getProductos()
	componentes = productos.filter(regx => regx.tipo === "componentes")
	
		ui.renderProductos(componentes, domComponentes)
		Storage.saveProduct(productos)
		ui.getButtons();
		ui.cartLogic();
	
})


function categoryValue(){
	const ui = new UI();
 
	category = document.getElementById("category").value
	if(category.length > 0){
		const producto = productos.filter(regx => regx.category === category)
		ui.renderProductos(producto, domComponentes)
		ui.getButtons();
	}else{
		ui.renderProductos(componentes, domComponentes)
		ui.getButtons();
	
	}
}


