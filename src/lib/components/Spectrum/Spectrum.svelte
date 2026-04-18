<script lang="ts" module>
  export interface SpectrumProps {
    /** Custom CSS class names */
    class?: string;

    /** Color Variations */
    colorList: Record<string, string[]>;
  }
</script>

<script lang="ts">
  import ColorPalettes from '../ColorPalettes/ColorPalettes.svelte';

  let { class: className = '', colorList }: SpectrumProps = $props();

  const classes = $derived(['Spectrum', className].filter(Boolean));
</script>

<div class={classes.join(' ')}>
  {#each Object.entries(colorList) as [colorName, colorVariation] (colorName)}
    <ColorPalettes title={colorName} colorVariations={colorVariation} />
  {/each}
</div>

<style lang="scss">
  .Spectrum {
    display: flex;
    flex-direction: column;
  }
</style>
