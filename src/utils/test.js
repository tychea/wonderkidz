import { getUserData } from './api.js';
async function testApi() {
  try {
    const data = await getUserData();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}
testApi();
