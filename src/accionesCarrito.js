import { updateTotalShoppingKart } from './updateKart.js';
import{products} from './stock.js';
import { loadShoppingStorage } from './storage.js';
// import { addToKart } from './acciones.js';

let shoppingKart = [];

const chechRepeatedProduct = (productId) => {
  
  if (localStorage.getItem('shoppingKart')){
    shoppingKart = loadShoppingStorage();
  }
  const repeatedProduct = shoppingKart.find((product) => product.id === productId);

    if (repeatedProduct) {
        repeatedProduct.cantidad++;
        const cantidadProducto = document.getElementById(`cantidad${repeatedProduct.id}`);
        cantidadProducto.innerText = `cantidad: ${repeatedProduct.cantidad}`;
        updateTotalShoppingKart(shoppingKart);
    } else {
        addToKart(productId);
    }
  };

const addToKart = (productId) => {
    const container = document.getElementById('carrito-contenedor');
    const product = products.find(product => product.id === productId);
    shoppingKart.push(product);
    Toastify({

      text: "Se comenzo a llenar el carrito",
      
      duration: 2000,

      style: {
        background: 'linear-gradient(to right, #d77136, #e1ad28)'
      }
      }).showToast();
/* 
    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
     /* Operador AND // 
    Le digo que cuando me diga que el carrito ya no esta en cero es porque empezo a llenarse */
   shoppingKart !=0 && console.log("Se comienza llenado de carrito");/* 
   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${product.name}</p>
                    <p>Precio: ${product.price}</p>
                    <p id=cantidad${product.id}>Cantidad: ${product.cantidad}</p>
                    <button id=eliminar${product.id} value='${product.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button>
                    `;
    container.appendChild(div);
    updateTotalShoppingKart(shoppingKart);
};

// kartDraw recibe por parámetro un array de objetos
const kartDraw  = (shoppingKart) => {
    const container = document.getElementById('carrito-contenedor');

    container.innerHTML = '';

    shoppingKart.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${product.name}</p>
                        <p>Precio: ${product.price}</p>
                        <p id=cantidad${product.id}>Cantidad: ${product.cantidad}</p>
                        <button id=eliminar${product.id} value='${product.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button>
                        `;
        container.appendChild(div);
    });
};

const deleteProductFromKart = (productId) => {
    const kartStorage = loadShoppingStorage();
    const updatedShoppingKart = kartStorage.filter(product => product.id != productId);

    updateTotalShoppingKart(updatedShoppingKart);
    kartDraw (updatedShoppingKart);
};

export { addToKart, chechRepeatedProduct, kartDraw , deleteProductFromKart };


