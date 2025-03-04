import {urlanime} from './api.js'; 

urlanime.animeFilter = function (data) {
    let filterImg = document.getElementById('filterImg');
     filterImg.innerHTML = ""; // Limpiar contenido antes de agregar nuevos elementos
 
     data.forEach(data => {
         let card = document.createElement('div');
         card.classList.add('tarjetaDos', 'cards');
         let cardTitulos = document.createElement('div');
         cardTitulos.classList.add('conenedorTitulo', 'cardTitulo');
         let imagen = document.createElement('img');
         imagen.src = data.images.jpg.image_url;
         imagen.classList.add('lazyload');
         imagen.alt = data.title;
         let titulos = document.createElement('h3');
         titulos.classList.add('titulos', 'tituloH3', 'titleBlue');
         titulos.textContent = data.title;
         cardTitulos.appendChild(titulos);
         card.appendChild(imagen);
         card.appendChild(cardTitulos);
         filterImg.appendChild(card);
     });
  }
  urlanime.cargar();
  urlanime.filterAnime();
  urlanime.clickCardsDos();
