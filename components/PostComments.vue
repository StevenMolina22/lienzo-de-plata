<template>
  <div>
    <div class="comment-one">
      <h3 class="comment-one__title">Comentarios</h3>
      <div class="comment-one__single">
        <div class="comment-one__image">
          <img src="~images/blog/comment-1-1.jpg" alt="" />
        </div>
        <div class="comment-one__content">
          <h3>David Guerrero<span>Hace 3 horas</span></h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda nostrum vero molestias numquam. Ad fugiat, itaque mollitia repellendus sunt dolorem quae tempora, esse in earum illum consequatur eos dignissimos.
          </p>
          <a href="#" class="comment-one__btn thm-btn"
            ><i class="fas fa-arrow-circle-right"></i>Responder</a
          >
        </div>
      </div>
      <div class="comment-one__single">
        <div class="comment-one__image">
          <img src="~images/blog/comment-1-2.jpg" alt="" />
        </div>
        <div class="comment-one__content">
          <h3>Cristina<span>Hace 3 horas</span></h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, perspiciatis dicta. Ipsum animi dolores eligendi, tempore totam nobis et. Eligendi blanditiis nobis itaque, assumenda suscipit deserunt ab aut earum corporis?
          </p>
          <a href="#" class="comment-one__btn thm-btn"
            ><i class="fas fa-arrow-circle-right"></i>Responder</a
          >
        </div>
      </div>
    </div>
    <div class="comment-form">
      <h3 class="comment-form__title">Dejar un comentario</h3>
      <form action="#" class="comment-one__form contact-form-validated">
        <div class="row">
          <div class="col-xl-6">
            <div class="comment-form__input-box">
              <input type="text" placeholder="Tu nombre" name="name" />
            </div>
          </div>
          <div class="col-xl-6">
            <div class="comment-form__input-box">
              <input type="email" placeholder="Direccion email" name="email" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="comment-form__input-box">
              <textarea name="message" placeholder="Escribe el mensaje"></textarea>
            </div>
            <button type="submit" class="thm-btn comment-form__btn">
              <i class="fas fa-arrow-circle-right"></i>Subir comentario
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
