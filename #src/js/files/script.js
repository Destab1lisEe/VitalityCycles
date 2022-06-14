const swiper = new Swiper('.product__hero-slider', {
    centeredSlides: true,
    navigation: {
        nextEl: ".product__next",
        prevEl: ".product__prev",
      },
    pagination: {
        el: '.product__pagination',
        clickable: true,
        type: 'bullets',
    },  
});

const swiper2 = new Swiper('.ingridients__swiper', {
    centeredSlides: true,
    autoHeight: true,
    navigation: {
        nextEl: ".ingridients__next",
        prevEl: ".ingridients__prev",
      },
    pagination: {
        el: '.ingridients__pagination',
        clickable: true,
        type: 'bullets',
    },  
});

const swiper3 = new Swiper('.testimonials__swiper', {
    centeredSlides: true,
    navigation: {
        nextEl: ".testimonials__next",
        prevEl: ".testimonials__prev",
      },
    pagination: {
        el: '.testimonials-pagination',
        clickable: true,
        type: 'bullets',
    },  
});


$(function () {
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        modal: true,
        removalDelay: 200, 
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

$(function () {
    $('.view-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        modal: true,
        removalDelay: 200, 
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

$(function () {
    $('.main-card-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        modal: true,
        removalDelay: 200, 
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

$(function () {
    $('.personal-info-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        modal: true,
        removalDelay: 200, 
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

$(function () {
    $('.submit-question').magnificPopup({
        type: 'inline',
        preloader: false,
        modal: true,
        removalDelay: 200, 
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});


$(function () {
    $('.delete-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        modal: true,
        removalDelay: 200, 
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
    });
    $(document).on('click', '.logout-button', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

$(function () {
    $('.logout-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        modal: true,
        removalDelay: 200, 
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
    });
    $(document).on('click', '.logout-button', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

$(document).ready(function(){
    $('.personal-info__left ul li a').click(function(){
      if($(this).parent().hasClass('active')){
          return false;
      }
      $('.personal-info__left ul li').removeClass('active');
      $(this).parent().addClass('active');
    });
});


