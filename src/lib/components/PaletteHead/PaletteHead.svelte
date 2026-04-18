<script lang="ts" module>
  export interface PaletteHeadProps {
    /** Custom CSS class names */
    class?: string;
  }
</script>

<script lang="ts">
  let { class: className = '' }: PaletteHeadProps = $props();

  const classes = $derived(['PaletteHead', className].filter(Boolean));

  const scales = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
</script>

<div class={classes.join(' ')}>
  <p></p>
  {#each scales as scale (scale)}
    <div class="Cell">
      {scale}
    </div>
  {/each}
</div>

<style lang="scss">
  .PaletteHead {
    display: flex;
    margin: 0 -8px;
    margin-bottom: 16px;

    p {
      min-width: 100px;
      max-width: 100px;
      margin: 0;
    }

    .Cell {
      min-width: 65px;
      max-width: 65px;
      margin: 0 8px;
      font-weight: 500;
      font-size: 0.9rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
