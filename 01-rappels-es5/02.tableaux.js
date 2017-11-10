var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans']
villes.forEach(function(element){ console.log(element)})


console.log("Toutes les villes ont-elles un 'a'? " + villes.every(function (ville) {
    return ville.includes('a')
}))

console.log("Au moins une ville a t-elle un '-'? "+villes.some(function(ville){
    return ville.includes('-')
}))

var villesSansTiretSansEspace = villes.filter(function(ville){
    return !ville.includes(' ') && !ville.includes('-')
})
villesSansTiretSansEspace.forEach(element => console.log(element))

var villesMajusculeSeTerminantParS = villes.filter(function(ville){
    return ville.slice(-1) == 's'
}).map(element => element.toLocaleUpperCase())
villesMajusculeSeTerminantParS.forEach(element => console.log(element))