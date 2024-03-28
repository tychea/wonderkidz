<script>
  import Product from '../miniComponent/Product.svelte';
  import { getAllProducts } from '../utils/api';
  import { searchById, productsList } from '../store/store';
  import { onMount } from 'svelte';
  onMount(async () => {
    $productsList = await getAllProducts();
  });
</script>

<main>
  <div class="wrapper">
    <!-- check if the product list is not empty array object and the first object is not empty -->

    {#if $productsList.length > 0 && Object.keys($productsList[0]).length !== 0}
      {#each $productsList as product}
        <Product {product} />
      {/each}
    {:else}
      <p>No Result Found</p>
    {/if}
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
    padding: 5% 0;
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
