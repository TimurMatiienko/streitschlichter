function showSection(sectionId) {
    // Alle Sektionen ausblenden
    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
    });

    // Gewählte Sektion anzeigen
    document.getElementById(sectionId).classList.add('active');
}
