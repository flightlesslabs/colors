<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ColorTable from './ColorTable.svelte';
  import Spectrum from '../Spectrum/Spectrum.svelte';
  import { baseColorsList, appColorsList } from '$lib/helpers/color-list.js';

  // ------------------------------
  // Storybook Meta
  // ------------------------------
  const { Story } = defineMeta({
    component: ColorTable,
    tags: ['autodocs'],
  });
</script>

<!-- ------------------------------ -->
<!-- Stories -->
<!-- ------------------------------ -->

<Story name="Default">
  <Spectrum colorList={appColorsList} />
  <Spectrum colorList={baseColorsList} />
</Story>
