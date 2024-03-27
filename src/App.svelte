<script>
  import Header from './component/Header.svelte';
  import MainContent from './component/Main.svelte';
</script>

<!-- <div class="logoContainer">
  <img src="src/assets/img/logo.JPG" alt="LOGO" />
</div> -->

<Header />
<MainContent />

<style>
  /* .logoContainer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      height: 20%;
      border-radius: 50%;
      animation: fadeIn 3s ease-in-out;
      border: 1px solid var(--color-grey);
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  } */
</style>
