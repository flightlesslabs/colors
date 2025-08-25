<script lang="ts">
  import Swatches from './Swatches/Swatches.svelte';
  import { colorPalette, colorPaletteBase, colorPaletteNeutral } from './utils/color.js';

  interface ColorsProps {
    swatchType?:
      | 'base-colors'
      | 'base-colors-neutral'
      | 'colors'
      | 'colors-neutral'
      | 'colors-constant';
  }

  const { swatchType }: ColorsProps = $props();
</script>

<div class="Colors">
  {#if swatchType === 'base-colors'}
    {#each colorPaletteBase as colorPaletteItem (colorPaletteItem)}
      <Swatches colorPalette={colorPaletteItem} prefix="--dodo-color-base-" isColorPaletteValues />
    {/each}
  {:else if swatchType === 'base-colors-neutral'}
    {#each colorPaletteNeutral as colorPaletteItem (colorPaletteItem)}
      <Swatches colorPalette={colorPaletteItem} prefix="--dodo-color-base-" />
    {/each}
  {:else if swatchType === 'colors'}
    {#each colorPalette as colorPaletteItem (colorPaletteItem)}
      <Swatches colorPalette={colorPaletteItem} isColorPaletteValues />
    {/each}
  {:else if swatchType === 'colors-neutral'}
    {#each colorPaletteNeutral as colorPaletteItem (colorPaletteItem)}
      <Swatches colorPalette={colorPaletteItem} />
    {/each}
  {:else if swatchType === 'colors-constant'}
    {#each colorPaletteNeutral as colorPaletteItem (colorPaletteItem)}
      <Swatches colorPalette={colorPaletteItem} prefix="--dodo-color-constant-" />
    {/each}
  {/if}
</div>

<style lang="scss">
  .Colors {
    display: flex;
    flex-direction: column;
  }
</style>
