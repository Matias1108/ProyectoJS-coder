import { saveShoppingStorage } from "./storage.js";

const updateTotalShoppingKart = (shoppingKart) => {
    const cantidadTotal = shoppingKart.reduce ((acc, producto)=> acc + producto.cantidad, 0)
   const totalBuy = shoppingKart.reduce ((acc, producto) => acc + (producto.price * producto.cantidad), 0);

   totalShoppingKartDraw(cantidadTotal, totalBuy);
   saveShoppingStorage(shoppingKart);
};
const totalShoppingKartDraw = (cantidadTotal, totalBuy) => {
    const counterShoppingKart = document.getElementById('contador-carrito');
    const totalPrice = document.getElementById('precioTotal'); 

    counterShoppingKart.innerText = cantidadTotal;
    totalPrice.innerText = totalBuy;
}

export {updateTotalShoppingKart}; 
/* 
totalShoppingKartDraw(cantidadTotal, totalBuy */