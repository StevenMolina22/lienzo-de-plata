import { resolve } from "path";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Halpes || Vue Nuxt Template For Donation Services",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "stylesheet",
        href: "//fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,700,700i,800,800i,900,900i",
      },
      {
        rel: "stylesheet",
        href: "//cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css",
      },
      {
        rel: "stylesheet",
        href: "//unpkg.com/accordion-js@3.1.1/dist/accordion.min.css",
      },
    ],
    script: [
      {
        src: "//cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js",
        body: true,
      },
      {
        src: "//unpkg.com/accordion-js@3.1.1/dist/accordion.min.js",
        body: true,
      },
    ],
    loading: {
      color: "#15c8a0",
      height: "4px",
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/vendors/animate/animate.min.css",
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/vendors/fontawesome/css/all.min.css",
    "~/assets/vendors/halpes-icons/style.css",
    "~/assets/vendors/reey-font/stylesheet.css",
    "~/assets/css/halpes.css",
    "~/assets/css/halpes-responsive.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/vue-tiny-slider.js",
      mode: "client",
    },
    {
      src: "~/plugins/jarallax.js",
      mode: "client",
    },
    {
      src: "@/plugins/vue-ellipse-progress.js",
      mode: "client",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  alias: {
    components: resolve(__dirname, "./components"),
    images: resolve(__dirname, "./assets/images"),
    css: resolve(__dirname, "./assets/css"),
    vendors: resolve(__dirname, "./assets/vendors"),
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
