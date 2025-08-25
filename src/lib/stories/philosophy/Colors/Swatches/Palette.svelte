<script lang="ts">
  interface PaletteProps {
    backgroundColor: string;
  }

  const { backgroundColor }: PaletteProps = $props();

  function onclick() {
    navigator.clipboard.writeText(backgroundColor);
  }
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button
  class="Palette"
  style={`background-color: ${backgroundColor};`}
  {onclick}
  title="Click to copy value!"
></button>

<style lang="scss">
  .Palette {
    display: flex;
    width: 60px;
    height: 60px;
    border-radius: 4px;
    border: 1px solid;
    border-color: color-mix(in oklab, var(--dodo-color-neutral-800) 20%, transparent);
    background: transparent;
    min-width: initial;
    margin: 0;
    padding: 0;
    cursor: pointer;
    outline: 0;
    transition: all 100ms;

    &:hover {
      border-width: 2px;
    }

    &:active {
      border-color: color-mix(in oklab, var(--dodo-color-primary-800) 80%, transparent);
      border-width: 2px;
    }
  }
</style>
