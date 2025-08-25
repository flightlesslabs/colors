<script lang="ts">
  import Palette from './Swatches/Palette.svelte';
</script>

<div class="Opacity">
  <Palette backgroundColor="color-mix(in oklab, var(--dodo-color-primary-800) 10%, transparent)" />
  <Palette backgroundColor="color-mix(in oklab, var(--dodo-color-primary-800) 20%, transparent)" />
  <Palette backgroundColor="color-mix(in oklab, var(--dodo-color-primary-800) 30%, transparent)" />
  <Palette backgroundColor="color-mix(in oklab, var(--dodo-color-primary-800) 40%, transparent)" />
  <Palette backgroundColor="color-mix(in oklab, var(--dodo-color-primary-800) 50%, transparent)" />
  <Palette backgroundColor="color-mix(in oklab, var(--dodo-color-primary-800) 60%, transparent)" />
  <Palette backgroundColor="color-mix(in oklab, var(--dodo-color-primary-800) 70%, transparent)" />
  <Palette backgroundColor="color-mix(in oklab, var(--dodo-color-primary-800) 80%, transparent)" />
  <Palette backgroundColor="color-mix(in oklab, var(--dodo-color-primary-800) 90%, transparent)" />
  <Palette backgroundColor="color-mix(in oklab, var(--dodo-color-primary-800) 100%, transparent)" />
</div>

<style lang="scss">
  .Opacity {
    display: flex;
    flex-wrap: wrap;
  }
</style>
