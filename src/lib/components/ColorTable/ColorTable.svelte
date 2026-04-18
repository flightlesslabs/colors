<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import PaletteHead from '../PaletteHead/PaletteHead.svelte';

  export interface ColorTableProps {
    /** Custom CSS class names */
    class?: string;

    /** children */
    children?: Snippet;
  }
</script>

<script lang="ts">
  let { class: className = '', children }: ColorTableProps = $props();

  const classes = $derived(['ColorTable', className].filter(Boolean));
</script>

<div class={classes.join(' ')}>
  <PaletteHead />
  {@render children?.()}
</div>

<style lang="scss">
  .ColorTable {
    overflow-x: auto;
    padding: 24px;
    background-color: var(--dodo-color-white);
    border-radius: 6px;

    :global(.Spectrum) {
      margin-bottom: 40px;
    }
  }
</style>
