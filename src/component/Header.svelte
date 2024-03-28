<script>
  import { searchId, searchById, productsList } from '../store/store';
  import { getProductsById, getAllProducts } from '../utils/api';

  async function handleSubmit() {
    /* check if searchbox is empty 
    -> if empty will search for all products instead
    -> if not empty will search by that product id
    */
    if ($searchId.trim().length === 0) {
      $productsList = await getAllProducts();
    } else {
      $productsList = [await getProductsById($searchId)];
    }
  }
</script>

<nav>
  <div class="wrapper">
    <div class="logoWrapper">
      <img src="src/assets/img/logo.JPG" alt="LOGO" />
      <p>Wöndèrkidź</p>
    </div>
    <form class="searchBar" on:submit|preventDefault={handleSubmit}>
      <input type="text" placeholder="Search..." bind:value={$searchId} />
    </form>
  </div>
</nav>

<style>
  nav {
    height: 7rem;
    display: flex;
    justify-content: center;
    position: relative;
  }
  nav::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: var(--color-grey);
    left: 0;
    bottom: 0;
  }
  .wrapper {
    height: 100%;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logoWrapper {
    height: 100%;
    display: flex;
    align-items: center;
    & p {
      color: var(--color-black-80);
    }
    & img {
      border: 0.1rem solid var(--color-purple);
      height: 4rem;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }

  ul {
    list-style-type: none;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    height: 100%;
    align-items: center;
    & li,
    input {
      height: 4rem;
      display: flex;
      align-items: center;
      border-radius: 2.5rem;
      color: var(--color-black-80);
      font-size: 1.4rem;
    }
    & li {
      padding: 0 2rem;
      margin-right: 2rem;
      background-color: var(--color-black-80);
      color: white;
    }
    & li:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  .searchBar {
    & input {
      outline: none;
      appearance: none;
      border: 1px solid var(--color-grey);
      padding: 1rem;
      border-radius: 2.5rem;
    }
  }
  /* tablet screen size */
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    nav {
    }
  }
  /* desktop screen size */
  @media screen and (min-width: 1024px) {
    nav {
    }
  }
</style>
