let save = document.getElementById('save');
save.addEventListener('click', () => {
    let name = document.getElementById('nameAnime').textContent;
    let img = document.getElementById('imgAnime').src;
    let anime = {
        name: name,
        img: img
    };
    let animes = JSON.parse(localStorage.getItem('animes')) || [];
    animes.push(anime);
    localStorage.setItem('animes', JSON.stringify(animes));
    console.log(animes);
});