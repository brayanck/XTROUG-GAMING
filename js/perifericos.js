
let category = "";
let domPerifericos = document.querySelector(".perifericos")
let perifericos =""

document.addEventListener("DOMContentLoaded", async () =>{
	const productosLista = new Productos();
	const ui = new UI();

	ui.setAPP()

	productos = await productosLista.getProductos()
	perifericos = productos.filter(regx => regx.tipo === "perifericos")
    console.log(perifericos)
    console.log(productos)
	
		ui.renderProductos(perifericos, domPerifericos)
		Storage.saveProduct(productos)
		ui.getButtons();
		ui.cartLogic();
	
})


function categoryValue(){
	const ui = new UI();
 
	category = document.getElementById("category").value
	if(category.length > 0){
		const producto = productos.filter(regx => regx.category === category)
		ui.renderProductos(producto, domPerifericos)
		ui.getButtons();
	}else{
		ui.renderProductos(perifericos, domPerifericos)
		ui.getButtons();
	
	}
}