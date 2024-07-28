<template>
  <!--Help Them Start-->
  <section class="help-them">
    <client-only>
      <div
        class="help-them-bg jarallax"
        data-jarallax
        data-speed="0.2"
        data-imgPosition="50% 0%"
      >
        <img
          src="~/assets/images/backgrounds/help-them-bg.jpg"
          class="jarallax-img"
        />
      </div>
    </client-only>
    <div class="container">
      <div class="help-them__top">
        <div class="row">
          <div class="col-xl-8 col-lg-8">
            <div class="help-them__top-content">
              <h2 class="help-them__top-content-title">
                Help them whenever they are in need
              </h2>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4">
            <div class="help-them__top-video-box">
              <a
                href="https://www.youtube.com/watch?v=i9E_Blai8vk"
                class="help-them__top-video-btn video-popup"
                ><i class="fa fa-play"></i
              ></a>
              <p class="help-them__top-video-text">Watch the Video</p>
            </div>
          </div>
        </div>
      </div>
      <div class="help-them__bottom">
        <div class="row">
          <div
            class="col-xl-4 col-lg-4"
            v-for="(item, index) in videoFeatures"
            :key="index"
          >
            <!--Help Them Single-->
            <div class="help-them__single">
              <div class="help-them__icon">
                <span :class="item.icon"></span>
              </div>
              <div class="help-them__text">
                <h3 v-html="item.title" />
                <p v-html="item.text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Help Them End-->
</template>
<script>
import data from "~/data/data.json";
export default {
  data() {
    return {
      videoFeatures: data.videoFeatures,
    };
  },
  mounted() {
    new GLightbox({
      selector: ".video-popup",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });
  },
};
</script>
