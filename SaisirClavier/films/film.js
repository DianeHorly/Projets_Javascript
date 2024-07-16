
let listeFilms = ["Star Wars", "Le Seigneur des Anneaux", "Le Hobbit", "Harry Potter"]

let baliseListeFilm = document.querySelector("#listeFilm");

//let baliseListeFilm1 = document.getElementById("listeFilm");

/**
 * mettre chaque élément de la div “listeFilm”  dans une liste à puces
 * 
 */
let ul = document.createElement("ul")
for (let i = 0; i < listeFilms.length; i++) {
    let li = document.createElement("li")
    li.textContent = listeFilms[i]
    ul.appendChild(li)
}
/*
let codeHtml = "<ul>"
for (let i = 0; i < listeFilms.length; i++) {
    codeHtml += `<li>${listeFilms[i]}</li>`
}
codeHtml += "</ul>"*/