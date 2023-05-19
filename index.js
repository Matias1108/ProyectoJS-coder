import { showProducts } from "./App.js"
import { kartDraw } from "./src/accionesCarrito.js";
import { updateTotalShoppingKart } from "./src/updateKart.js";
/* import { products } from "./src/stock.js" */
import { loadShoppingStorage } from "./src/storage.js";

document.addEventListener('DOMContentLoaded', () =>{
    showProducts()

    if(localStorage.getItem('shoppingKart')){
        const shoppingKart = loadShoppingStorage();  
        //se pintan los productos en el carrito de compra.
        kartDraw(shoppingKart);
        updateTotalShoppingKart(shoppingKart);
    };
});