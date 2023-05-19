import { chechRepeatedProduct }  from "./src/accionesCarrito.js";
import { getProducts} from "./src/getProducts.js";
const showProducts = async () => {
    const contenedorProductos = document.getElementById("producto-contenedor");
  
    const products= await getProducts();
    products.forEach(product => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML += `<div class="card-image">
                          <img src=${product.img}>
                          <span class="card-title">${product.name}</span>
                          <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${product.id}><i class="material-icons">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>${product.desc}</p>
                            <p>${product.price}</p>
                        </div>
                       `
      contenedorProductos.appendChild(div);
  
      const boton = document.getElementById(`boton${product.id}`);
      boton.addEventListener('click', () => {
        chechRepeatedProduct(product.id);
      })
    });
  };
  
export {showProducts};