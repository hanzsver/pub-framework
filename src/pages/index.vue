<script setup lang="ts"></script>
<template>
  <section class="landing">
    <div>
      <h2 class="font-semibold text-4xl text-blueGray-600">Pub Framework</h2>
      <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
        Pub Framework는 빠른 웹서비스 구축을 위한 시작의 기반입니다. UI
        가이드라인과 샘플을 포함하며 모든 서비스 개발에서의 일관된 코드 작성을
        도와줍니다.
      </p>
      <div class="landing__btn-area">
        <router-link to="/example" class="btn__full--primary-lg">
          Get started
        </router-link>
        <a
          href="https://github.com/hanzsver/pub-framework"
          target="_blank"
          class="btn__line--primary-lg"
        >
          Github
        </a>
      </div>
    </div>
  </section>
</template>
