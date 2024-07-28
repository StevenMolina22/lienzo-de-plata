<template>
  <!--Gallery page Single-->
  <div class="gallery-page__single">
    <div class="gallery-page__img-box">
      <img :src="require(`~/assets/images${thumbnail}`)" :alt="title" />
      <div class="gallery-page__hover-content-box">
        <h2 v-html="title"></h2>
        <p>{{ category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    category: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
  },
};
</script>
