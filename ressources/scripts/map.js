const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 2,
    zoomSnap: 0,
    attributionControl: false
});

const bounds = [[0,0], [1536,2048]];
const image = L.imageOverlay('/ressources/img/mapBackground_2048.png', bounds).addTo(map);

const valimar = L.marker([540, 800]).addTo(map);
valimar.bindPopup("<a href='/villes/valimar/'>Valimar</a>").openPopup();
const thaldrassin = L.marker([525, 1852]).addTo(map);
thaldrassin.bindPopup("<a href='/villes/thaldrassin/'>Thaldrassin</a>").openPopup();
const eauclaire = L.marker([625, 1696]).addTo(map);
eauclaire.bindPopup("<a href='/villes/eauclaire/'>Eauclaire</a>").openPopup();

map.fitBounds(bounds);
