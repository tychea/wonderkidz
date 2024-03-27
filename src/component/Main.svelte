<script>
  import Product from '../miniComponent/Product.svelte';
  import { getAllProducts } from '../utils/api';
  let selectTab = 'All Products';
</script>

<main>
  <div class="wrapper">
    {#await getAllProducts()}
      ...waiting
    {:then products}
      {#each products as product}
        <Product {product} />
      {/each}
    {/await}
  </div>
</main>

<style>
  main {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
    overflow: scroll;
    scroll-behavior: smooth;
  }

  .wrapper {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0px, 1fr));
    gap: 2rem;
    width: 90%;
  }
  /* tablet screen size */
  @media screen and (min-width: 767px) {
    .wrapper {
      width: 750px;
      grid-template-columns: repeat(4, minmax(0px, 1fr));
    }
  }
  /*laptop screen size */
  @media screen and (min-width: 992px) {
    .wrapper {
      width: 970px;
    }
  }
  /* desktop screen size */
  @media screen and (min-width: 1200px) {
    .wrapper {
      width: 90%;
    }
  }
</style>
