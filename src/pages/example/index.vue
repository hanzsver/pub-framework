<script setup lang="ts">
const exampleMenuList = ref([
  {
    menuId: 'BUTTON',
    menuName: '버튼 예제',
    menuUrl: 'buttons',
  },
]);
const router = useRouter();

const moveExamplePate = (menuUrl: string) => {
  router.push(`/example/${menuUrl}`);
};
</script>

<template>
  <div class="flex flex-col items-center">
    <h2 class="mb-10 text-3xl font-600">UI Components</h2>

    <ul>
      <li
        v-for="example in exampleMenuList"
        :key="example.menuId"
        class="flex items-center justify-center w-96 px-6 py-4 bg-slate-100 rounded-full cursor-pointer hover:shadow-md transition"
        @click="moveExamplePate(example.menuUrl)"
      >
        <span>
          {{ example.menuName }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style></style>
