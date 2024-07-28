<template>
  <!--Testimonial One Start-->
  <section :class="`testimonial-one ${className}`">
    <div
      class="testimonial-one-bg"
      :style="`background-image: url(${require(`~/assets/images/backgrounds/testimonial-1-bg.jpg`)})`"
    ></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-4">
          <div class="testimonial-one__left">
            <SectionTitle
              title="What they’re talking about charity"
              subTitle="Our Testimonials"
              alignment="left"
            />
          </div>
        </div>
        <div class="col-xl-8">
          <div class="testimonial-one__right">
            <div class="testimonial-one__carousel">
              <client-only>
                <vue-tiny-slider v-bind="tinySliderOptions">
                  <div v-for="item in testimonials" :key="item.index">
                    <TestimonialsCard
                      :thumbnail="item.thumbnail"
                      :title="item.title"
                      :designation="item.designation"
                      :excerpt="item.excerpt"
                      :social="item.social"
                    />
                  </div>
                </vue-tiny-slider>
              </client-only>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Testimonial One End-->
</template>
<script>
import SectionTitle from "~/components/SectionTitle";
import TestimonialsCard from "~/components/TestimonialsCard";
import data from "~/data/data.json";
export default {
  components: {
    SectionTitle,
    TestimonialsCard,
  },
  props: {
    className: {
      type: String,
    },
  },
  data() {
    return {
      testimonials: data.testimonials,
      tinySliderOptions: {
        loop: true,
        items: 1,
        mouseDrag: true,
        autoplay: true,
        nav: false,
        controlsPosition: "bottom",
        controlsText: [
          "<i class='icon-right-arrow left'></i>",
          "<i class='icon-right-arrow'></i>",
        ],
        autoplayButtonOutput: false,
        responsive: {
          0: {
            gutter: 30,
            items: 1,
          },
          768: {
            gutter: 30,
            items: 2,
          },
          992: {
            gutter: 30,
            items: 2,
          },
        },
      },
    };
  },
};
</script>
