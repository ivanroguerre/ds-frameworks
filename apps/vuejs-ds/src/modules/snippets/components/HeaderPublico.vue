<template>
	<ds-header>
  <header class="header-mob-pub header-mob-pub--trabajadores">
    <div class="header-mob-pub__selector-segmentos">
      <div class="header-mob-pub__selector-segmentos__resume" onclick="handleSelector()" tabindex="0">
        <span class="header-mob-pub__selector-segmentos__resume__item">
          Trabajadores
        </span>
        <div class="header-mob-pub__selector-segmentos__resume__icon">
          <div class="header-mob-pub__selector-segmentos__resume__icon__expand-more">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.59 8.58997L12 13.17L7.41 8.58997L6 9.99997L12 16L18 9.99997L16.59 8.58997Z" fill="white"></path>
            </svg>
          </div>
          <div class="header-mob-pub__selector-segmentos__resume__icon__expand-less">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z" fill="white"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="header-mob-pub__selector-segmentos__list">
        <a class="header-mob-pub__selector-segmentos__list__item" href="" tabindex="0">
          <div class="header-mob-pub__selector-segmentos__list__item__point"></div>
          Pensionados
        </a>
        <a class="header-mob-pub__selector-segmentos__list__item" href="" tabindex="0">
          <div class="header-mob-pub__selector-segmentos__list__item__point"></div>
          Empresas
        </a>
        <a class="header-mob-pub__selector-segmentos__list__item" href="" tabindex="0">
          <div class="header-mob-pub__selector-segmentos__list__item__point"></div>
          Inversionistas
        </a>
        <a class="header-mob-pub__selector-segmentos__list__item" href="" tabindex="0">
          <div class="header-mob-pub__selector-segmentos__list__item__point"></div>
          Ex afiliados
        </a>
      </div>
    </div>
  </header>
  <div class="nav-mob-pub">
    <div class="nav-mob-pub__container">
      <div class="nav-mob-pub__logo">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.79422 10.06C8.79422 9.79837 8.57728 9.58039 8.31696 9.58039C6.61043 9.70391 5.0919 10.4887 4 11.6803V6.28156C4 5.02452 5.01958 4 6.27056 4H25.715C26.966 4 27.9855 5.02452 27.9855 6.28156V18.7284C27.7903 18.5831 27.6023 18.4305 27.436 18.2561C26.6333 17.4278 21.7017 9.87103 21.7017 9.87103C21.6149 9.75477 21.4776 9.68211 21.3185 9.68211H18.9105C18.737 9.68211 18.5851 9.76931 18.4983 9.90736C18.1874 10.3288 12.8219 17.5804 12.041 18.3797C11.2383 19.208 10.0669 19.7384 8.79422 19.7384C6.79843 19.7384 5.17867 18.1108 5.17867 16.1054C5.17867 14.238 6.57427 12.7048 8.36758 12.4941C8.60621 12.465 8.78698 12.2616 8.79422 12.0218V10.06ZM20.3784 13.0027C21.2968 14.4269 24.37 19.1789 25.404 20.3051C26.0765 21.0318 26.9804 21.6276 28 22.0127V25.7184C28 26.9755 26.9804 28 25.7294 28H6.27056C5.01958 28 4 26.9755 4 25.7184V20.5159C5.1859 21.8165 6.89244 22.6376 8.79422 22.6376C10.8551 22.6376 12.8653 21.7656 14.0801 20.4359C15.1142 19.3024 18.7587 14.4196 19.8216 12.9882C19.8867 12.901 19.9879 12.7992 20.0964 12.7992C20.2121 12.7992 20.3133 12.9082 20.3784 13.0027Z" fill="#0076A9"></path>
          </svg>
        <svg width="46" height="32" viewBox="0 0 56 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.62433 15.1114H4.85523C4.61258 15.1114 4.41602 15.3075 4.41602 15.5494V17.3375C4.41602 17.5795 4.61258 17.7756 4.85523 17.7756H6.54381H6.62433C6.86698 17.7756 7.06355 17.5795 7.06355 17.3375V15.5494C7.06355 15.3075 6.86643 15.1114 6.62433 15.1114Z" fill="#F8BF14"></path>
          <path d="M48.1347 3.55664C44.3694 3.55664 41.2932 6.51983 41.0811 10.2552C41.0734 10.2988 41.0684 10.3435 41.0684 10.3894V10.567V17.0444V21.7722V22.0678V22.246V23.2664V23.5619C41.0684 23.8039 41.2649 24.0006 41.5076 24.0006H41.798H42.989H43.1962H43.2767C43.5193 24.0006 43.7159 23.8045 43.7159 23.5619V23.315C43.717 23.2988 43.7181 23.2831 43.7181 23.2664V23.1116V22.2583V22.2226V22.0678V17.0444V16.0162C44.8509 17.1595 46.4634 17.7781 48.1347 17.7781C52.0372 17.7781 55.2011 14.5941 55.2011 10.6671C55.2011 6.74055 52.0372 3.55664 48.1347 3.55664ZM48.1347 15.1121C45.6954 15.1121 43.7181 13.1223 43.7181 10.6676C43.7181 8.21292 45.6954 6.22312 48.1347 6.22312C50.574 6.22312 52.5513 8.21292 52.5513 10.6676C52.5513 13.1223 50.574 15.1121 48.1347 15.1121Z" fill="#0076A9"></path>
          <path d="M32.6826 3.55664C28.9173 3.55664 25.8411 6.51983 25.629 10.2552C25.6212 10.2988 25.6162 10.3435 25.6162 10.3894V10.567V17.0444V21.7722V22.0678V22.246V23.2664V23.5619C25.6162 23.8039 25.8128 24.0006 26.0554 24.0006H26.3453H27.5363H27.7435H27.824C28.0666 24.0006 28.2632 23.8045 28.2632 23.5619V23.315C28.2643 23.2988 28.2654 23.2831 28.2654 23.2664V23.1116V22.2583V22.2226V22.0678V17.0444V16.0162C29.3982 17.1595 31.0107 17.7781 32.682 17.7781C36.585 17.7781 39.7484 14.5941 39.7484 10.6671C39.7495 6.74055 36.5856 3.55664 32.6826 3.55664ZM32.6826 15.1121C30.2433 15.1121 28.266 13.1223 28.266 10.6676C28.266 8.21292 30.2433 6.22312 32.6826 6.22312C35.1219 6.22312 37.0992 8.21292 37.0992 10.6676C37.0992 13.1223 35.1219 15.1121 32.6826 15.1121Z" fill="#0076A9"></path>
          <path d="M23.8486 10.567C23.8486 10.5559 23.8475 10.5447 23.8469 10.5335C23.7758 6.66791 20.6402 3.55664 16.7822 3.55664C12.8798 3.55664 9.71582 6.74055 9.71582 10.6676C9.71582 14.5947 12.8798 17.7786 16.7822 17.7786C18.4536 17.7786 20.0661 17.1601 21.1988 16.0168V17.0449C21.1988 17.0528 21.1999 17.0606 21.1999 17.0684V17.3405C21.1999 17.5825 21.3965 17.7792 21.6391 17.7792H21.9279H23.1189H23.3272H23.4077C23.6503 17.7792 23.8469 17.583 23.8469 17.3405V17.0695C23.8475 17.0611 23.848 17.0533 23.848 17.0444V10.567H23.8486ZM16.7822 15.1121C14.3429 15.1121 12.3656 13.1223 12.3656 10.6676C12.3656 8.21292 14.3429 6.22312 16.7822 6.22312C19.2215 6.22312 21.1988 8.21292 21.1988 10.6676C21.1983 13.1223 19.2209 15.1121 16.7822 15.1121Z" fill="#0076A9"></path>
          <path d="M11.0438 0L10.7534 0L9.27468 0L6.88924 0L6.18349 0L2.20831 0L0.729626 0L0.439219 0C0.196566 0 0 0.19613 0 0.438639L0 0.734232L0 1.93281L0 2.2284C0 2.47035 0.196566 2.66704 0.439219 2.66704H2.1278H2.20831H2.20887H4.41662V11.8455V12.0511V13.0441C4.41662 13.0446 4.41662 13.0452 4.41662 13.0452V13.3397C4.41662 13.5816 4.61319 13.7783 4.85584 13.7783H6.54442H6.62493C6.86759 13.7783 7.06415 13.5822 7.06415 13.3397V13.0921C7.06526 13.0759 7.06637 13.0603 7.06637 13.0441V12.0634V12.0277V11.8455V2.66648H9.27413H9.27468H10.9633H11.0438C11.2864 2.66648 11.483 2.47035 11.483 2.22784V1.93225V0.734232V0.438639C11.483 0.19613 11.2864 0 11.0438 0Z" fill="#0076A9"></path>
        </svg>
      </div>
      <button class="nav-mob-pub__button-session">
        Ingresar
      </button>
      <button class="nav-mob-pub__menu-button" onclick="handleMenu()">
        <div class="nav-mob-pub__menu-button__label">
          Menú
        </div>
        <div class="nav-mob-pub__menu-button__icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 15H20V13H4V15ZM4 19H20V17H4V19ZM4 11H20V9H4V11ZM4 5V7H20V5H4Z" fill="#0076A9">
          </path></svg>
        </div>
      </button>
    </div>
    <div class="nav-mob-pub__menu">
      <div class="nav-mob-pub__menu__container">
        <div class="nav-mob-pub__menu__container__top">
          <img class="nav-mob-pub__menu__container__top__image" slot="image" src="https://www.w3schools.com/howto/img_mountains_wide.jpg" />
          <div class="nav-mob-pub__menu__container__top__content">
            <div class="nav-mob-pub__menu__container__top__content__close-area">
              Menú
              <button class="nav-mob-pub__menu__container__top__content__close-area__button" onclick="handleMenu()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="nav-mob-pub__menu__container__bottom">
          <div class="nav-mob-pub__menu__container__bottom__list">
            <div class="nav-mob-pub__menu__container__bottom__list__header">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.79422 10.06C8.79422 9.79837 8.57728 9.58039 8.31696 9.58039C6.61043 9.70391 5.0919 10.4887 4 11.6803V6.28156C4 5.02452 5.01958 4 6.27056 4H25.715C26.966 4 27.9855 5.02452 27.9855 6.28156V18.7284C27.7903 18.5831 27.6023 18.4305 27.436 18.2561C26.6333 17.4278 21.7017 9.87103 21.7017 9.87103C21.6149 9.75477 21.4776 9.68211 21.3185 9.68211H18.9105C18.737 9.68211 18.5851 9.76931 18.4983 9.90736C18.1874 10.3288 12.8219 17.5804 12.041 18.3797C11.2383 19.208 10.0669 19.7384 8.79422 19.7384C6.79843 19.7384 5.17867 18.1108 5.17867 16.1054C5.17867 14.238 6.57427 12.7048 8.36758 12.4941C8.60621 12.465 8.78698 12.2616 8.79422 12.0218V10.06ZM20.3784 13.0027C21.2968 14.4269 24.37 19.1789 25.404 20.3051C26.0765 21.0318 26.9804 21.6276 28 22.0127V25.7184C28 26.9755 26.9804 28 25.7294 28H6.27056C5.01958 28 4 26.9755 4 25.7184V20.5159C5.1859 21.8165 6.89244 22.6376 8.79422 22.6376C10.8551 22.6376 12.8653 21.7656 14.0801 20.4359C15.1142 19.3024 18.7587 14.4196 19.8216 12.9882C19.8867 12.901 19.9879 12.7992 20.0964 12.7992C20.2121 12.7992 20.3133 12.9082 20.3784 13.0027Z" fill="#0076A9"></path>
                </svg>                
              Inicio
            </div>
            <button class="nav-mob-pub__menu__container__bottom__list__item" value="uno" onclick="handleMenuItem(this.value)">
              Licencias médicas
              <svg class="nav-mob-pub__menu__container__bottom__list__item__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#0076A9"></path>
              </svg>
            </button>
            <button class="nav-mob-pub__menu__container__bottom__list__item" value="dos" onclick="handleMenuItem(this.value)">
              Créditos
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#0076A9"></path>
              </svg>
            </button>
            <a class="nav-mob-pub__menu__container__bottom__list__item" tabindex="0">
              Apoyo social
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#0076A9"></path>
              </svg>
            </a>
          </div>
          <div class="nav-mob-pub__menu__container__bottom__sub-list uno">
            <div class="nav-mob-pub__menu__container__bottom__sub-list__container uno">
              <button class="nav-mob-pub__menu__container__bottom__sub-list__container__header" value="uno" onclick="handleMenuItem(this.value)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#0076A9"></path>
                </svg>
                Licencias médicas
              </button>
              <a class="nav-mob-pub__menu__container__bottom__sub-list__container__item" tabindex="0">
                Ver todo licencias médicas
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#0076A9"></path>
                </svg>
              </a>
              <a class="nav-mob-pub__menu__container__bottom__sub-list__container__item" tabindex="0">
                Consulta el estado
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#0076A9"></path>
                </svg>
              </a>
              <a class="nav-mob-pub__menu__container__bottom__sub-list__container__item" tabindex="0">
                Ingresa un licencia en papel
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#0076A9"></path>
                </svg>
              </a>
              <a class="nav-mob-pub__menu__container__bottom__sub-list__container__item" tabindex="0">
                Requisitos y documentos
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#0076A9"></path>
                </svg>
              </a>
              <a class="nav-mob-pub__menu__container__bottom__sub-list__container__item" tabindex="0">
                Etapas y plazos de un licencia
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#0076A9"></path>
                </svg>
              </a>
              <a class="nav-mob-pub__menu__container__bottom__sub-list__container__item" tabindex="0">
                Calcula el pago de tu licencia
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#0076A9"></path>
                </svg>
              </a>
              <a class="nav-mob-pub__menu__container__bottom__sub-list__container__item" tabindex="0">
                Formas de pago de una licencia
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#0076A9"></path>
                </svg>
              </a>
              <a class="nav-mob-pub__menu__container__bottom__sub-list__container__item" tabindex="0">
                ¿Qué es una licencia?
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#0076A9"></path>
                </svg>
              </a>
              <a class="nav-mob-pub__menu__container__bottom__sub-list__container__item" tabindex="0">
                Licencias electrónicas
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#0076A9"></path>
                </svg>
              </a>
              <a class="nav-mob-pub__menu__container__bottom__sub-list__container__item" tabindex="0">
                Licencias prescritas
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#0076A9"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="nav-mob-pub__menu__container__bottom__sub-list dos">
            <div class="nav-mob-pub__menu__container__bottom__sub-list__container dos">
              <button class="nav-mob-pub__menu__container__bottom__sub-list__container__header" value="dos" onclick="handleMenuItem(this.value)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#0076A9"></path>
                </svg>
                Créditos
              </button>
              <a class="nav-mob-pub__menu__container__bottom__sub-list__container__item" tabindex="0">
                Crédito uno
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#0076A9"></path>
                </svg>
              </a>
              <a class="nav-mob-pub__menu__container__bottom__sub-list__container__item" tabindex="0">
                Crédito dos
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#0076A9"></path>
                </svg>
              </a>
              <a class="nav-mob-pub__menu__container__bottom__sub-list__container__item" tabindex="0">
                Crédito tres
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#0076A9"></path>
                </svg>
              </a>
              <a class="nav-mob-pub__menu__container__bottom__sub-list__container__item" tabindex="0">
                Crédito cuatro
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#0076A9"></path>
                </svg>
              </a>
              <a class="nav-mob-pub__menu__container__bottom__sub-list__container__item" tabindex="0">
                Crédito cinco
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#0076A9"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <header class="header-desk-pub header-desk-pub--trabajadores">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="header-desk-pub__content">
            <div class="header-desk-pub__logo">
              <div class="header-desk-pub__logo__cla">
                <svg width="172" height="40" viewBox="0 0 104 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M57.7517 18.4669H51.6122C49.3183 18.4669 47.1594 17.4986 45.7426 15.9769C44.1908 14.4553 35.2177 0.553314 35.2177 0.553314C35.0828 0.345821 34.8129 0.207493 34.5431 0.207493H30.1577C29.8204 0.207493 29.5505 0.345821 29.4156 0.622478C28.8758 1.38329 19.1606 14.732 17.6763 16.1844C16.1921 17.7061 14.1006 18.6744 11.8067 18.6744C8.1635 18.6744 5.26242 15.7003 5.26242 11.9654C5.26242 8.57637 7.82616 5.74063 11.0646 5.32565C11.4694 5.25648 11.8067 4.91066 11.8067 4.49568V0.899135C11.8067 0.414986 11.4019 0 10.9296 0C4.79015 0.48415 0 5.67147 0 11.9654C0 18.6052 5.26242 24 11.8067 24C15.5849 24 19.2281 22.4092 21.387 19.9885C23.2761 17.9135 29.8878 8.92219 31.7769 6.29395C31.9118 6.15562 32.0468 5.94813 32.2492 5.94813C32.4516 5.94813 32.654 6.15562 32.7889 6.29395C34.4756 8.92219 40.0079 17.6369 41.8969 19.7118C44.1234 22.1326 47.6991 23.7233 51.4773 23.7233H57.4818C57.5493 23.7233 57.6167 23.7233 57.6842 23.7233C58.1565 23.7233 58.5613 23.3084 58.5613 22.8242V19.366C58.6287 18.8818 58.2239 18.4669 57.7517 18.4669Z" fill="white"></path>
                  <path d="M88.9231 0.137451H88.4508C88.3833 0.137451 88.3159 0.206615 88.3159 0.27578C88.3159 0.967422 88.3159 4.35647 88.3159 4.35647V4.42564V4.4948C88.2484 5.32477 87.8436 5.87809 87.1015 5.87809C86.5617 5.87809 86.2918 5.73976 85.887 5.25561L85.8196 5.18644C85.7521 5.11728 85.7521 5.11728 85.6846 5.04812C85.6172 5.04812 85.6172 5.04811 85.5497 5.11728C85.4822 5.11728 85.2798 5.32477 85.2124 5.39394C85.1449 5.4631 85.1449 5.4631 85.1449 5.53226C85.1449 5.53226 85.1449 5.60143 85.2124 5.60143C85.6846 6.29307 86.2918 6.63889 87.1015 6.63889C87.6412 6.63889 88.1135 6.4314 88.5183 6.08558C88.9231 5.67059 89.1255 5.11728 89.1255 4.42564V0.344944C89.058 0.206615 88.9905 0.137451 88.9231 0.137451Z" fill="white"></path>
                  <path d="M82.7846 4.21978H80.0859L81.4353 1.10739L82.7846 4.21978ZM83.5942 4.21978C82.8521 2.55984 82.0425 0.692402 81.8401 0.277416C81.8401 0.208252 81.7726 0.208252 81.7051 0.208252H81.1654C81.0979 0.208252 81.0305 0.277416 81.0305 0.277416C80.7606 0.899895 78.8715 5.04975 78.3318 6.29471C78.3318 6.36387 78.3318 6.36387 78.3318 6.43304C78.3318 6.5022 78.3993 6.5022 78.4667 6.5022H78.939C79.0065 6.5022 79.1414 6.43304 79.1414 6.36387L79.7486 4.98059H83.122L83.7292 6.36387C83.7966 6.43304 83.8641 6.5022 83.9316 6.5022H84.4038C84.4713 6.5022 84.4713 6.5022 84.5388 6.43304C84.5388 6.36387 84.5388 6.36387 84.5388 6.29471C84.3364 5.87972 83.999 5.11892 83.5942 4.21978Z" fill="white"></path>
                  <path d="M94.5874 4.21954H91.8887L93.2381 1.10714L94.5874 4.21954ZM96.2741 6.29446C96.0717 5.87948 95.7344 5.11867 95.3296 4.21954C94.5874 2.55959 93.7778 0.692158 93.5754 0.277172C93.5754 0.208008 93.5079 0.208008 93.4405 0.208008H92.9007C92.8333 0.208008 92.7658 0.277172 92.7658 0.277172C92.4959 0.899651 90.6069 5.04951 90.0671 6.29446C90.0671 6.36363 90.0671 6.36363 90.0671 6.43279C90.0671 6.50196 90.1346 6.50196 90.2021 6.50196H90.6743C90.7418 6.50196 90.8767 6.43279 90.8767 6.36363L91.4839 4.98034H94.8573L95.4645 6.36363C95.532 6.43279 95.5994 6.50196 95.6669 6.50196H96.1392C96.2066 6.50196 96.2066 6.50196 96.2741 6.43279C96.3416 6.36363 96.3416 6.29446 96.2741 6.29446Z" fill="white"></path>
                  <path d="M77.4514 5.39481C77.4514 5.39481 77.3839 5.32565 77.3839 5.25648C77.3165 5.18732 77.249 5.11816 77.249 5.11816C77.1815 5.04899 77.1141 5.04899 77.1141 5.04899C77.0466 5.04899 77.0466 5.04899 77.0466 5.11816C76.4394 5.67147 75.8997 5.87896 75.1575 5.87896C73.8082 5.87896 72.7962 4.77233 72.7962 3.31989C72.7962 1.86744 73.8082 0.760807 75.1575 0.760807C75.8322 0.760807 76.3719 0.9683 76.9117 1.45245C76.9791 1.52161 76.9791 1.52161 77.0466 1.52161C77.1141 1.52161 77.1815 1.52161 77.249 1.45245C77.249 1.38329 77.5189 1.10663 77.5189 1.03746C77.5189 1.03746 77.5863 0.9683 77.5189 0.899135C77.5189 0.899135 77.4514 0.829971 77.3839 0.760807C76.7093 0.207493 76.0346 0 75.1575 0C73.3359 0 71.9866 1.45245 71.9866 3.31989C71.9866 5.18732 73.3359 6.63977 75.1575 6.63977C76.1021 6.63977 76.7767 6.36311 77.5189 5.67147L77.5863 5.60231C77.5863 5.53314 77.5189 5.53314 77.4514 5.39481Z" fill="white"></path>
                  <path d="M75.6973 17.4294H74.7527C74.6853 17.4294 74.5503 17.4986 74.5503 17.5678C74.213 18.3286 72.6612 21.9251 72.1215 23.1701L71.9866 23.4467C71.9866 23.5159 71.9866 23.5851 71.9866 23.6542C71.9866 23.7234 72.054 23.7234 72.1215 23.7234H73.3359C73.4034 23.7234 73.5383 23.6542 73.5383 23.5851L75.225 19.6427L76.9117 23.5851C76.9791 23.6542 77.0466 23.7234 77.1141 23.7234H78.261C78.3285 23.7234 78.3959 23.7234 78.3959 23.6542C78.3959 23.5851 78.4634 23.5159 78.3959 23.4467C77.9237 22.4093 76.1695 18.3977 75.8322 17.5678C75.8997 17.4986 75.8322 17.4294 75.6973 17.4294Z" fill="white"></path>
                  <path d="M97.2873 17.4294H93.1044C92.9694 17.4294 92.902 17.4986 92.902 17.6369C92.902 18.1211 92.902 19.6427 92.902 20.5418C92.902 21.5793 92.902 22.8243 92.902 23.4467C92.902 23.5159 92.902 23.5851 92.9694 23.5851C93.0369 23.6542 93.0369 23.6542 93.1044 23.6542H97.2873C97.4223 23.6542 97.4897 23.5851 97.4897 23.4467V22.6168C97.4897 22.4784 97.3548 22.4093 97.2873 22.4093H94.3188V21.1643C94.5887 21.1643 96.2078 21.1643 96.7476 21.1643C96.8825 21.1643 96.95 21.0951 96.95 20.9568V20.1268C96.95 19.9885 96.8825 19.9194 96.7476 19.9194H94.3188V18.7436H97.2873C97.4223 18.7436 97.4897 18.6052 97.4897 18.5361V17.7061C97.4897 17.4986 97.4223 17.4294 97.2873 17.4294Z" fill="white"></path>
                  <path d="M101.268 19.9179C100.189 19.6413 99.9187 19.503 99.9187 19.088C99.9187 18.7421 100.189 18.5347 100.661 18.5347C101.066 18.5347 101.605 18.7421 102.145 19.088H102.213C102.28 19.088 102.348 19.0188 102.415 18.9496C102.482 18.8805 102.685 18.6038 102.82 18.3963C102.887 18.3272 102.955 18.258 102.955 18.1888C103.022 18.1197 103.09 17.9813 102.955 17.9122C102.28 17.428 101.538 17.1514 100.728 17.1514C99.4465 17.1514 98.5019 17.9813 98.5019 19.088C98.5019 20.4021 99.4465 20.7479 100.593 21.0937C101.673 21.3704 101.808 21.5779 101.808 21.8545C101.808 22.2004 101.47 22.4079 100.931 22.4079C100.391 22.4079 99.7838 22.2004 99.2441 21.7162C99.1091 21.647 98.9742 21.647 98.9067 21.7854C98.8393 21.8545 98.6369 22.1312 98.5019 22.3387L98.2995 22.6154C98.2995 22.6845 98.232 22.6845 98.2995 22.7537C98.2995 22.8228 98.367 22.892 98.5019 22.9612C98.5019 22.9612 98.5694 23.0303 98.6369 23.0303C99.3115 23.5145 100.121 23.722 100.931 23.722C102.348 23.722 103.292 22.9612 103.292 21.7162C103.292 20.6787 102.482 20.1946 101.268 19.9179Z" fill="white"></path>
                  <path d="M84.939 17.4292H83.9945C83.8596 17.4292 83.7921 17.5675 83.7921 17.6367V21.1641L81.026 17.4984C80.9585 17.4292 80.891 17.4292 80.8236 17.4292H79.879C79.7441 17.4292 79.6766 17.5675 79.6766 17.6367V23.5157C79.6766 23.654 79.7441 23.7231 79.879 23.7231H80.8236C80.9585 23.7231 81.026 23.654 81.026 23.5157C81.026 22.6857 81.026 20.4033 81.026 19.8499L83.8596 23.654C83.927 23.7231 83.9945 23.7231 84.062 23.7231H84.939C85.074 23.7231 85.1414 23.654 85.1414 23.5157V17.6367C85.1414 17.4984 85.074 17.4292 84.939 17.4292Z" fill="white"></path>
                  <path d="M88.9186 22.409H87.9066V18.7433H88.9186C89.9306 18.7433 90.5378 19.435 90.5378 20.6108C90.6053 21.7174 89.9981 22.409 88.9186 22.409ZM88.9186 17.4292H86.6922C86.6247 17.4292 86.5572 17.4292 86.5572 17.4984C86.4898 17.5675 86.4897 17.5675 86.4897 17.6367C86.4897 17.8442 86.4897 18.2592 86.4897 18.4667V22.6165C86.4897 22.824 86.4897 23.1007 86.4897 23.3082V23.5157C86.4897 23.654 86.6247 23.7231 86.6922 23.7231H88.9186C90.7402 23.7231 92.0221 22.409 92.0221 20.5416C92.0221 19.6425 91.7522 18.8816 91.2125 18.3283C90.6727 17.7059 89.8631 17.4292 88.9186 17.4292Z" fill="white"></path>
                  <path d="M77.1814 13.7632H74.2803V9.06003C74.2803 8.9217 74.1454 8.85254 74.0779 8.85254H73.0659C72.931 8.85254 72.8635 8.99087 72.8635 9.06003V14.8698C72.8635 15.0082 72.9985 15.0773 73.0659 15.0773H77.1814C77.3163 15.0773 77.3838 14.939 77.3838 14.8698V13.9707C77.3838 13.8324 77.3163 13.7632 77.1814 13.7632Z" fill="white"></path>
                  <path d="M79.4081 11.8953C79.4081 10.7886 80.2177 9.95865 81.2297 9.95865C82.2417 9.95865 83.0513 10.7886 83.0513 11.8953C83.0513 13.0019 82.2417 13.8319 81.2297 13.8319C80.2177 13.901 79.4081 13.071 79.4081 11.8953ZM81.2297 8.64453C79.3406 8.64453 77.8563 10.097 77.8563 11.9644C77.8563 13.8319 79.2731 15.2843 81.2297 15.2843C83.1187 15.2843 84.603 13.8319 84.603 11.9644C84.603 10.0278 83.1862 8.64453 81.2297 8.64453Z" fill="white"></path>
                  <path d="M88.1812 11.2736C87.1018 10.997 86.8319 10.8587 86.8319 10.4437C86.8319 10.0979 87.1018 9.89037 87.574 9.89037C87.9788 9.89037 88.5186 10.0979 89.0583 10.4437H89.1258C89.1933 10.4437 89.2607 10.3745 89.3282 10.3054C89.3957 10.2362 89.5306 10.0287 89.6655 9.8212C89.733 9.68287 89.8005 9.61371 89.8005 9.54454C89.8679 9.47538 89.9354 9.33705 89.8005 9.26789C89.1258 8.78374 88.3836 8.50708 87.574 8.50708C86.2922 8.50708 85.3476 9.33705 85.3476 10.4437C85.3476 11.7578 86.2922 12.1036 87.4391 12.4494C88.5186 12.7261 88.6535 12.9336 88.6535 13.2103C88.6535 13.5561 88.3162 13.7636 87.7764 13.7636C87.2367 13.7636 86.6295 13.5561 86.0898 13.0719C85.9548 13.0028 85.8199 13.0028 85.7524 13.1411C85.685 13.2102 85.4826 13.4869 85.3476 13.6944L85.1452 13.9711C85.1452 14.0402 85.0778 14.0402 85.1452 14.1094C85.1452 14.1785 85.2802 14.2477 85.3476 14.3169H85.4151L85.4826 14.386C86.1572 14.8702 86.9668 15.0777 87.7764 15.0777C89.1933 15.0777 90.1378 14.3169 90.1378 13.0719C90.2053 12.0345 89.3957 11.6195 88.1812 11.2736Z" fill="white"></path>
                  <path d="M65.1719 23.7945H61.6636C61.1913 23.7945 60.7865 23.3795 60.7865 22.8953V19.2988C60.7865 18.8146 61.1913 18.3997 61.6636 18.3997H65.1719C65.6441 18.3997 66.0489 18.8146 66.0489 19.2988V22.8953C66.0489 23.3795 65.6441 23.7945 65.1719 23.7945Z" fill="#F9BE00"></path>
                </svg>
              </div>
              <div class="header-desk-pub__logo__line header-desk-pub__logo__line--trabajadores">
              </div>
              <div class="header-desk-pub__logo__tapp">
                <svg width="56" height="24" viewBox="0 0 56 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62433 15.1114H4.85523C4.61258 15.1114 4.41602 15.3075 4.41602 15.5494V17.3375C4.41602 17.5795 4.61258 17.7756 4.85523 17.7756H6.54381H6.62433C6.86698 17.7756 7.06355 17.5795 7.06355 17.3375V15.5494C7.06355 15.3075 6.86643 15.1114 6.62433 15.1114Z" fill="white"></path>
                  <path d="M48.1347 3.55664C44.3694 3.55664 41.2932 6.51983 41.0811 10.2552C41.0734 10.2988 41.0684 10.3435 41.0684 10.3894V10.567V17.0444V21.7722V22.0678V22.246V23.2664V23.5619C41.0684 23.8039 41.2649 24.0006 41.5076 24.0006H41.798H42.989H43.1962H43.2767C43.5193 24.0006 43.7159 23.8045 43.7159 23.5619V23.315C43.717 23.2988 43.7181 23.2831 43.7181 23.2664V23.1116V22.2583V22.2226V22.0678V17.0444V16.0162C44.8509 17.1595 46.4634 17.7781 48.1347 17.7781C52.0372 17.7781 55.2011 14.5941 55.2011 10.6671C55.2011 6.74055 52.0372 3.55664 48.1347 3.55664ZM48.1347 15.1121C45.6954 15.1121 43.7181 13.1223 43.7181 10.6676C43.7181 8.21292 45.6954 6.22312 48.1347 6.22312C50.574 6.22312 52.5513 8.21292 52.5513 10.6676C52.5513 13.1223 50.574 15.1121 48.1347 15.1121Z" fill="white"></path>
                  <path d="M32.6826 3.55664C28.9173 3.55664 25.8411 6.51983 25.629 10.2552C25.6212 10.2988 25.6162 10.3435 25.6162 10.3894V10.567V17.0444V21.7722V22.0678V22.246V23.2664V23.5619C25.6162 23.8039 25.8128 24.0006 26.0554 24.0006H26.3453H27.5363H27.7435H27.824C28.0666 24.0006 28.2632 23.8045 28.2632 23.5619V23.315C28.2643 23.2988 28.2654 23.2831 28.2654 23.2664V23.1116V22.2583V22.2226V22.0678V17.0444V16.0162C29.3982 17.1595 31.0107 17.7781 32.682 17.7781C36.585 17.7781 39.7484 14.5941 39.7484 10.6671C39.7495 6.74055 36.5856 3.55664 32.6826 3.55664ZM32.6826 15.1121C30.2433 15.1121 28.266 13.1223 28.266 10.6676C28.266 8.21292 30.2433 6.22312 32.6826 6.22312C35.1219 6.22312 37.0992 8.21292 37.0992 10.6676C37.0992 13.1223 35.1219 15.1121 32.6826 15.1121Z" fill="white"></path>
                  <path d="M23.8486 10.567C23.8486 10.5559 23.8475 10.5447 23.8469 10.5335C23.7758 6.66791 20.6402 3.55664 16.7822 3.55664C12.8798 3.55664 9.71582 6.74055 9.71582 10.6676C9.71582 14.5947 12.8798 17.7786 16.7822 17.7786C18.4536 17.7786 20.0661 17.1601 21.1988 16.0168V17.0449C21.1988 17.0528 21.1999 17.0606 21.1999 17.0684V17.3405C21.1999 17.5825 21.3965 17.7792 21.6391 17.7792H21.9279H23.1189H23.3272H23.4077C23.6503 17.7792 23.8469 17.583 23.8469 17.3405V17.0695C23.8475 17.0611 23.848 17.0533 23.848 17.0444V10.567H23.8486ZM16.7822 15.1121C14.3429 15.1121 12.3656 13.1223 12.3656 10.6676C12.3656 8.21292 14.3429 6.22312 16.7822 6.22312C19.2215 6.22312 21.1988 8.21292 21.1988 10.6676C21.1983 13.1223 19.2209 15.1121 16.7822 15.1121Z" fill="white"></path>
                  <path d="M11.0438 0L10.7534 0L9.27468 0L6.88924 0L6.18349 0L2.20831 0L0.729626 0L0.439219 0C0.196566 0 0 0.19613 0 0.438639L0 0.734232L0 1.93281L0 2.2284C0 2.47035 0.196566 2.66704 0.439219 2.66704H2.1278H2.20831H2.20887H4.41662V11.8455V12.0511V13.0441C4.41662 13.0446 4.41662 13.0452 4.41662 13.0452V13.3397C4.41662 13.5816 4.61319 13.7783 4.85584 13.7783H6.54442H6.62493C6.86759 13.7783 7.06415 13.5822 7.06415 13.3397V13.0921C7.06526 13.0759 7.06637 13.0603 7.06637 13.0441V12.0634V12.0277V11.8455V2.66648H9.27413H9.27468H10.9633H11.0438C11.2864 2.66648 11.483 2.47035 11.483 2.22784V1.93225V0.734232V0.438639C11.483 0.19613 11.2864 0 11.0438 0Z" fill="white"></path>
                </svg>
              </div>
            </div>
            <div class="header-desk-pub__selector-segmentos">
              <a class="header-desk-pub__selector-segmentos__item header-desk-pub__selector-segmentos__item--trabajadores header-desk-pub__selector-segmentos__item--active" href="">
                <p class="header-desk-pub__selector-segmentos__item__label">Trabajadores</p>
              </a>
              <a class="header-desk-pub__selector-segmentos__item header-desk-pub__selector-segmentos__item--trabajadores" href="">
                <p class="header-desk-pub__selector-segmentos__item__label">Pensionados</p>
              </a>
              <a class="header-desk-pub__selector-segmentos__item header-desk-pub__selector-segmentos__item--trabajadores" href="">
                <p class="header-desk-pub__selector-segmentos__item__label">Empresas</p>
              </a>
              <a class="header-desk-pub__selector-segmentos__item header-desk-pub__selector-segmentos__item--trabajadores" href="">
                <p class="header-desk-pub__selector-segmentos__item__label">Inversionistas</p>
              </a>
              <a class="header-desk-pub__selector-segmentos__item header-desk-pub__selector-segmentos__item--trabajadores" href="">
                <p class="header-desk-pub__selector-segmentos__item__label">Ex afiliados</p>
              </a>
            </div>
            <div class="header-tablet-pub__selector-segmentos">
              <div class="header-tablet-pub__selector-segmentos__resume" onclick="handleSelector()" tabindex="0">
                <span class="header-tablet-pub__selector-segmentos__resume__item">
                  Trabajadores
                </span>
                <div class="header-tablet-pub__selector-segmentos__resume__icon">
                  <div class="header-tablet-pub__selector-segmentos__resume__icon__expand-more">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.59 8.58997L12 13.17L7.41 8.58997L6 9.99997L12 16L18 9.99997L16.59 8.58997Z" fill="white"></path>
                    </svg>
                  </div>
                  <div class="header-tablet-pub__selector-segmentos__resume__icon__expand-less">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z" fill="white"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="header-tablet-pub__selector-segmentos__list">
                <a class="header-tablet-pub__selector-segmentos__list__item" href="" tabindex="0">
                  <div class="header-tablet-pub__selector-segmentos__list__item__point"></div>
                  Pensionados
                </a>
                <a class="header-tablet-pub__selector-segmentos__list__item" href="" tabindex="0">
                  <div class="header-tablet-pub__selector-segmentos__list__item__point"></div>
                  Empresas
                </a>
                <a class="header-tablet-pub__selector-segmentos__list__item" href="" tabindex="0">
                  <div class="header-tablet-pub__selector-segmentos__list__item__point"></div>
                  Inversionistas
                </a>
                <a class="header-tablet-pub__selector-segmentos__list__item" href="" tabindex="0">
                  <div class="header-tablet-pub__selector-segmentos__list__item__point"></div>
                  Ex afiliados
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="nav-desk-pub">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="nav-desk-pub__content">
            <nav class="nav-desk-pub__navegacion">
              <a class="nav-desk-pub__navegacion__item nav-desk-pub__navegacion__item--active" href="" tabindex="1">
                <div class="nav-desk-pub__navegacion__item__button">
                  <div class="nav-desk-pub__navegacion__item__button__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#0076A9"></path>
                    </svg>
                  </div>
                  <div class="nav-desk-pub__navegacion__item__button__label">
                    Inicio
                  </div>
                </div>
                <div class="nav-desk-pub__navegacion__item__line"></div>
              </a>
              <a class="nav-desk-pub__navegacion__item uno" value="uno" tabindex="2" onclick="handleMenuDesktop('uno')">
                <div class="nav-desk-pub__navegacion__item__button">
                  <div class="nav-desk-pub__navegacion__item__button__label">
                    Licencias médicas
                  </div>
                </div>
                <div class="nav-desk-pub__navegacion__item__line"></div>
              </a>
              <a class="nav-desk-pub__navegacion__item dos" value="dos" tabindex="3" onclick="handleMenuDesktop('dos')">
                <div class="nav-desk-pub__navegacion__item__button">
                  <div class="nav-desk-pub__navegacion__item__button__label">
                    Créditos
                  </div>
                </div>
                <div class="nav-desk-pub__navegacion__item__line">
                </div>
              </a>
              <a class="nav-desk-pub__navegacion__item" href="" tabindex="6">
                <div class="nav-desk-pub__navegacion__item__button">
                  <div class="nav-desk-pub__navegacion__item__button__label">
                    Apoyo social
                  </div>
                </div>
                <div class="nav-desk-pub__navegacion__item__line">
                </div>
              </a>
              <div class="nav-desk-pub__navegacion__despliegue">
                <div class="nav-desk-pub__navegacion__despliegue__container uno">
                  <div class="nav-desk-pub__navegacion__despliegue__container__items">
                    <a class="nav-desk-pub__navegacion__despliegue__container__items__item" tabindex="2">
                      <div class="nav-desk-pub__navegacion__despliegue__container__items__item__point"></div>
                      Ver todo licencias médicas
                    </a>
                    <a class="nav-desk-pub__navegacion__despliegue__container__items__item" tabindex="2">
                      <div class="nav-desk-pub__navegacion__despliegue__container__items__item__point"></div>
                      Consulta el estado
                    </a>
                    <a class="nav-desk-pub__navegacion__despliegue__container__items__item" tabindex="2">
                      <div class="nav-desk-pub__navegacion__despliegue__container__items__item__point"></div>
                      Ingresa un licencia en papel
                    </a>
                    <a class="nav-desk-pub__navegacion__despliegue__container__items__item" tabindex="2">
                      <div class="nav-desk-pub__navegacion__despliegue__container__items__item__point"></div>
                      Requisitos y documentos
                    </a>
                    <a class="nav-desk-pub__navegacion__despliegue__container__items__item" tabindex="2">
                      <div class="nav-desk-pub__navegacion__despliegue__container__items__item__point"></div>
                      Etapas y plazos de un licencia
                    </a>
                    <a class="nav-desk-pub__navegacion__despliegue__container__items__item" tabindex="2">
                      <div class="nav-desk-pub__navegacion__despliegue__container__items__item__point"></div>
                      Calcula el pago de tu licencia
                    </a>
                    <a class="nav-desk-pub__navegacion__despliegue__container__items__item" tabindex="2">
                      <div class="nav-desk-pub__navegacion__despliegue__container__items__item__point"></div>
                      Formas de pago de una licencia
                    </a>
                    <a class="nav-desk-pub__navegacion__despliegue__container__items__item" tabindex="2">
                      <div class="nav-desk-pub__navegacion__despliegue__container__items__item__point"></div>
                      ¿Qué es una licencia?
                    </a>
                    <a class="nav-desk-pub__navegacion__despliegue__container__items__item" tabindex="2">
                      <div class="nav-desk-pub__navegacion__despliegue__container__items__item__point"></div>
                      Licencias electrónicas
                    </a>
                    <a class="nav-desk-pub__navegacion__despliegue__container__items__item" tabindex="2">
                      <div class="nav-desk-pub__navegacion__despliegue__container__items__item__point"></div>
                      Licencias prescritas
                    </a>
                  </div>
                  <div class="nav-desk-pub__navegacion__despliegue__container__image">
                    <div class="nav-desk-pub__navegacion__despliegue__container__image__logo">
                      <svg width="342" height="210" viewBox="0 0 342 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M488.424 161.249H435.118C415.202 161.249 396.457 152.794 384.156 139.508C370.683 126.221 292.775 4.83144 292.775 4.83144C291.603 3.01965 289.26 1.81179 286.917 1.81179H248.842C245.913 1.81179 243.57 3.01965 242.398 5.43537C237.712 12.0786 153.36 128.637 140.473 141.32C127.586 154.606 109.427 163.061 89.5108 163.061C57.8789 163.061 32.6905 137.092 32.6905 104.48C32.6905 74.8873 54.95 50.1262 83.0672 46.5026C86.5819 45.8987 89.5108 42.879 89.5108 39.2554V7.85109C89.5108 3.62358 85.9961 0 81.8957 0C28.5901 4.22751 -13 49.5222 -13 104.48C-13 162.457 32.6905 209.564 89.5108 209.564C122.314 209.564 153.946 195.673 172.691 174.536C189.093 156.418 246.499 77.9069 262.9 54.9576C264.072 53.7497 265.243 51.938 267.001 51.938C268.758 51.938 270.515 53.7497 271.687 54.9576C286.331 77.9069 334.365 154.002 350.767 172.12C370.097 193.257 401.143 207.148 433.947 207.148H486.081C486.667 207.148 487.252 207.148 487.838 207.148C491.939 207.148 495.453 203.524 495.453 199.297V169.1C496.039 164.873 492.524 161.249 488.424 161.249Z" fill="#1896D3"></path>
                      </svg>
                    </div>
                    <div class="nav-desk-pub__navegacion__despliegue__container__image__content">
                      <div class="nav-desk-pub__navegacion__despliegue__container__image__content__ellipse">
                        <svg width="140" height="119" class="ellipse" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 215 183">
                          <defs>
                            <clipPath id="theClippingPath">
                              <path d="M210.904 46.3361C230.324 95.391 166.532 155.802 117.477 175.222C68.4225 194.643 28.7778 171.012 9.35698 121.957C-10.0638 72.9026 3.18515 29.8604 52.24 10.4396C101.295 -8.98119 191.483 -2.71872 210.904 46.3361Z"></path>
                            </clipPath>
                          </defs>
                          <image class="background" href="https://www.w3schools.com/howto/img_mountains_wide.jpg" clip-path="url(#theClippingPath)" preserveAspectRatio="none">
                          </image>
                        </svg>
                      </div>
                      <div class="nav-desk-pub__navegacion__despliegue__container__image__content__title">
                        Te ayudamos en la gestión de tus <strong>Licencias médicas</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="nav-desk-pub__navegacion__despliegue__container dos">
                  <div class="nav-desk-pub__navegacion__despliegue__container__items">
                    <a class="nav-desk-pub__navegacion__despliegue__container__items__item" tabindex="3">
                      <div class="nav-desk-pub__navegacion__despliegue__container__items__item__point"></div>
                      chao
                    </a>
                    <a class="nav-desk-pub__navegacion__despliegue__container__items__item" tabindex="3">
                      <div class="nav-desk-pub__navegacion__despliegue__container__items__item__point"></div>
                      chao
                    </a>
                    <a class="nav-desk-pub__navegacion__despliegue__container__items__item" tabindex="3">
                      <div class="nav-desk-pub__navegacion__despliegue__container__items__item__point"></div>
                      chao
                    </a>
                    <a class="nav-desk-pub__navegacion__despliegue__container__items__item" tabindex="3">
                      <div class="nav-desk-pub__navegacion__despliegue__container__items__item__point"></div>
                      chao
                    </a>
                    <a class="nav-desk-pub__navegacion__despliegue__container__items__item" tabindex="3">
                      <div class="nav-desk-pub__navegacion__despliegue__container__items__item__point"></div>
                      chao
                    </a>
                    <a class="nav-desk-pub__navegacion__despliegue__container__items__item" tabindex="3">
                      <div class="nav-desk-pub__navegacion__despliegue__container__items__item__point"></div>
                      chao
                    </a>
                  </div>
                  <div class="nav-desk-pub__navegacion__despliegue__container__image">
                    <div class="nav-desk-pub__navegacion__despliegue__container__image__logo">
                      <svg width="342" height="210" viewBox="0 0 342 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M488.424 161.249H435.118C415.202 161.249 396.457 152.794 384.156 139.508C370.683 126.221 292.775 4.83144 292.775 4.83144C291.603 3.01965 289.26 1.81179 286.917 1.81179H248.842C245.913 1.81179 243.57 3.01965 242.398 5.43537C237.712 12.0786 153.36 128.637 140.473 141.32C127.586 154.606 109.427 163.061 89.5108 163.061C57.8789 163.061 32.6905 137.092 32.6905 104.48C32.6905 74.8873 54.95 50.1262 83.0672 46.5026C86.5819 45.8987 89.5108 42.879 89.5108 39.2554V7.85109C89.5108 3.62358 85.9961 0 81.8957 0C28.5901 4.22751 -13 49.5222 -13 104.48C-13 162.457 32.6905 209.564 89.5108 209.564C122.314 209.564 153.946 195.673 172.691 174.536C189.093 156.418 246.499 77.9069 262.9 54.9576C264.072 53.7497 265.243 51.938 267.001 51.938C268.758 51.938 270.515 53.7497 271.687 54.9576C286.331 77.9069 334.365 154.002 350.767 172.12C370.097 193.257 401.143 207.148 433.947 207.148H486.081C486.667 207.148 487.252 207.148 487.838 207.148C491.939 207.148 495.453 203.524 495.453 199.297V169.1C496.039 164.873 492.524 161.249 488.424 161.249Z" fill="#1896D3"></path>
                      </svg>
                    </div>
                    <div class="nav-desk-pub__navegacion__despliegue__container__image__content">
                      <div class="nav-desk-pub__navegacion__despliegue__container__image__content__ellipse">
                        <svg width="140" height="119" class="ellipse" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 215 183">
                          <defs>
                            <clipPath id="theClippingPath2">
                              <path d="M210.904 46.3361C230.324 95.391 166.532 155.802 117.477 175.222C68.4225 194.643 28.7778 171.012 9.35698 121.957C-10.0638 72.9026 3.18515 29.8604 52.24 10.4396C101.295 -8.98119 191.483 -2.71872 210.904 46.3361Z"></path>
                            </clipPath>
                          </defs>
                          <image class="background" href="https://www.w3schools.com/howto/img_mountains_wide.jpg" clip-path="url(#theClippingPath2)" preserveAspectRatio="none">
                          </image>
                        </svg>
                      </div>
                      <div class="nav-desk-pub__navegacion__despliegue__container__image__content__title">
                        Título descriptivo
                      </div>
                      <div class="nav-desk-pub__navegacion__despliegue__container__image__content__sub-title">
                        Caja los Andes
                      </div>
                      <div class="nav-desk-pub__navegacion__despliegue__container__image__content__text">
                        Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean commodo ligula eget dolot.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <button class="nav-desk-pub__button-session">
              Sucursal virtual
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </ds-header>
</template>

<script>
import "@dscla/ds-header"

export default {
	name: "HeaderPublicoComponent"
}
</script>