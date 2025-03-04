let urlanime = {
  url:'https://api.jikan.moe/v4/',

  numero: 1,
  schedules: function (){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let today =  days[new Date().getDay()];
    let urlSchedules = `${urlanime.url}schedules?filter=${today}`
    fetch(urlSchedules)
    .then(response => response.json())
    .then( data => {
      this.animeToday(data.data)

    })
    
  },
   animeToday: function (data){
    console.log("Anime airing today:", data);
  },
  statu: function () {
    let urlEmision = `${urlanime.url}anime?status=airing`
    fetch(urlEmision)
    .then(response => response.json())
    .then(data => {
      this.animerEmision(data.data)
    })
  },
  animerEmision: function () {
    
  },
  newAdded: function () {
    let hoy = new Date();
    let season = ['winter', 'spring', 'summer', 'fall']; 
    let mes = season[Math.floor((hoy.getMonth() + 1) / 3) % 4]; // calculos para obtener la temporada actual
    let year = hoy.getFullYear();
    let newAddedUrl = `${urlanime.url}seasons/${year}/${mes}`
    fetch(newAddedUrl)
    .then(response => response.json())
    .then(data => {
      this.addNew(data.data)
    })
    
  },
  addNew: function() {

  },
  inicializarSlider: function (sliderId, botonIzqId, botonDerId) {
    let slider = document.getElementById(sliderId);
    let izquierda = document.getElementById(botonIzqId);
    let derecha = document.getElementById(botonDerId);
    let sliderItems = slider.children;
    let sliderCount = sliderItems.length;
    let sliderIndex = 0;
    if (sliderCount === 0) return; // Si no hay elementos, no hacemos nada

    let cardWidth = sliderItems[0].offsetWidth; // Ancho de la tarjeta + margen
    let maxScroll = (sliderCount - 1) * cardWidth; // Máximo desplazamiento

    izquierda.addEventListener('click', () => {
        sliderIndex = Math.max(sliderIndex - 1, 0); // No bajar de 0
        let desplazamiento = sliderIndex * -cardWidth;
        slider.style.transform = `translateX(${desplazamiento}px)`;
    });

    derecha.addEventListener('click', () => {
        sliderIndex = Math.min(sliderIndex + 1, sliderCount - 1); // No superar el máximo
        let desplazamiento = sliderIndex * -cardWidth;
        slider.style.transform = `translateX(${desplazamiento}px)`;
    });
    
},
  
  filterAnime: function () {
    let filterUrl = `${urlanime.url}anime?page=${urlanime.numero}`;
    
   
      let genero = document.getElementById('genero').value;
      let tipo = document.getElementById('tipo').value;
      let estado = document.getElementById('estado').value;
      if (genero) {
        filterUrl += `&genres=${genero}`;
    }
    if (tipo) {
      filterUrl += `&type=${tipo}`;
    }
    if (estado) {
      filterUrl += `&status=${estado}`;
    } 
    
  
    fetch(filterUrl)
    .then(response => response.json())
    .then(data => {
        this.animeFilter(data.data); // Mostrar los datos
    })
    
    


  },
  cargar: function () {
    let number = document.getElementById('number');
    let button = document.getElementById('botonFiltro');
    let derecha = document.getElementById('derecha');
    let izquierda = document.getElementById('izquierda');
  derecha.addEventListener('click', () => { // Cambia este valor si quieres avanzar más páginas
      urlanime.numero++; // Incrementa el número de página de uno en uno correctamente
  
    number.innerText = urlanime.numero; // Muestra el número correcto en pantalla
    urlanime.filterAnime();
    }) // Llama a la función solo una vez con el número correcto

    izquierda.addEventListener('click', () => {
      if (urlanime.numero > 1) {
        urlanime.numero--;
        number.innerText = urlanime.numero;
        urlanime.filterAnime();
      }
    })
    button.addEventListener('click', () => {
      urlanime.numero = 1; // Reiniciar a la primera página
    number.textContent = urlanime.numero;
    urlanime.filterAnime();
    })
  },
  animeFilter: function () {
  },
  searchanime: function (anime) {
    
    let animecahe = [];
    if (animecahe[anime]) {
      urlanime.searchname(animecahe[anime]);
    }else{
      let searchUrl = `${urlanime.url}anime?q=${anime}`
      fetch(searchUrl)
      .then(response => response.json())
      .then(data => {
        animecahe[anime] = data.data
        this.searchname(data.data);
      })
    }
    
  },
  inputname: function () {
    let animeSearch = document.getElementById('animeSearch'); 
    animeSearch.addEventListener('input', (e) => {
       
        let input = e.target.value;
        if (input) {
            urlanime.searchanime(input); // Llama a cargarAnime con lo que el usuario escribe
        } 
      
      })
      window.addEventListener('load', () => {
        urlanime. searchanime('gintama'); // Puedes usar cualquier anime popular aquí
    });
  },
  searchname: function() {
    
  },
  clickCards: function() {
    document.addEventListener('click', (e) => {
      let tarjeta = e.target.closest('.tarjetaDos');
      let titulo = tarjeta.querySelector('.tituloH3'); // Busca el título dentro de la tarjeta
    if (titulo) {
        console.log(titulo.innerText);
        let animeTitulo = titulo.innerText.trim();
        let animeInfo = `${urlanime.url}anime?q=${animeTitulo}&limit=1`;

        fetch(animeInfo)
            .then(response => response.json())
            .then(data => {
                if (data.data && data.data.length > 0) {
                    let animeId = data.data[0].mal_id; // Obtiene el ID del anime
                    window.location.href = `../anime/anime.html?id=${animeId}`;
                } else {
                    console.error("No se encontró el anime");
                }
            })
            .catch(error => console.error("Error al buscar el anime:", error));
            let animeInfoDos = `${urlanime.url}anime?q=${animeTitulo}&limit=1`;
            fetch(animeInfoDos)
            .then(response => response.json())
            .then(data => {
                if (data.data && data.data.length > 0) {
                    let animeId = data.data[0].mal_id; // Obtiene el ID del anime
                    window.location.href = `../anime/anime.html?id=${animeId}`;
                } else {
                    console.error("No se encontró el anime");
                }
            })
    }
    
    })
  },
  animeIn: function () {
    let params = new URLSearchParams(window.location.search);
    let animeId = params.get('id');  

    if (animeId) {
        let urlId = `${urlanime.url}anime/${animeId}`;
        fetch(urlId)
            .then(response => response.json())
            .then(data => {
                if (data.data) {
                    this.animeIdName(data.data);
                } else {
                    console.error("No se encontró información del anime");
                }
            })

        let urlPersonajes = `${urlanime.url}anime/${animeId}/characters`
        fetch(urlPersonajes)
        .then(response => response.json())
        .then(data => {
          if (data.data) {
            this.animeIpersonajes(data.data)
          }else {
            console.error("No se encontró información del anime");
        }
          
        })

    }
  },
  animeIdName: function() {
    
  },
  animeIpersonajes: function () {
    
  } 
} 

export {urlanime};


