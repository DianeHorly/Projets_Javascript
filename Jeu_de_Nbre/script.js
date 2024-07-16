// Sélection des éléments HTML pour les traitements necessaire
let nbr1 = document.querySelector(".nbr1");
let nbr2 = document.querySelector(".nbr2");
let op = document.querySelector(".op");
let message = document.querySelector(".Message");
let score = document.querySelector(".score");
let link = document.querySelector(".link");
let section = document.querySelector("section");

// Initialisation du compteur pour suivre le score
let compteur = 0;

// Génération de deux nombres aléatoires entre 0 et 19
nbr_aleatoire1 = Math.random() * 20 << 0;
nbr_aleatoire2 = Math.random() * 20 << 0;

// Affichage des nombres aléatoires dans la console pour le débogage
console.log(nbr_aleatoire1);
console.log(nbr_aleatoire2);

// Insertion des nombres aléatoires dans les éléments HTML correspondants
nbr1.innerHTML = nbr_aleatoire1;
nbr2.innerHTML = nbr_aleatoire2;

function validation() {
    // Récupération de la valeur saisie par l'utilisateur
    let result = document.querySelector(".result").value;
    
    // Vérification si la réponse est correcte
    if ((nbr_aleatoire1 + nbr_aleatoire2) == result) {
        // Si la réponse est correcte, changer le fond du message en vert et afficher un message de réussite
        message.style.background = "green";
        message.innerHTML = "Réponse correcte.";
        
        // Génération de nouveaux nombres aléatoires
        nbr_aleatoire1 = Math.random() * 20 << 0;
        nbr_aleatoire2 = Math.random() * 20 << 0;
        
        // Affichage des nouveaux nombres aléatoires dans la console pour le débogage
        console.log(nbr_aleatoire1);
        console.log(nbr_aleatoire2);
        
        // Mise à jour des nombres affichés dans les éléments HTML
        nbr1.innerHTML = nbr_aleatoire1;
        nbr2.innerHTML = nbr_aleatoire2;
        
        // Incrémentation du compteur de score
        compteur += 1;
    } else {
        // Si la réponse est incorrecte, changer le fond du message en rouge et afficher un message d'échec
        message.style.background = "red";
        message.innerHTML = "Réponse incorrecte.";
        
        // Effacer le contenu de la section
        section.innerHTML = " ";
        
        // Afficher le score final
        score.innerHTML = `Score </br> <span>${compteur}</span>`;
        
        // Afficher le lien pour recommencer
        link.style.display = "block";
    }
}
