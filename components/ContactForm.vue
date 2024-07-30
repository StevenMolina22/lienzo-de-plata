<template>
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
</template>