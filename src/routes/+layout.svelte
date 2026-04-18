<script lang="ts">
  import '$lib/styles/colors-base.scss';
  import '$lib/styles/colors.scss';
  import '$lib/styles/code.scss';

  let { children } = $props();
</script>

<main>
  {@render children()}
</main>

<style lang="scss">
  :global(*) {
    box-sizing: border-box;
  }

  :global(html) {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  :global(body) {
    margin: 0;
    padding: 0;
  }

  main {
    padding: 8px;
    margin: 0 auto;
    max-width: 1100px;
  }
</style>
