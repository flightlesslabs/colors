<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ColorPalettes from './ColorPalettes.svelte';
  import { appColorsList } from '$lib/helpers/color-list.js';

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: ColorPalettes,
    tags: ['autodocs'],
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story
  name="Default"
  args={{
    title: 'primary',
    colorVariations: appColorsList.primary,
  }}
/>
