import {urlanime} from './api.js'; 
urlanime.animeIdName = function (data){
    let img = document.getElementById('imgAnime');
    if (img && data.images?.jpg?.image_url) {
        img.src = data.images.jpg.image_url;
    }

    let nameAnime = document.getElementById('nameAnime');
    if (nameAnime && data.title) {
        nameAnime.textContent = data.title;
    }
    let information = document.getElementById('information');
    if (information && data.synopsis) {
        information.textContent = data.synopsis;
    }

    let gender = document.getElementById('gender');
    if (gender && Array.isArray(data.genres)) {
        gender.innerHTML = ''; // Limpia antes de agregar géneros
        data.genres.forEach(genre => {
            let nameG = document.createElement('li');
            nameG.classList.add('gnreName', 'titulos', 'titleBlue');
            nameG.textContent = genre.name;
            gender.appendChild(nameG);
        });
    }

    
   console.log(data.title);
};

urlanime.animeIpersonajes = function(data) {
    let contenedorPersonajes = document.getElementById('personaje');
    if (contenedorPersonajes) { 
        data.forEach(data => {
            let divPersonaje = document.createElement('div');
            divPersonaje.classList.add('personaje-item');

            let img = document.createElement('img');
            img.src = data.character.images.jpg.image_url;
            img.alt = data.character.name;

            let nombre = document.createElement('h3');
            nombre.classList.add('titulos', 'titleBlue');
            nombre.textContent = data.character.name;

            divPersonaje.appendChild(img);
            divPersonaje.appendChild(nombre);
            contenedorPersonajes.appendChild(divPersonaje);
        });
    }
}
urlanime.animeIn()