// bij click gebeurd er wat
document.querySelector('#search-by-title-button').addEventListener("click", zoeken);
document.querySelector('#search-by-title-reset').addEventListener("click", reset);


// functie zoeken aangemaakt,
//t is titel en daar zoekt hij naar films
//y is yaar en dan zoekt hij naar het jaartal
// hij haalt het uit de bron die vermeld staat, dat is een online database van json.

// bij de request worden de gegevens geladen.

function zoeken() {
    var tietel = document.querySelector("#t").value;
    var jaar = document.querySelector("#y").value;
    //console.log('www.omdbapi.com/?apikey=8f5b4526&t=' + tietel);
    var uri = 'https://www.omdbapi.com/?apikey=8f5b4526&s=' + tietel + '&y=' + jaar;
    console.log(uri);

    var request = new XMLHttpRequest();
    request.open('get', uri);
    request.responseType = 'json';
    request.send();

    request.addEventListener("load", function () {
        showData(request.response);
        //console.log("request is geladen:", request.response);
        //er is data
        //nu kun je iets doen zoals de json echo'en
        //section.textContent = JSON.stringify(data);
    });

}


// hier voert hij de function uit
function showData(jsonObj) {
    var films = jsonObj;
    var section = document.querySelector('section');

    console.log("showData films", films);

    // hier komen meer resultaten tevoorschijn, dus niet eentje.
    for (var i = 0; i < films.totalResults; i++) {


        // article geeft aan dat alles in 1 article moet staan
        var article = document.createElement('article');

        // gegevens die op worden gehaald, je maakt een img aan, en vervolgens haalt hij de poster op zodat die in de img komt

        var filmposter = document.createElement('img');
        filmposter.setAttribute("src", films.Search[i].Poster);

        var filmtitel = document.createElement('h2');
        filmtitel.textContent = films.Search[i].Title;

        var filmtype = document.createElement('p');
        filmtype.textContent = films.Search[i].Type;

        var filmjaar = document.createElement('p');
        filmjaar.textContent = films.Search[i].Year;


        // puur voor volgorde
        article.appendChild(filmtitel);
        article.appendChild(filmtype);
        article.appendChild(filmjaar);
        article.appendChild(filmposter);
        section.appendChild(article);
    }
}

//Broncode: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent




//zorgt ervoor dat de function wordt reset
function reset() {
    location.reload();
}




// Ervoor gezorgd dat er met enter gezocht kan worden

var input = document.getElementById("search-by-title-button");

input.addEventListener("keyup", function (event) {

    if (event.keyCode === 13) {

        event.preventDefault();

        document.getElementById("search-by-title-button").click();
    }
});
