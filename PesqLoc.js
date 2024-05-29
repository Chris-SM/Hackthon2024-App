function search() {
    const query = document.getElementById('search-input').value;
    const location = "Brasil";
    const resultText = `Resultados para "${query}" em ${location}.`;
    document.getElementById('search-result').innerText = resultText;

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const lat = data[0].lat;
                const lon = data[0].lon;
                const mapContainer = document.getElementById('map');
                mapContainer.innerHTML = `<iframe width="100%" height="400" frameborder="0" style="border:0" src="https://www.openstreetmap.org/export/embed.html?bbox=${lon},${lat},${lon},${lat}&layer=mapnik" allowfullscreen></iframe>`;
            } else {
                alert("Localização não encontrada.");
            }
        })
        .catch(error => {
            console.error('Erro ao buscar a localização:', error);
        });
}

function handleKeyPress(event) {
    if (event.keyCode === 13) { 
        search();
    }
}
function AbGui() {
    document.getElementById("Guia").style.width = "75vw";
}
  
function closeNav() {
    document.getElementById("Guia").style.width = "0";
}