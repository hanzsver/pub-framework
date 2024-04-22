<template>
  <main>
    <index-navbar />
    <section class="relative pt-16 items-center flex h-screen max-h-860-px">
      <div class="container mx-auto items-center flex flex-wrap">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div class="pt-32 sm:pt-0">
            <h2 class="font-semibold text-4xl text-blueGray-600">Pub Framework</h2>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              Pub Framework는 빠른 웹서비스 구축을 위한 시작의 기반입니다. UI 가이드라인과 샘플을 포함하며 모든 서비스
              개발에서의 일관된 코드 작성을 도와줍니다.
            </p>
            <div class="mt-12">
              <router-link
                to="/admin/dashboard"
                class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-emerald-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Get started
              </router-link>
              <a
                href="https://github.com/hanzsver/pub-framework"
                class="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer-component />
  </main>
</template>
<script>
import IndexNavbar from '@/components/Navbars/IndexNavbar.vue';
import FooterComponent from '@/components/Footers/Footer.vue';

import patternVue from '@/assets/img/pattern_vue.png';
import componentBtn from '@/assets/img/component-btn.png';
import componentProfileCard from '@/assets/img/component-profile-card.png';
import componentInfoCard from '@/assets/img/component-info-card.png';
import componentInfo2 from '@/assets/img/component-info-2.png';
import componentMenu from '@/assets/img/component-menu.png';
import componentBtnPink from '@/assets/img/component-btn-pink.png';
import documentation from '@/assets/img/documentation.png';
import login from '@/assets/img/login.jpg';
import profile from '@/assets/img/profile.jpg';
import landing from '@/assets/img/landing.jpg';

export default {
  data() {
    return {
      patternVue,
      componentBtn,
      componentProfileCard,
      componentInfoCard,
      componentInfo2,
      componentMenu,
      componentBtnPink,
      documentation,
      login,
      profile,
      landing,
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
};
</script>
