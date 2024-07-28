<template>
  <!--Page Header Start-->
  <section class="page-header">
    <div
      class="page-header__bg"
      :style="`background-image: url(${require(`~/assets/images/backgrounds/page-header-bg-1-1.jpg`)})`"
    ></div>
    <!-- /.page-header__bg -->
    <div class="container">
      <h2>{{ pageTitle }}</h2>
      <ul class="thm-breadcrumb list-unstyled">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li class="color-thm-gray">/</li>
        <li>
          <span>{{ pageName }}</span>
        </li>
      </ul>
    </div>
  </section>
  <!--Page Header End-->
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
    },
    pageName: {
      type: String,
    },
  },
};
</script>
