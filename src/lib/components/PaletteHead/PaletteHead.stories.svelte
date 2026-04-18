<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import PaletteHead from './PaletteHead.svelte';

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: PaletteHead,
    tags: ['autodocs'],
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" />
