let isDarkMode = false;

function toggleWhite() {

    isDarkMode = !isDarkMode;
    const button = document.getElementById('toggleButton');

    if (isDarkMode) {
        // Dark Mode wurde aktiviert, ändere die Farbe des Buttons
        button.classList.remove('btn-light');
        button.classList.add('btn-dark'); // Annahme, dass 'btn-dark' deine Dark-Mode-Klasse ist
    } else {
        // Dark Mode wurde deaktiviert, setze die ursprüngliche Farbe des Buttons zurück
        button.classList.remove('btn-dark');
        button.classList.add('btn-light');
    }

    var element = document.body;
    element.classList.toggle("white-mode")
}

