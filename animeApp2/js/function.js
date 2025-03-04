import {urlanime} from './api.js'; 
 urlanime.animeToday = function (data) {
    let tarjetas = document.getElementsByClassName('tarjeta');
    Array.from(tarjetas).forEach((tarjeta, index) => {
       let imagen = document.createElement('img');
        let titulo = document.createElement('h3');
        let episodio = document.createElement('p');
        titulo.classList.add('titulos', 'tituloH3', 'titleWith');
        episodio.classList.add('titulos', 'parrafo', 'titleBlue');
        imagen.src = data[index].images.jpg.image_url; // Imagen del anime
        imagen.classList.add('lazyload');
        imagen.alt = data[index].title; // Texto alternativo
        titulo.textContent = data[index].title; // Título del anime
        episodio.textContent = `Episode ${data[index].episodes}`;
        // Agregar elementos a la tarjeta
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(episodio); 
    });
 }
 urlanime.schedules();

 urlanime.animerEmision = function (data) {
    let cardEmision = document.querySelector('#sliderD');
    cardEmision.innerHTML = '';
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
      cardEmision.appendChild(card);
    });
    urlanime.inicializarSlider('sliderD', 'Iboton', 'Dboton');
 };
 urlanime.statu();

 urlanime.addNew = function (data) {
    let cardUltimos =  document.querySelector('#slider');
     data.forEach( data => { 
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
      cardUltimos.appendChild(card);
     });
     urlanime.inicializarSlider('slider', 'botonI', 'botonD');
 };
 
 urlanime.newAdded();
 urlanime.clickCards();