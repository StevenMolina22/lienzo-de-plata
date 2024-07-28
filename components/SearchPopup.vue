<template>
  <div :class="`search-popup  ${searchPopup === true ? 'active ' : ' '}`">
    <div
      class="search-popup__overlay search-toggler"
      @click="searchPopupStatusChange"
    ></div>
    <!-- /.search-popup__overlay -->
    <div class="search-popup__content">
      <form action="#">
        <label for="search" class="sr-only">search here</label
        ><!-- /.sr-only -->
        <input type="text" id="search" placeholder="Search Here..." />
        <button type="submit" aria-label="search submit" class="thm-btn">
          <i class="icon-magnifying-glass"></i>
        </button>
      </form>
    </div>
    <!-- /.search-popup__content -->
  </div>
  <!-- /.search-popup -->
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    searchPopup() {
      return this.$store.state.searchPopupStatus;
    },
  },
  methods: {
    ...mapMutations({
      searchPopupStatusChange: "changeSearchPopupStatus",
    }),
  },
};
</script>
