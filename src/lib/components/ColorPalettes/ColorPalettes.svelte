<script lang="ts" module>
  export interface ColorPalettesProps {
    /** Custom CSS class names */
    class?: string;

    /** title */
    title: string;

    /** Color Variations */
    colorVariations: string[];
  }
</script>

<script lang="ts">
  import ColorPalette from '../ColorPalette/ColorPalette.svelte';

  let { class: className = '', title, colorVariations }: ColorPalettesProps = $props();

  const classes = $derived(['ColorPalettes', className].filter(Boolean));
</script>

<div class={classes.join(' ')}>
  <p>{title}</p>
  <section>
    {#each colorVariations as colorVariation (colorVariation)}
      <ColorPalette colorName={colorVariation} />
    {/each}
  </section>
</div>

<style lang="scss">
  .ColorPalettes {
    display: flex;
    align-items: center;
    margin: 8px 0;
    flex-wrap: nowrap;

    p {
      min-width: 100px;
      max-width: 100px;
      font-weight: 500;
      font-size: 0.9rem;
      text-transform: capitalize;
      margin: 0;
      color: var(--dodo-color-neutral-900);
    }

    section {
      display: flex;
      flex-wrap: nowrap;
      margin: 0 -8px;

      :global(.ColorPalette) {
        margin: 0 8px;
      }
    }
  }
</style>
