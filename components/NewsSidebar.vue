<template>
  <div class="sidebar">
    <!-- <div class="sidebar__single sidebar__search">
      <form action="#" class="sidebar__search-form">
        <input type="search" placeholder="Buscar" />
        <button type="submit"><i class="icon-magnifying-glass"></i></button>
      </form>
    </div> -->
    <div class="sidebar__single sidebar__post">
      <h3 class="sidebar__title">Posts recientes</h3>
      <ul class="sidebar__post-list list-unstyled">
        <li>
          <div class="sidebar__post-image">
            <img src="~images/blog/lp-1-1.jpg" alt="" />
          </div>
          <div class="sidebar__post-content">
            <h3>
              <a href="#" class="sidebar__post-content_meta"
                ><i class="far fa-user-circle"></i>Administrador</a
              >
              <nuxt-link to="/news-details"
                >Ayudalos a tener servicio medico</nuxt-link
              >
            </h3>
          </div>
        </li>
        <li>
          <div class="sidebar__post-image">
            <img src="~images/blog/lp-1-2.jpg" alt="" />
          </div>
          <div class="sidebar__post-content">
            <h3>
              <a href="#" class="sidebar__post-content_meta"
                ><i class="far fa-user-circle"></i>Administrador</a
              >
              <nuxt-link to="/news-details"
                >Ayuda a las personas mayores</nuxt-link
              >
            </h3>
          </div>
        </li>
        <li>
          <div class="sidebar__post-image">
            <img src="~images/blog/lp-1-3.jpg" alt="" />
          </div>
          <div class="sidebar__post-content">
            <h3>
              <a href="#" class="sidebar__post-content_meta"
                ><i class="far fa-user-circle"></i>Administrador </a
              >
              <nuxt-link to="/news-details"
                >Ayudalos a tener acceso a oportunidades</nuxt-link
              >
            </h3>
          </div>
        </li>
      </ul>
    </div>
    <div class="sidebar__single sidebar__category">
      <h3 class="sidebar__title">Categories</h3>
      <ul class="sidebar__category-list list-unstyled">
        <li>
          <a href="#"><i class="fas fa-arrow-circle-right"></i>Caridad</a>
        </li>
        <li>
          <a href="#"><i class="fas fa-arrow-circle-right"></i>Recaudacion</a>
        </li>
        <li>
          <a href="#"><i class="fas fa-arrow-circle-right"></i>Donaciones</a>
        </li>
        <li>
          <a href="#"><i class="fas fa-arrow-circle-right"></i>Salva vidas</a>
        </li>
        <li>
          <a href="#"><i class="fas fa-arrow-circle-right"></i>Salud</a>
        </li>
        <li>
          <a href="#"><i class="fas fa-arrow-circle-right"></i>Eduacion</a>
        </li>
        <li>
          <a href="#"><i class="fas fa-arrow-circle-right"></i>Comida</a>
        </li>
        <li>
          <a href="#"><i class="fas fa-arrow-circle-right"></i>Agua</a>
        </li>
      </ul>
    </div>
    <div class="sidebar__single sidebar__tags">
      <h3 class="sidebar__title">Tags populares</h3>
      <div class="sidebar__tags-list">
        <a href="#">Donacion</a>
        <a href="#">Caridad</a>
        <a href="#">Pobreza</a>
        <a href="#">Eduacion</a>
        <a href="#">Recaudacion</a>
      </div>
    </div>
  </div>
</template>
