<template>
  <div>
    <hr class="my-4 md:min-w-full" />

    <details class="sidebar__collapse" @toggle="toggleDetails" open>
      <summary>
        <h6 class="collapse__title">{{ headerTitle }}</h6>
      </summary>
      <ul ref="content" class="collapse__content">
        <slot />
      </ul>
    </details>
  </div>
</template>

<script>
export default {
  props: {
    headerTitle: {
      types: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    toggleDetails(event) {
      const content = this.$refs.content;
      if (event.target.open) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    },
  },
  components: {},
};
</script>
