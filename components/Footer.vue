<template>
  <div>
    <!--Site Footer One Start-->
    <footer class="site-footer">
      <div
        class="site-footer-bg"
        :style="`background-image: url(${require(`~/assets/images/backgrounds/footer-bg.jpg`)})`"
      ></div>
      <div class="container">
        <div class="site-footer__top">
          <div class="row">
            <div class="col-xl-3 col-lg-6 col-md-6">
              <div class="footer-widget__column footer-widget__about">
                <h3 class="footer-widget__title">Acerca de</h3>
                <p class="footer-widget__text">
                  Lorem ipsum dolor sit ame consect etur pisicing elit sed do
                  eiusmod tempor incididunt ut labore.
                </p>
                <a href="#" class="footer-widget__about-btn"
                  ><i class="fa fa-heart"></i>Donar
                </a>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6">
              <div
                class="footer-widget__column footer-widget__explore clearfix"
              >
                <h3 class="footer-widget__title">Explora</h3>
                <ul class="footer-widget__explore-list list-unstyled">
                  <li><a href="#">Donar</a></li>
                  <li><a href="#">Campañas</a></li>
                  <li><a href="#">Recaudaciones</a></li>
                  <li><a href="#">Voluntarios</a></li>
                  <li><a href="#">Sponsors</a></li>
                </ul>
                <ul
                  class="footer-widget__explore-list footer-widget__explore-list-two list-unstyled"
                >
                  <li><a href="#">Recaudar</a></li>
                  <li><a href="#">Contacto</a></li>
                  <li><a href="#">Ayuda</a></li>
                  <li><a href="#">Faqs</a></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6">
              <div class="footer-widget__column footer-widget__contact">
                <h3 class="footer-widget__title">Contacto</h3>
                <ul class="list-unstyled footer-widget__contact-list">
                  <li>
                    <div class="icon">
                      <i class="icon-chat"></i>
                    </div>
                    <div class="text">
                      <p>
                        <span>Call Anytime</span>
                        <a href="tel:92-666-888-0000">92 666 888 0000</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="icon-message"></i>
                    </div>
                    <div class="text">
                      <p>
                        <span>Enviar email</span>
                        <a href="mailto:lienzodeplata@company.com"
                          >lienzodeplata@company.com</a
                        >
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="icon-address"></i>
                    </div>
                    <div class="text">
                      <p><span>Visit Office</span>80 broklyn golden street</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6">
              <div class="footer-widget__column footer-widget__newsletter">
                <h3 class="footer-widget__title">Noticias</h3>
                <p class="footer-widget__newsletter-text">
                  Lorem ipsum dolor sit ame consect etur pisicing elit sed do.
                </p>

              </div>
            </div>
          </div>
        </div>
        <div class="site-footer__bottom">
          <div class="row">
            <div class="col-xl-12">
              <div class="site-footer__bottom-inner">
                <div class="site-footer__bottom-logo-social">
                  <div class="site-footer__bottom-logo">
                    <nuxt-link to="/">
                      <img
                        :src="require(`~/assets/images${logo.light}`)"
                        alt=""
                      />
                    </nuxt-link>
                  </div>
                  <div class="site-footer__bottom-social">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook-square"></i></a>
                    <a href="#"><i class="fab fa-dribbble"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div class="site-footer__bottom-copy-right">
                  <p>© Copyright 2021 by <a href="#">Lienzo Esperanza</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!--Site Footer One End-->
    <div v-if="sticky === true">
      <a
        @click="scrollTop"
        class="scroll-to-target scroll-to-top animated fadeInUp"
        ><i class="fa fa-angle-up"></i
      ></a>
    </div>
  </div>
</template>

<script>
import data from "~/data/data.json";
export default {
  data() {
    return {
      logo: data.logo,
      sticky: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.sticky = true;
      } else if (window.scrollY < 70) {
        this.sticky = false;
      }
    },
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
