<template>
  <!--News Two Single-->
  <div class="news-two__single">
    <div class="news-two__img-box">
      <div class="news-two__img">
        <img :src="require(`~/assets/images${thumbnail}`)" :alt="title" />
        <nuxt-link :to="url">
          <i class="fa fa-plus"></i>
        </nuxt-link>
      </div>
      <div class="news-two__date">
        <p>{{ date }}</p>
      </div>
    </div>
    <div class="news-two__content">
      <ul class="list-unstyled news-two__meta">
        <li>
          <a href="#"><i class="far fa-user-circle"></i> {{ author }}</a>
        </li>
        <li><span>/</span></li>
        <li>
          <a href="#"
            ><i class="far fa-comments"></i> {{ commentCount }} Comments</a
          >
        </li>
      </ul>
      <h3>
        <nuxt-link :to="url" v-html="title"></nuxt-link>
      </h3>
      <p class="news-two__text" v-html="excerpt"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    date: {
      type: String,
    },
    commentCount: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    excerpt: {
      type: String,
    },
    url: {
      type: String,
    },
  },
};
</script>
