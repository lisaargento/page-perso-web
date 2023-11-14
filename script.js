function changeLanguage() {
    var languageSelect = document.getElementById('language');
    var selectedLanguage = languageSelect.value;

    // Changer l'attribut lang de la balise html pour la langue sélectionnée
    document.documentElement.lang = selectedLanguage;

    // Charger le contenu dans la nouvelle langue (vous devrez remplacer le contenu avec le texte dans vos langues)
    var contentDiv = document.getElementById('content');
    switch (selectedLanguage) {
        case 'fr':
            contentDiv.innerHTML = `
                <h1>Bienvenue</h1>
                <p>Ceci est le contenu de la page en français.</p>
            `;
            break;
        case 'en':
            contentDiv.innerHTML = `
                <h1>Welcome</h1>
                <p>This is the content of the page in English.</p>
            `;
            break;
        case 'es':
            contentDiv.innerHTML = `
                <h1>Bienvenido</h1>
                <p>Este es el contenido de la página en español.</p>
            `;
            break;
        default:
            break;
    }
}
