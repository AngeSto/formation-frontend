var service = require("./service")

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function afficherSpeaker(id){
    return service.listerTousLesPresentateurs().filter(speaker => speaker.id == id).map(speaker=>speaker.firstname+" "+speaker.lastname)

}

var menu = {
    "1": {
        libelle: "Liste de tous les présentateurs",
        execute: function () { console.log(service.listerTousLesPresentateurs().map(element => element.firstname + " " + element.lastname)) }
    },
    "2": {
        libelle: "Top présentateurs",
        execute: function () { console.log(service.listerTopPresentateurs().map(element => element.firstname + " " + element.lastname)) }
    },
    "3": {
        libelle: "Liste des sessions",
        execute: function () { console.log(service.listerToutesLesSessions().map(element => element.title)) }
    },
    "4": {
        libelle: "Détails d'une session",
        execute: function () {
            rl.question("Quelle est l'id de la session", id => { console.log(service.trouverUneSession(id).map(element => element.title+" | Speakers: "+afficherSpeaker(element.speakers))) 
        
        boucle()})
        }
    },
    "5": {
        libelle: "Quitter",
        execute: function () { rl.close() }
    }
}
function afficherMenu() {
    for (option in menu) {
        console.log(option, menu[option].libelle)
    }
}
function boucle() {
    afficherMenu()
    rl.question('', (answer) => {
        menu[answer].execute()
        if (answer != 5) {
            boucle();
        }
    })
}
boucle()

