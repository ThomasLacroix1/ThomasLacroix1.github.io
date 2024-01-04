// Objets
let Description = [
    { nom: "html", description: "Je connais très bien le langage HTML et je suis capable de créer un code HTML de zéro, en respectant le W3C." },
    { nom: "css", description: "Pour le CSS, j'utilise en général la méthode SASS, que je connais donc très bien, mais je suis également capable de travailler en Tailwind, méthode que j'ai aussi apprise." },
    { nom: "js", description: "En JavaScript, je sais utiliser les selecteurs, les events, la méthode DOM ou encore les classes et les objets." },
    { nom: "php", description: "Le PHP me sert pour l'utilisation de données, que ce soit par une base de données ou des objets, classes." },
    { nom: "sql", description: "Je sais parfaitement gérer une base de données avec SQL, langage que je pratique depuis maintenant plusieurs années." },
    { nom: "figma", description: "J'ai eu l'occasion de créer de nombreuses interfaces et autres à l'aide de Figma. Je suis donc tout à fait capable de l'utiliser correctement." },
    { nom: "adobe", description: "J'ai des connaissances dans la suite Adobe, sur des logiciels tel que Photoshop, Illustrator ou encore Première Pro, mais je ne suis pas spécialisé dans ce domaine." }
];

let Card = [
    { titre: "Site de Streaming", description: "Conception d'un site de streaming simple.", source: "assets/Site_de_streaming.webp", page : "en-cours"},
    { titre: "Cartes de Tarot", description: "De très jolies cartes de tarot marseillais.", source: "assets/carte_tarot.webp", page : "en-cours"}
]

// Description Compétences
let logos = document.querySelector(".main__competences__details__logos");
logos.addEventListener("click", showDescription);

function showDescription(ev) {
    if (ev.target.className === "main__competences__details__logos__svg"){
        let p = document.querySelector(".main__competences__details__description");
        let desc = ev.target.dataset.name;
        Description.forEach(item => {
            if (p.dataset.skill === item.nom) {
                p.textContent = "";
                p.dataset.skill = "";
            } else if (item.nom === desc) {
                p.textContent = item.description;
                p.dataset.skill = item.nom;
            }
        });
    }
    
}

// Affichage Cartes
Card.forEach(item => {
    let template = document.querySelector(".main__projets__template").innerHTML;
    let html = template;
    html = html.replace("{{titre}}", item.titre);
    html = html.replace("{{src}}", item.source);
    html = html.replace("{{description}}", item.description);
    html = html.replace("{{alt}}", item.titre);
    html = html.replace("{{page}}", item.page);
    let cards = document.querySelector(".main__projets__cards");
    cards.innerHTML += html;
})

// Clic sur les cartes
let cards = document.querySelector(".main__projets__cards");
cards.addEventListener("click", showPage);

function showPage(ev){
    if (ev.target.className === "main__projets__cards__card"){
      document.location.href="dist/pages/"+ev.target.dataset.page+".html";  
    }
}

// menu burger

document.querySelector(".header__burger").addEventListener("click", function() {
    document.querySelector("#header__nav").classList.toggle("show");
});
document.querySelector("body").addEventListener("click", function(ev){
    let classe = ev.target.classList;
    for (let i=0; i>classe.length-1; i++){
        if (document.querySelector("#header__nav").classList.contains("show") && classe[i].includes("header__burger")){
            document.querySelector("#header__nav").classList.remove("show");
        }
    }
    
});
