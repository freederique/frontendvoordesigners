document.querySelector('#search-by-title-button').addEventListener("click", zoeken);
document.querySelector('#search-by-title-reset').addEventListener("click", reset);

function zoeken() {
    var tietel = document.querySelector("#t").value;
    var jaar = document.querySelector("#y").value;
    //console.log('www.omdbapi.com/?apikey=8f5b4526&t=' + tietel);
    var uri = 'https://www.omdbapi.com/?apikey=8f5b4526&t=' + tietel + '&y=' + jaar;
    console.log(uri);

    var request = new XMLHttpRequest();
    request.open('get', uri);
    request.responseType = 'json';
    request.send();

    request.addEventListener("load", function () {
        showData(request.response);
        //console.log("request is geladen: ", request.response);
        //er is data
        //nu kun je iets doen zoals de json echo'en
        //section.textContent = JSON.stringify(data);
    });

}



function showData(jsonObj) {
    var films = jsonObj;
    var section = document.querySelector('section');

    console.log("showData films", films);

    //https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

    var filmtitel = document.createElement('h2');
    filmtitel.textContent = films.Title;

    var filmjaar = document.createElement('p');
    filmjaar.textContent = films.Year;

    var filmgenre = document.createElement('p');
    filmgenre.textContent = films.Genre;

    var director = document.createElement('p');
    director.textContent = films.director;

    var filmtaal = document.createElement('p');
    filmtaal.textContent = films.Language;



    var filmposter = document.createElement('img');
    filmposter.setAttribute("src", films.Poster);


    section.appendChild(filmtitel);
    section.appendChild(filmjaar);
    section.appendChild(filmgenre);
    section.appendChild(filmtaal);
    section.appendChild(director);
    section.appendChild(filmposter);
}


function reset() {
    location.reload();
}
