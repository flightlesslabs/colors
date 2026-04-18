<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Spectrum from './Spectrum.svelte';
  import { appColorsList } from '$lib/helpers/color-list.js';

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: Spectrum,
    tags: ['autodocs'],
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story
  name="Default"
  args={{
    colorList: appColorsList,
  }}
/>
