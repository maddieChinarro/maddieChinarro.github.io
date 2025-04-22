const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -1.5,
    maxZoom: 2,
    zoomSnap: 0,
    attributionControl: false
});

let screenType = window.matchMedia("(max-width: 700px)")

const bounds = [[0,0], [1536,2048]];

if (screenType.matches) {
    const image = L.imageOverlay('/ressources/img/mapBackground_2048.webp', bounds).addTo(map);
} else {
    const image = L.imageOverlay('/ressources/img/mapBackground_4096.webp', bounds).addTo(map);
}

const lorebois = L.marker([525, 1118]).addTo(map);
lorebois.bindPopup("<a href='/categories/lieux/villages/lorebois/'>Lorebois</a>").openPopup();
const valimar = L.marker([540, 800]).addTo(map);
valimar.bindPopup("<a href='/categories/lieux/villes/valimar/'>Valimar</a>").openPopup();
const thaldrassin = L.marker([528, 1846]).addTo(map);
thaldrassin.bindPopup("<a href='/categories/lieux/villes/thaldrassin/'>Thaldrassin</a>").openPopup();
const eauclaire = L.marker([625, 1696]).addTo(map);
eauclaire.bindPopup("<a href='/categories/lieux/villes/eauclaire/'>Lorebois</a>").openPopup();

map.fitBounds(bounds);

if (screenType.matches) {
    map.setZoom(-1);
} else {
    map.setZoom(0);
}