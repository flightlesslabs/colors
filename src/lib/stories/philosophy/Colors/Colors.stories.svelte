<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Colors from './Colors.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Colors,
    args: {
      swatchType: 'colors',
    },
  });
</script>

<Story name="Main" />

<Story name="ColorsNeutral" args={{ swatchType: 'colors-neutral' }} />

<Story name="ColorsConstant" args={{ swatchType: 'colors-constant' }} />

<Story name="ColorsBase" args={{ swatchType: 'base-colors' }} />

<Story name="BaseColorsNeutral" args={{ swatchType: 'base-colors-neutral' }} />
