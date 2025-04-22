var ralThorin = document.querySelectorAll('[id=ralThorin]');
for (var i = 0; i < ralThorin.length; i++) {
    ralThorin[i].href = "/";;
}

var carte = document.querySelectorAll('[id=carte]');
for (var i = 0; i < carte.length; i++) {
    carte[i].href = "/carte/";
}

var categories = document.querySelectorAll('[id=categories]');
for (var i = 0; i < categories.length; i++) {
    categories[i].href = "/categories/";
}

// Catégories :

var lieux = document.querySelectorAll('[id=lieux]');
for (var i = 0; i < lieux.length; i++) {
    lieux[i].href = "/categories/lieux/";
}

var personnages = document.querySelectorAll('[id=personnages]');
for (var i = 0; i < personnages.length; i++) {
    personnages[i].href = "/categories/personnages/";
}

// Lieux :

/*
var regions = document.querySelectorAll('[id=regions]');
for (var i = 0; i < regions.length; i++) {
    regions[i].href = "/categories#regionsAnchor";
}

var villes = document.querySelectorAll('[id=villes]');
for (var i = 0; i < villes.length; i++) {
    villes[i].href = "/categories#villesAnchor";
}

var villages = document.querySelectorAll('[id=villages]');
for (var i = 0; i < villes.length; i++) {
    villages[i].href = "/categories#villagesAnchor";
}
*/

// Régions :

var amanYlith = document.querySelectorAll('[id=amanYlith]');
for (var i = 0; i < amanYlith.length; i++) {
    amanYlith[i].href = "/categories/lieux/regions/aman-ylith/";
}

var karakUol = document.querySelectorAll('[id=karakUol]');
for (var i = 0; i < karakUol.length; i++) {
    karakUol[i].href = "/categories/lieux/regions/karak-uol/";
}

var valBrise = document.querySelectorAll('[id=valBrise]');
for (var i = 0; i < valBrise.length; i++) {
    valBrise[i].href = "/categories/lieux/regions/val-brise/";
}

// Villes : 

var eauclaire = document.querySelectorAll('[id=eauclaire]');
for (var i = 0; i < eauclaire.length; i++) {
    eauclaire[i].href = "/categories/lieux/villes/eauclaire/";
}

var havregel = document.querySelectorAll('[id=havregel]');
for (var i = 0; i < havregel.length; i++) {
    havregel[i].href = "/categories/lieux/villes/havregel/";
}

var thaldrassin = document.querySelectorAll('[id=thaldrassin]');
for (var i = 0; i < thaldrassin.length; i++) {
    thaldrassin[i].href = "/categories/lieux/villes/thaldrassin/";
}

var valimar = document.querySelectorAll('[id=valimar]');
for (var i = 0; i < valimar.length; i++) {
    valimar[i].href = "/categories/lieux/villes/valimar/";
}

// Villages :

var lorebois = document.querySelectorAll('[id=lorebois]');
for (var i = 0; i < lorebois.length; i++) {
    lorebois[i].href = "/categories/lieux/villages/lorebois/";
}

// Personnages :
/*
var divinites = document.querySelectorAll('[id=divinites]');
for (var i = 0; i < divinites.length; i++) {
    divinites[i].href = "/categories#divinitesAnchor";
}
*/
// Divinités :

var eol = document.querySelectorAll('[id=eol]');
for (var i = 0; i < eol.length; i++) {
    eol[i].href = "/categories/personnages/divinites/eol/";
}