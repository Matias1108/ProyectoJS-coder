const getProducts = async () => {
  try {
    const response = await fetch("./src/data/stock.json");
    const data = await response.json();

    return data;
  } catch (error) {
    console.log( 'Se produjo un error:', error );
    
  }
};

getProducts();

export{getProducts} 
