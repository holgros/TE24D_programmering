# Animering med Canvas - skapa ett spel

Detta JavaScript-program bygger vidare på Canvas-konceptet som vi utforskat
i [denna uppgift](https://github.com/nika-edu/canvas-uppgift) och
[i denna uppgift](https://github.com/nika-edu/canvas-2022). Skillnaden är att vi
här låter objekten röra på sig och låter det studsa inom canvas-ramen. Dessutom
så fångas några tangenttryckningar upp, det är exempel på en _händelse_ i
programmet. Något som är typiskt för animeringar och även för bl a
knapptryckningar är _callback-funktioner_, även det finns i detta program i form
av en timer som med hög frekvens anropar den (callback)funktion som tecknar
rörelsen.

Efter att du har gått igenom koden (som vi också gör gemensamt under lektion),
är det tänkt att du ska bygga vidare på programmet genom att skapa följande
spelplan och spelregler:

Gör en ram, en rektangel alltså, som går innanför canvas-ramen. Varje gång en av
de båda rörliga kvadraterna åker över denna rektangel ska programmet registrera
detta i en variabel som håller reda på antalet gånger gränsen passerats. Du ska
också lägga till funktionalitet med de fyra tangenter `ä`, `ö`, `a` och `s`
(du kan förstås byta tangenter efter tycke och smak; det är dock dessa som
det finns en implementerad koppling till nu från början),
var och en av dessa ska ändra riktningen på hastigheten i x- eller y-led för
någon av kvadraterna.

Du kan själv ställa in svårighetsgraden genom att variera antalet gånger som
en kvadrat får överskrida gränsen utan att spelet tar slut och genom att variera
hastigheten. Man kan också tänka sig att den inre rektangelns storlek spelar
roll för svårighetsgraden, liksom naturligvis hur fort kvadraterna rör sig. När
gränsen överskridits ditt valda maxumums antal gånger tar spelet slut och det
visar hur lång tid som du lyckades hålla dig inom ramen.

Det går förstås att utveckla spelet ännu mer genom att svårighetsgraden ökar
under spelets gång (högre hastighet och / eller snävare gräns att hålla sig
inom). Det går även att tänka sig att kvadraterna studsar mot varandra när de
kolliderar; i nuläget så påverkar de inte varandra även om de befinner sig på
samma plats vid samma tidpunkt.
