<style lang="postcss">
  @custom-media --mobile (max-width: 640px);
  main {
    background-color: gray;

    @media (--mobile) {
      background-color: red;
    }
  }
</style>

<script lang="ts">
  import '../app.css';
</script>

<main>
  <slot />
</main>
