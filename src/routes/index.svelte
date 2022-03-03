<script lang="ts">
  import {_} from 'svelte-i18n';

  let title = 'boilderplate';
</script>

<h1>
  Welcome to SvelteKit {title}
  {$_('user')}
</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
