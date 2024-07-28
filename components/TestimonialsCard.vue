<template>
  <!--Testimonial One Single-->
  <div :class="`testimonial-one__single ${className}`">
    <p class="testimonial-one__text" v-html="excerpt"></p>
    <div class="testimonial-one__client-info">
      <div class="testimonial-one__client-img">
        <img :src="require(`~/assets/images${thumbnail}`)" :alt="name" />
        <div class="testimonial-one__quote"></div>
      </div>
      <div class="testimonial-one__client-name">
        <h3 v-html="name"></h3>
        <p v-html="designation"></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    className: {
      type: String,
    },
    designation: {
      type: String,
    },
    name: {
      type: Object,
    },
    thumbnail: {
      type: String,
    },
    excerpt: {
      type: String,
    },
  },
};
</script>
