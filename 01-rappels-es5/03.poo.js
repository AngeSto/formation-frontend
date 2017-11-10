function Personne(nom, prenom, pseudo){
    this.nom=nom
    this.prenom=prenom
    this.pseudo=pseudo
    this.getNomComplet = function(){
        return this.nom+" "+this.prenom+" "+this.pseudo
    }
}
var jules = new Personne("Jules",'LEMAIRE', 'jules77')

var paul = new Personne('Paul', 'LEMAIRE', 'paul44')

function Afficher(personne){
    console.log(personne.nom)
    console.log(personne.prenom)
    console.log(personne.pseudo)
    console.log(personne.getNomComplet())
}

Afficher(jules)
Afficher(paul)

jules.pseudo='jules44'
Afficher(jules)

console.log("jules.age = "+jules.age)
jules.age="NON RENSEIGNE"
console.log("jules.age = "+jules.age)
jules.age = 30
console.log("jules.age = "+jules.age)

Personne.prototype.getInitiales=function(){
    return this.prenom.charAt(0)+this.nom.charAt(0)
}
console.log(jules.getInitiales())

var robert= {
    nom:"Robert", 
prenom:"LEPREFET", 
pseudo:"robert77", 
getNomComplet(){return this.nom+" "+this.prenom+" "+this.pseudo}}
Afficher(robert)

function Client(nom, prenom, pseudo, numeroClient){
    Personne.call(this, nom, prenom, pseudo)
    this.numeroClient=numeroClient
    this.getInfos = function(){
        return this.numeroClient+" "+this.nom+" "+this.prenom
    }
}

var steve = new Client("Steve", "LUCAS", "steve44", "A01")

Afficher(steve)
console.log(steve.numeroClient)
console.log(steve.getInfos())
