<script lang="ts">
  import { colorPaletteValues } from '../utils/color.js';
  import Swatch from './Swatch.svelte';

  interface SwatchesProps {
    colorPalette: string;
    prefix?: string;
    isColorPaletteValues?: boolean;
  }

  const { colorPalette, prefix, isColorPaletteValues = false }: SwatchesProps = $props();
</script>

<ul class="Swatches">
  <b>{colorPalette}</b>

  {#if isColorPaletteValues}
    {#each colorPaletteValues as colorPaletteValue (colorPaletteValue)}
      <li>
        <Swatch {colorPalette} {colorPaletteValue} {prefix} />
      </li>
    {/each}
  {:else}
    <li>
      <Swatch {colorPalette} {prefix} />
    </li>
  {/if}
</ul>

<style lang="scss">
  .Swatches {
    color: var(--dodo-color-neutral-900);
    margin: 0;
    padding: 0;
    width: 150px;
    margin: 16px 0;
    display: flex;
    width: 100%;

    b {
      text-transform: capitalize;
      display: flex;
      font-weight: 500;
      width: 100px;
      align-items: center;
      margin-bottom: 30px;
    }

    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
  }
</style>
