<script lang="ts" module>
  export interface ColorPaletteProps {
    /** Custom CSS class names */
    class?: string;

    /** Color Name */
    colorName: string;
  }
</script>

<script lang="ts">
  let { class: className = '', colorName }: ColorPaletteProps = $props();

  const classes = $derived(['ColorPalette', className].filter(Boolean));
  const colorNameVar = $derived(`var(${colorName})`);

  async function copyText(toCopy: string) {
    try {
      await navigator.clipboard.writeText(toCopy);
      console.log('Copied to clipboard!', toCopy);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
</script>

<button
  class={classes.join(' ')}
  style:background={colorNameVar}
  title={colorNameVar}
  onclick={() => copyText(colorNameVar)}
>
</button>

<style lang="scss">
  .ColorPalette {
    display: inline-flex;
    min-width: 65px;
    max-width: 65px;
    height: 40px;
    border-radius: 8px;
    corner-shape: squircle;
    border: 0;
    cursor: pointer;
    transition:
      transform 50ms,
      border-radius 100ms;
    border: 1px solid oklab(0 0 0 / 0.15);

    &:hover {
      border-radius: 14px;
      border: 2px solid oklab(0 0 0 / 0.7);
    }

    &:active {
      transform: scale(0.95);
      border-radius: 999px;
    }
  }
</style>
