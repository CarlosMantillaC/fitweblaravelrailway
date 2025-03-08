// Importación de dependencias de npm
import $ from 'jquery';
// Importa Bootstrap correctamente
import 'bootstrap/dist/js/bootstrap.bundle.min'; // JS + Popper
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS
import Masonry from 'masonry-layout';
import 'owl.carousel';
import 'jquery-barfiller';
import 'magnific-popup';

// Importar CSS desde node_modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'magnific-popup/dist/magnific-popup.css';

import '../assets/css/flaticon.css';
import '../assets/css/barfiller.css';
import '../assets/css/slicknav.min.css';
import '../assets/css/style.css';
import '../assets/css/forms.css';
import '../assets/css/materialdesignicons.min.css';
import '../assets/css/menuadminclien.css';


// Configuración inicial después de cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar contenido
    document.documentElement.style.visibility = 'visible';
    
    // Inicializar plugins que necesitan jQuery
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true
    });

    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Inicializar masonry
    const grid = document.querySelector('.grid');
    if(grid) {
        new Masonry(grid, {
            itemSelector: '.grid-item',
            percentPosition: true
        });
    }

    // Inicializar barfiller
    $('#bar1').barfiller();
    $('#bar2').barfiller();
});
