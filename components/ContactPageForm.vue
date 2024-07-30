<template>
  <!--Contact page Start-->
  <section class="contact-page">
    <div class="container">
      <div class="section-title text-center">
        <span class="section-title__tagline">Contactanos</span>
        <h2 class="section-title__title">
          Deseamos escuchar de nuestros<br />
          clientes satisfechos
        </h2>
      </div>
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="contact-page__left">
            <div class="contact-page__img">
              <img src="~images/resources/contact-page-img-1.jpg" alt="" />
            </div>
            <p class="contact-page__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos alias illo ullam ut accusantium, accusamus
              quibusdam dignissimos commodi iste omnis! Consectetur assumenda mollitia consequatur id ducimus hic vel
              suscipit voluptatibus.
            </p>
            <div class="contact-page__contact-info">
              <ul class="contact-page__contact-list list-unstyled">
                <li>
                  <div class="icon">
                    <span class="icon-chat"></span>
                  </div>
                  <div class="text">
                    <p>Llama en cualquier momento</p>
                    <a href="tel:92 666 888 0000">310 123 0000</a>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <span class="icon-message"></span>
                  </div>
                  <div class="text">
                    <p>Send Email</p>
                    <a href="mailto:lienzodeplata@company.com">linezodeplata@company.com</a>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <span class="icon-address"></span>
                  </div>
                  <div class="text">
                    <p>Visit Office</p>
                    <h5>80 broklyn golden street</h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="contact-page__form">
            <form action="#" class="contact-page__main-form contact-form-validated">
              <div class="row">
                <div class="col-xl-12">
                  <div class="contact-page__input-box">
                    <input type="text" placeholder="Tu nombre" name="name" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6">
                  <div class="contact-page__input-box">
                    <input type="email" placeholder="Direccion email" name="email" />
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="contact-page__input-box">
                    <input type="text" placeholder="Sujeto" name="subject" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-12">
                  <div class="contact-page__input-box">
                    <input type="text" placeholder="Numero telefeno" name="phone" />
                  </div>
                </div>
                <div class="col-xl-12">
                  <div class="contact-page__input-box">
                    <textarea name="message" placeholder="Escribe el mensaje"></textarea>
                  </div>
                  <button type="submit" class="thm-btn contact-page__btn">
                    <i class="fas fa-arrow-circle-right"></i>Enviar mensaje
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Contact page End-->
</template>