<script>
  export let product = {
    id: '',
    name: 'image name',
    price: 0,
    imgUrl: '',
  };
</script>

<div class="container">
  <img src={product.imgUrl} alt={product.name} />

  <ul>
    <li class="truncatedText">
      {product.name}
    </li>
    <li>
      {product.price}
    </li>
  </ul>
</div>

<style>
  .container {
    display: flex;
    flex-flow: column;
    border: 1px solid var(--color-grey);
    padding: 2rem;

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      aspect-ratio: 9/16;
    }
  }
  ul {
    list-style-type: none;
    width: 100%;
    & li {
      display: flex;
      justify-content: space-between;
      padding-top: 0.2rem;
    }
  }
  .truncatedText {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
