// Creation compte a revours en  Javascript Vanilla

/*
- Initialisation du Count Down avec la date de lancement avec la méthode "new Date()"
- Transformation Mathématique grâce a la méthode ".getTime"
- Utilisation de la commande "console.log()" pour afficher le résultat sur le nav
*/

const decompteDateFinale = new Date("nov 21, 2025 00:00:00").getTime();
console.log(decompteDateFinale);

/*
- Initialisation du Count Down avec la date d'aujourd'hui' avec la méthode "new Date()"
- Transformation Mathématique grâce a la méthode ".getTime"
- Utilisation de la commande "console.log()" pour afficher le résultat sur le nav
*/


function decompte() {
    let today = new Date().getTime();
    console.log(today);
    let gap = decompteDateFinale - today;

    let secondes = 1000;
    let minutes = secondes * 60;
    let heures = minutes * 60;
    let jours = heures * 24;

    let j = Math.floor(gap / jours);
    let h = Math.floor((gap % jours) / heures);
    let m = Math.floor((gap) % (heures) / (minutes))
    let s = Math.floor((gap) % (minutes) / (secondes))

    /* Injection de la variable en version texte avec "Innertext" */

    document.getElementById('jour').innerText = j;
    document.getElementById('heure').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('seconde').innerText = s;

}

/* Set Interval pour rafraichire automatiquement la page toutes les secondes
 */

setInterval(function() {
        decompte();
}, 1000);
