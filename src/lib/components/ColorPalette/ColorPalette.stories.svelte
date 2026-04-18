<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ColorPalette from './ColorPalette.svelte';

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: ColorPalette,
    tags: ['autodocs'],
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default" args={{ colorName: '--dodo-color-primary-400' }} />
