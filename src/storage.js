const saveShoppingStorage = (buyingKart) => {
    localStorage.setItem('shoppingKart', JSON.stringify(buyingKart)); 

};

const loadShoppingStorage = () => {
  const shoppingStorage = JSON.parse(localStorage.getItem('shoppingKart'));
  return shoppingStorage ;  
}

export {saveShoppingStorage, loadShoppingStorage};