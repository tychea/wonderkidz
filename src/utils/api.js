export let getAllProducts = async () => {
  try {
    const response = await fetch('http://localhost:3000/products');
    if (!response.ok) {
      throw new Error('Request failed!');
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export let getProductsById = async (id) => {
  try {
    if (id === '') return {};
    const response = await fetch(`http://localhost:3000/products/${id}`);
    if (!response.ok) {
      throw new Error('Request failed!');
    }

    return response.json();
  } catch (error) {
    return {};
  }
};
