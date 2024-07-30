<template>
  <!--About Page Start-->
  <section class="about-page">
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
          <div class="about-page__left">
            <div class="about-page__img">
              <img
                src="~/assets/images/resources/about-page-img-1.jpg"
                alt=""
              />
              <div class="about-page__trusted">
                <h3>Nuestros donadores<span> confian </span>en nosotros</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="about-page__right">
            <div class="section-title text-left">
              <span class="section-title__tagline">Nuestra introduccion</span>
              <h2 class="section-title__title">
                Creemos que podemos salvar vidas
              </h2>
            </div>
            <p class="about-page__right-text">
              Nuestros donadores tienen una gran confianza en nosotros.
              Lorem ipsum is simply free text dolor sit
              amett consectetur adipiscing elit. It is a long established fact
              that a reader will be distracted by the readable content of a
              page.
            </p>
            <h3 class="about-page__right-title">
              Lienzo de plata para la caridad es la ayuda moderna
            </h3>
            <div class="about-five__progress-wrap">
              <div class="about-five__progress">
                <div class="about-five__progress-box">
                  <div class="circle-progress">
                    <client-only>
                      <vue-ellipse-progress
                        :progress="90"
                        :size="138"
                        :thickness="3"
                        emptyThickness="3%"
                        color="#15c8a0"
                        emptyColor="#e5eeec"
                        :legend="false"
                      />
                    </client-only>
                  </div>
                  <!-- /.circle-progress -->
                  <span>90%</span>
                </div>
                <div class="about-five__progress-content">
                  <h3>Ayudas exitosas</h3>
                </div>
              </div>
              <div class="about-five__progress">
                <div class="about-five__progress-box">
                  <div class="circle-progress">
                    <client-only>
                      <vue-ellipse-progress
                        :progress="50"
                        :size="138"
                        :thickness="3"
                        emptyThickness="3%"
                        color="#15c8a0"
                        emptyColor="#e5eeec"
                        :legend="false"
                      />
                    </client-only>
                  </div>
                  <!-- /.circle-progress -->
                  <span>50%</span>
                </div>
                <!-- /.about-five__progress-box -->
                <div class="about-five__progress-content">
                  <h3>Donadores increibles</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--About Page Start-->
</template>
<script>
export default {};
</script>
