<template>
  <div>
    <hr class="my-4 md:min-w-full" />

    <details class="sidebar__collapse" open>
      <summary>
        <h6 class="collapse__title">{{ headerTitle }}</h6>
      </summary>
      <ul class="collapse__content">
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
  methods: {},
  components: {},
};
</script>
