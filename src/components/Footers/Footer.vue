<template>
  <footer class="footer">
    <div class="footer__inner">
      Copyright © {{ date }} Abacus by
      <em> Publishing Team </em>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
