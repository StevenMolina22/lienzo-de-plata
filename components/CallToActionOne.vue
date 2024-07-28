<template>
  <!--Become Volunteer Start-->
  <section class="become-volunteer">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="become-volunteer__inner">
            <div class="become-volunteer__left">
              <h2 v-html="callToAction.title"></h2>
              <div class="become-volunteer__big-text">
                <h2>{{ callToAction.floatedText }}</h2>
              </div>
            </div>
            <div class="become-volunteer__btn-box">
              <nuxt-link
                :to="callToAction.button.url"
                class="become-volunteer__btn thm-btn"
              >
                <i class="fas fa-arrow-circle-right"></i>
                {{ callToAction.button.label }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Become Volunteer End-->
</template>

<script>
import data from "~/data/data.json";
export default {
  data() {
    return {
      callToAction: data.callToAction,
    };
  },
};
</script>
