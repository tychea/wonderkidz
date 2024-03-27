export let getUserData = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    if (!response.ok) {
      throw new Error('Request failed!');
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
export let getAllProducts = async () => {
  try {
    const response = await fetch('http://192.168.156.40:3000/products');
    if (!response.ok) {
      throw new Error('Request failed!');
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
