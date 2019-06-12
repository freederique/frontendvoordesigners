# frontend voor designers - opdracht 3

Voor opdracht 3 ga je een functionaliteit ontwerpen met externe data, en testen. De data is JSON die met een REST API van een externe bron wordt ingeladen met Javascript. Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Dit is een voorbeeld van het laden van data en er html mee maken:
[Code demo](https://koopreynders.github.io/frontendvoordesigners/opdracht3/XMLHttpRequest/)


## JSON
JSON van de movies data staat ook hier:
deze uri kun je gebruiken voor een van de use case voor opdracht 3.
[https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json](https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json)

De JSON data is ook los, per film of genre of actors te gebruiken. Check die [hier](https://github.com/KoopReynders/frontendvoordesigners/tree/master/opdracht3/json).

Dit is een voorbeeld van het laden van de film data:

[Code demo](https://koopreynders.github.io/frontendvoordesigners/opdracht3/v1/)


Ik heb op zondag 9 juni samen gewerkt met Iris de Graaf. Samen hebben wij een code bedacht om een JSON bestand in te laden en te werken met een online database. Op deze manier wordt het mogelijk gemaakt om via een titel bestanden op te zoeken en de resultaten te vinden.

In mijn eerste poging die ik heb gemaakt was het mogelijk om een film in te typen in de zoekbalk en 1 resultaat kwam vervolgens eronder als eindresultaat.

<img width="1680" alt="Schermafbeelding 2019-06-12 om 10 15 46 AM" src="https://user-images.githubusercontent.com/49712444/59336780-822c4800-8cff-11e9-8ffc-4d28f1e21e1c.png">
![Uploading Schermafbeelding 2019-06-12 om 10.15.52 AM.png…]()

Dit zag er als volgt uit:

<img width="1680" alt="Schermafbeelding 2019-06-12 om 10 15 46 AM" src="https://user-images.githubusercontent.com/49712444/59337003-ee0eb080-8cff-11e9-8b89-a3aedafd42bb.png">
<img width="1680" alt="Schermafbeelding 2019-06-12 om 10 15 52 AM" src="https://user-images.githubusercontent.com/49712444/59337004-ee0eb080-8cff-11e9-94d5-b4004781f095.png">


Voor mijn iteratieslag wilde ik meer zoekresultaten laten zien omdat er soms meerdere films zijn van 1 zoekopdracht. Denk hierbij bijvoorbeeld aan Harry Potter. Zodra je deze naam intypt wil je niet maar 1 film zien, maar je wil eigenlijk alle films zien die Harry Potter in de titel hebben staan. 
Dit heb ik aangepast door te werken met verschillende articles.

Ik heb de volgende code toegevoegd, waarin duidelijk wordt gemaakt dat zodra er een resultaat is gevonden, de browser door blijft zoeken totdat hij er geen meer kan vinden:
De resulaten worden vervolgens in articles gezet en door middel van een flex wrap heb ik de resultaten naast elkaar gezet, zodat het overzichtelijker is.

   for (var i = 0; i < films.totalResults; i++) {


        var article = document.createElement('article');

        var filmposter = document.createElement('img');
        filmposter.setAttribute("src", films.Search[i].Poster);

        var filmtitel = document.createElement('h2');
        filmtitel.textContent = films.Search[i].Title;

        var filmtype = document.createElement('p');
        filmtype.textContent = films.Search[i].Type;

        var filmjaar = document.createElement('p');
        filmjaar.textContent = films.Search[i].Year;


        article.appendChild(filmtitel);
        article.appendChild(filmtype);
        article.appendChild(filmjaar);
        article.appendChild(filmposter);
        section.appendChild(article);
    }

Dit gaf het volgende resultaat weer:

<img width="1676" alt="Schermafbeelding 2019-06-12 om 10 54 58 AM" src="https://user-images.githubusercontent.com/49712444/59337295-8d33a800-8d00-11e9-8fb9-a30de0e3a690.png">

<img width="1675" alt="Schermafbeelding 2019-06-12 om 10 56 12 AM" src="https://user-images.githubusercontent.com/49712444/59337360-b94f2900-8d00-11e9-9274-32ff00ed3e73.png">


Hierna heb ik mijn eerste test gedaan.
Ik heb als opdracht gegeven om een film op te zoeken en daarna de zoekresultaten weg te halen.
De test ging heel goed en de buttons waren duidelijk. Lisa (mijn testpersoon) heeft een film kunnen opzoeken en vervolgens voordat ik ietse zei had ze alweer op de reset button geklikt en een nieuwe zoekopdracht ingevuld.

![IMG_8231](https://user-images.githubusercontent.com/49712444/59338627-ff0cf100-8d02-11e9-8f6e-2d0f7c69ae34.jpeg)
![IMG_8232](https://user-images.githubusercontent.com/49712444/59338628-ffa58780-8d02-11e9-97b5-84e6abbe8671.jpeg)

In bovenstaand voorbeeld is te zien hoe mijn resultaten naast elkaar worden weergegeven en er een gehele lijst aan resultaten beschikbaar is in plaats van maar 1 resultaat.

![IMG_8231](https://user-images.githubusercontent.com/49712444/59338627-ff0cf100-8d02-11e9-8f6e-2d0f7c69ae34.jpeg)
![IMG_8232](https://user-images.githubusercontent.com/49712444/59338628-ffa58780-8d02-11e9-97b5-84e6abbe8671.jpeg)
