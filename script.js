const API_KEY = 'faa31d02';
const TITULOS = ['Guardians of the Galaxy Vol. 2','Blade Runner 2049','The Matrix Resurrections','Avatar: The Way of Water','Dune','Spider'];
const galeria = document.getElementById('galeria');

TITULOS.forEach(titulo => {
  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(titulo)}`)
    .then(res => res.json())
    .then(data => {
     
      if (data.Response === "True") {

        const div = document.createElement('div');
        div.classList.add('filme');
        div.innerHTML = `
          <img src="${data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/180x270?text=No+Image'}"
               alt="${data.Title}">
          <h3>${data.Title}</h3>
        `;
        galeria.appendChild(div);
      } else {
        console.warn('Filme não encontrado:', titulo);
      }
    })
    .catch(err => console.error('Erro ao buscar filme:', err));
});
