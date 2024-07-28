<template>
  <!--Welcome One Start-->
  <section class="welcome-one">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="welcome-one__left">
            <div class="welcome-one__img-box">
              <img src="~images/resources/welcome-one-img-1.jpg" alt="" />
              <div class="welcome-one__img-box-2">
                <img src="~images/resources/welcome-one-img-2.jpg" alt="" />
              </div>
              <h2 class="welcome-one__bottom-text">Helping Today</h2>
              <div class="welcome-one__heart-icon">
                <img
                  src="~images/resources/welcome-one-heart-icon.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="welcome-one__right">
            <div class="section-title text-left">
              <span class="section-title__tagline">Welcome to Charity</span>
              <h2 class="section-title__title">
                Helping each other can make world better
              </h2>
            </div>
            <p class="welcome-one__right-text">
              Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
              sed do eiusmod tempor incididunt ut labore et simply free text
              dolore magna aliqua lonm andhn.
            </p>
            <div class="welcome-one__our-mission-and-story">
              <div class="welcome-one__mission-and-story-single">
                <h3><i class="fas fa-arrow-circle-right"></i>Our Mission</h3>
                <p class="welcome-one__our-mission-and-story-text">
                  Lorem ipsum dolor sit amet not is consectetur notted.
                </p>
              </div>
              <div class="welcome-one__mission-and-story-single">
                <h3><i class="fas fa-arrow-circle-right"></i>Our Story</h3>
                <p class="welcome-one__our-mission-and-story-text">
                  Lorem ipsum dolor sit amet not is consectetur notted.
                </p>
              </div>
            </div>
            <div class="welcome-one__progress">
              <div class="welcome-one__progress-single">
                <h4 class="welcome-one__progress-title">Charity</h4>
                <div class="bar">
                  <div
                    :class="`bar-inner count-bar ${startBar ? `counted` : ` `}`"
                    v-observe-visibility="onVisibilityChange"
                    :data-percent="`${83}%`"
                    :style="`${startBar ? `width: ${83}%` : ``}`"
                  >
                    <div
                      class="count-text"
                      v-observe-visibility="onVisibilityCountChange"
                    >
                      <countTo
                        :startVal="0"
                        :endVal="startCounter ? 83 : 0"
                        :duration="3000"
                      ></countTo
                      >%
                    </div>
                  </div>
                </div>
              </div>
              <div class="welcome-one__progress-single">
                <h4 class="welcome-one__progress-title">Donations</h4>
                <div class="bar">
                  <div
                    :class="`bar-inner count-bar ${startBar ? `counted` : ` `}`"
                    v-observe-visibility="onVisibilityChange"
                    :data-percent="`${38}%`"
                    :style="`${startBar ? `width: ${38}%` : ``}`"
                  >
                    <div
                      class="count-text"
                      v-observe-visibility="onVisibilityCountChange"
                    >
                      <countTo
                        :startVal="0"
                        :endVal="startCounter ? 38 : 0"
                        :duration="3000"
                      ></countTo
                      >%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nuxt-link to="/about" class="welcome-one__btn thm-btn">
              <i class="fas fa-arrow-circle-right"></i>Learn More
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Welcome One End-->
</template>

<script>
import countTo from "vue-count-to";
import { ObserveVisibility } from "vue-observe-visibility";
export default {
  components: { countTo },
  directives: {
    ObserveVisibility,
  },
  data() {
    return {
      startBar: false,
      startCounter: false,
    };
  },
  methods: {
    onVisibilityChange(isVisible) {
      if (isVisible) {
        this.startBar = true;
      }
    },
    onVisibilityCountChange(isVisible) {
      if (isVisible) {
        this.startCounter = true;
      }
    },
  },
};
</script>
