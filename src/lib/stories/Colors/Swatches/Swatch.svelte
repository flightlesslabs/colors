<script lang="ts">
  import Palette from './Palette.svelte';

  interface SwatchProps {
    colorPalette: string;
    colorPaletteValue?: string;
    prefix?: string;
  }

  const { colorPalette, colorPaletteValue, prefix = '--dodo-color-' }: SwatchProps = $props();
</script>

<div class="Swatch">
  {#if colorPaletteValue}
    <Palette backgroundColor={`var(${prefix}${colorPalette}-${colorPaletteValue})`} />
  {:else}
    <Palette backgroundColor={`var(${prefix}${colorPalette})`} />
  {/if}

  <div class="colorPaletteValue">{colorPaletteValue}</div>
</div>

<style lang="scss">
  .Swatch {
    color: var(--dodo-color-neutral-900);
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 4px;

    .colorPaletteValue {
      margin-top: 8px;
    }
  }
</style>
