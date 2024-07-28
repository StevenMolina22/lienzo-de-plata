<template>
  <!--Join One Start-->
  <section :class="`join-one ${className}`">
    <client-only>
      <div
        class="join-one-bg jarallax"
        data-jarallax
        data-speed="0.2"
        data-imgPosition="50% 0%"
      >
        <img
          src="~/assets/images/backgrounds/join-one-bg.jpg"
          class="jarallax-img"
        />
      </div>
    </client-only>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="join-one__inner">
            <h2 class="join-one__title">
              Join the community to give <br />
              education for children
            </h2>
            <nuxt-link to="/become-volunteer" class="join-one__btn thm-btn">
              <i class="fas fa-arrow-circle-right"></i>
              Learn More
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Join One End-->
</template>
<script>
export default {
  props: {
    className: {
      type: String,
    },
  },
};
</script>
