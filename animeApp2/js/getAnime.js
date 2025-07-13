let getAnime = JSON.parse(localStorage.getItem('animes')) || [];
let animeName = document.getElementById('cardCont');

if (getAnime) {
 // Limpiar el contenido antes de agregar las tarjetas
  getAnime.forEach(anime => {
    let card = document.createElement('div');
    card.classList.add('tarjetaDos', 'cards');
    let imagen = document.createElement('img');
    let cardTitulos = document.createElement('div');
    cardTitulos.classList.add('conenedorTitulo', 'cardTitulo');
    let titulos = document.createElement('h3');
    titulos.classList.add('titulos', 'tituloH3', 'titleBlue');
    imagen.src = anime.img;
    imagen.alt = anime.name;
    titulos.textContent = anime.name; // Usar el nombre del anime de localStorage
    cardTitulos.appendChild(titulos);
    card.appendChild(imagen);
    card.appendChild(cardTitulos);
    animeName.appendChild(card);
  });
}
    