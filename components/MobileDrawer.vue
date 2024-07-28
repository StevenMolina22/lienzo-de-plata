<template>
  <div
    :class="`mobile-nav__wrapper  ${mobileDrawer === true ? 'expanded ' : ' '}`"
  >
    <div
      class="mobile-nav__overlay mobile-nav__toggler"
      @click="mobileDrawerStatusChange"
    ></div>
    <!-- /.mobile-nav__overlay -->
    <div class="mobile-nav__content">
      <span
        class="mobile-nav__close mobile-nav__toggler"
        @click="mobileDrawerStatusChange"
        ><i class="fa fa-times"></i
      ></span>

      <div class="logo-box">
        <nuxt-link to="/">
          <img
            :src="require(`~/assets/images${logo.light}`)"
            width="155"
            alt=""
          />
        </nuxt-link>
      </div>
      <!-- /.logo-box -->
      <div class="mobile-nav__container">
        <ul class="main-menu__list">
          <li
            v-for="item in navMenus"
            :key="item.name"
            :class="`${undefined !== item.subItems ? 'dropdown ' : ' '}`"
          >
            <nuxt-link :to="item.url">
              {{ item.name }}
              <button
                v-if="undefined !== item.subItems"
                v-on:click="toggleDropdown"
              >
                <i class="fa fa-angle-down"></i>
              </button>
            </nuxt-link>

            <ul class="sub-menu" v-if="undefined !== item.subItems">
              <li v-for="subitem in item.subItems" :key="subitem.name">
                <nuxt-link :to="subitem.url">
                  {{ subitem.name }}
                  <button
                    v-if="undefined !== subitem.subItems"
                    v-on:click="toggleDropdown"
                  >
                    <i class="fa fa-angle-down"></i>
                  </button>
                </nuxt-link>
                <ul class="sub-menu" v-if="undefined !== subitem.subItems">
                  <li v-for="subitem in subitem.subItems" :key="subitem.name">
                    <nuxt-link :to="subitem.url">{{ subitem.name }}</nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- /.mobile-nav__container -->

      <ul class="mobile-nav__contact list-unstyled">
        <li>
          <i class="fa fa-envelope"></i>
          <a href="mailto:needhelp@packageName__.com">needhelp@halpes.com</a>
        </li>
        <li>
          <i class="fa fa-phone-alt"></i>
          <a href="tel:666-888-0000">666 888 0000</a>
        </li>
      </ul>
      <!-- /.mobile-nav__contact -->
      <div class="mobile-nav__top">
        <div class="mobile-nav__social">
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-facebook-square"></a>
          <a href="#" class="fab fa-pinterest-p"></a>
          <a href="#" class="fab fa-instagram"></a>
        </div>
        <!-- /.mobile-nav__social -->
      </div>
      <!-- /.mobile-nav__top -->
    </div>
    <!-- /.mobile-nav__content -->
  </div>
  <!-- /.mobile-nav__wrapper -->
</template>

<script>
import data from "~/data/data.json";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      logo: data.logo,
      navMenus: data.navMenus,
    };
  },
  computed: {
    mobileDrawer() {
      return this.$store.state.mobileDrawerStatus;
    },
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      let clickedItem = event.currentTarget;
      clickedItem.classList.toggle("expanded");
      clickedItem.parentNode.parentNode
        .querySelector(".sub-menu")
        .classList.toggle("show");
    },
    ...mapMutations({
      mobileDrawerStatusChange: "changeMobileDrawerStatus",
    }),
  },
};
</script>
