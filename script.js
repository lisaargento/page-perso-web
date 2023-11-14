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
            <section id="accueil" class="container">
            <p>Bonjour et bienvenue!</p>
            <p>Je suis étudiante en master Aménagement et politiques urbaines. Je suis passionnée par la géographie sociale et sur comment l'aménagement du territoire défini les interactions humaines notamment en milieu urbain.</p>
            <p>Depuis que je suis toute petite je suis passionnée par la nature, je m’y sens à l’aise et en même temps elle m’interroge. Je me souviens que mes parents m'avaient offert un kit d’élevage de fourmis (Lasius). Les fourmis sont des insectes sociaux, c'est-à-dire qu’elles vivent et s’organisent en colonie et démontrent une intelligence collective.</p>
            <p>Après avoir passé un Bac Science et vie de la Terre, j’ai étudié, la sociologie et la géographie pendant deux ans en classe préparatoire BL. Et s’est développée l’idée, pendant ce temps-là, que je devais réfléchir et travailler sur l'aménagement du territoire pour améliorer les relations sociales. J'ai donc souhaité intégrer une école de géographie qui tente de comprendre le monde grâce aux technologies de l'information géographique.</p>
            <p>Cela m'a conduit à l’ENSG, l'École nationale des sciences géographiques en géomatique. Je voulais que mon travail soit un outil pour soutenir la prise de décision dans ces domaines. J'ai étudié les systèmes d'information géographique, la cartographie, la télédétection, et d’autres domaines qui permettent l’étude de la Terre. Cela m’a permis d’apprendre à modéliser, représenter et analyser le territoire.</p>
            <p>Cependant, je souhaite maintenant approfondir mes études en géographie sociale et en sociologie urbaine pour contribuer, plus que aider, à la mise en œuvre de politiques d’aménagement durable du territoire. J'ai ainsi intégré un double diplôme avec l'ENTPE (ECole Nationale des Travaux Publics de l'Etat).</p>
            <p>Comme vous, mon approche du territoire est plurielle et c’est cet habiter, cette appropriation particulière qui me fait revoir la construction du territoire. Je vis la ville comme piétonne, étudiante, comme cycliste. J’utilise les transports en commun, je marche seule avec de la musique dans les oreille, je marche avec groupe avec des jeunes de Centre aéré ou de colonie de vacances lorsque je suis animatrice. J’ai marché dans les rues de Paris, de Leshan en Chine, d’Etchmiadzine, de Dublin entre autre. J’ai écouté des gens qui vivent dans la rue en maraudant avec la Croix-Rouge, je porte la parole et les projets de jeunes de ma ville au Conseil Local de la Jeunesse. Pour moi, voir la ville par des yeux différents est une richesse qui me fait réfléchir à l’interaction des individus au territoire, comment l’aménagement définit notre rapport au territoire, l’habiter des individus, leurs déplacements, leur consommation et leurs interactions sociales.</p>
            <p>Je voudrais étudier pour travailler à fabriquer une ville évolutive, maintenable et flexible qui s’adaptera sans-cesse pour répondre aux risques et aux besoins changeants des citoyens.</p>
            <p>Et si vous voulez en savoir plus mes angagements et mes principaux projets rendez-vous dessous ! </p>
          </section>
          
          <!-- <section id="portfolio" class="container">
            <h2>Portfolio</h2>
            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title">Projets scolaires et professionnels</h3>
                    <p class="card-text">Description du projet 1.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title">Engagements et projets personnels</h3>
                    <p class="card-text">Description du projet 2.</p>
                  </div>
                </div>
              </div>
            </div>
          </section> -->
        
            
          <section id="cv" class="container">
            <h2>Mon CV</h2>
            <embed src="cv_fr.pdf" type="application/pdf" width="100%" height="600px" />
            <a class="fas fa-cloud-download-alt" download="cv_en.pdf"> Télécharger la version anglaise</a>
          </section>
          
          <section id="contact" class="container">
            <h2>Me contacter</h2>
              <ul class="contact-list">
                <li>
                  <i class="fa fa-map-marker"></i>
                  <a>Paris, France</a>
                </li>
                <li>
                  <i class="fa fa-envelope"></i> 
                  <a href="mailto:lisa.argento@ensg.eu">lisa.argento@ensg.eu</a>
                </li>
                <li>
                  <i class="fa fa-phone"></i> 
                  <a href="+33 6 95 32 63 90">+33 6 95 32 63 90</a>
                </li>
                <li>
                  <i class="fab fa-linkedin"></i> 
                  <a href="https://www.linkedin.com/in/lisa-argento-25l92a" target="_blank">LinkedIn</a>
                </li>
                <li>
                  <i class="fab fa-github"></i> 
                  <a href="https://github.com/lisaargento" target="_blank">GitHub</a>
                </li>
                <li>
                  <i class="fab fa-gitlab"></i> 
                  <a href="https://gitlab.com/lisa.argento" target="_blank">GitLab</a>
                </li>
              </ul>
          </section>
        `;
            break;
        case 'en':
            contentDiv.innerHTML = `
            <section id="accueil" class="container">
                <p>Welcome!</p>
                <p>I am a master's student in urban planning and public policies. I am passionate about social geography and how territorial planning shapes human interactions, especially in urban environments.</p>
                <p>Since I was little, I have been fascinated by nature; I feel comfortable in it, and at the same time, it intrigues me. I remember my parents gave me an ant breeding kit (Lasius). Ants are social insects, meaning they live and organize themselves in colonies, demonstrating collective intelligence.</p>
                <p>After completing a Bachelor's in Life and Earth Sciences, I studied sociology and geography for two years in a preparatory class (BL). During this time, the idea developed that I should focus on territorial planning to improve social relations. So, I decided to join a geography school that seeks to understand the world through geographic information technologies.</p>
                <p>This led me to ENSG, the National School of Geographic Sciences in geomatics. I wanted my work to be a tool to support decision-making in these fields. I studied geographic information systems, cartography, remote sensing, and other areas that allow the study of the Earth. This enabled me to learn how to model, represent, and analyze territory.</p>
                <p>However, I now wish to deepen my studies in social geography and urban sociology to contribute, more than assist, in the implementation of sustainable territorial planning policies. I have thus joined a double degree program with ENTPE (National School of Public Works).</p>
                <p>Like you, my approach to the territory is diverse, and it is this inhabiting, this particular appropriation that makes me reconsider the construction of the territory. I experience the city as a pedestrian, a student, and a cyclist. I use public transportation, walk alone with music in my ears, walk with a group of young people from a leisure center or summer camp when I am an animator. I have walked the streets of Paris, Leshan in China, Etchmiadzine, Dublin, among others. I have listened to people living on the street during Red Cross outreach, I convey the voice and projects of young people from my city to the Local Youth Council. For me, seeing the city through different eyes is a wealth that makes me reflect on the interaction of individuals with the territory, how planning defines our relationship to the territory, the inhabitants' living, their movements, consumption, and social interactions.</p>
                <p>I want to study to work towards creating an evolving, sustainable, and flexible city that will constantly adapt to respond to the changing risks and needs of citizens.</p>
                <p>If you want to know more about my commitments and main projects, check below!</p>
            </section>
            
            
            <section id="cv" class="container">
                <h2>My Resume</h2>
                <embed src="cv_en.pdf" type="application/pdf" width="100%" height="600px" />
                <a class="fas fa-cloud-download-alt" download="cv_en.pdf">Click here to download the English version</a>
            </section>
            
            <section id="contact" class="container">
                <h2>Contact Me</h2>
                <ul class="contact-list">
                    <li>
                        <i class="fa fa-map-marker"></i>
                        <a>Paris, France</a>
                    </li>
                    <li>
                        <i class="fa fa-envelope"></i>
                        <a href="mailto:lisa.argento@ensg.eu">lisa.argento@ensg.eu</a>
                    </li>
                    <li>
                        <i class="fa fa-phone"></i>
                        <a href="+33 6 95 32 63 90">+33 6 95 32 63 90</a>
                    </li>
                    <li>
                        <i class="fab fa-linkedin"></i>
                        <a href="https://www.linkedin.com/in/lisa-argento-25l92a" target="_blank">LinkedIn</a>
                    </li>
                    <li>
                        <i class="fab fa-github"></i>
                        <a href="https://github.com/lisaargento" target="_blank">GitHub</a>
                    </li>
                    <li>
                        <i class="fab fa-gitlab"></i>
                        <a href="https://gitlab.com/lisa.argento" target="_blank">GitLab</a>
                    </li>
                </ul>
            </section>  
            `;
            break;
        case 'es':
contentDiv.innerHTML = `
        <section id="accueil" class="container">
            <p>Hola y bienvenido!</p>
            <p>Soy estudiante de maestría en Urbanismo y Políticas Urbanas. Me apasiona la geografía social y cómo la planificación territorial define las interacciones humanas, especialmente en entornos urbanos.</p>
            <p>Desde pequeña, siempre me ha fascinado la naturaleza; me siento cómoda en ella, y al mismo tiempo, me intriga. Recuerdo que mis padres me regalaron un kit de cría de hormigas (Lasius). Las hormigas son insectos sociales, es decir, viven y se organizan en colonias y demuestran una inteligencia colectiva.</p>
            <p>Después de obtener un Bachillerato en Ciencias de la Vida y la Tierra, estudié sociología y geografía durante dos años en una clase preparatoria BL. Durante ese tiempo, surgió la idea de que debía reflexionar y trabajar en la planificación del territorio para mejorar las relaciones sociales. Así que decidí unirme a una escuela de geografía que intenta comprender el mundo a través de las tecnologías de la información geográfica.</p>
            <p>Esto me llevó a la ENSG, la Escuela Nacional de Ciencias Geográficas en geoinformática. Quería que mi trabajo fuera una herramienta para apoyar la toma de decisiones en estos campos. Estudié sistemas de información geográfica, cartografía, teledetección y otras áreas que permiten el estudio de la Tierra. Esto me permitió aprender a modelar, representar y analizar el territorio.</p>
            <p>Sin embargo, ahora deseo profundizar mis estudios en geografía social y sociología urbana para contribuir, más que ayudar, a la implementación de políticas sostenibles de planificación territorial. Así que me uní a un programa de doble titulación con la ENTPE (Escuela Nacional de Trabajos Públicos del Estado).</p>
            <p>Al igual que tú, mi enfoque hacia el territorio es diverso, y es esta forma de habitar, esta apropiación particular, lo que me hace reconsiderar la construcción del territorio. Vivo la ciudad como peatona, estudiante y ciclista. Utilizo el transporte público, camino sola con música en los oídos, camino con un grupo de jóvenes de un centro de ocio o campamento cuando soy animadora. He caminado por las calles de París, Leshan en China, Etchmiadzine, Dublín, entre otros lugares. He escuchado a personas que viven en la calle durante las rondas con la Cruz Roja, transmito la voz y los proyectos de jóvenes de mi ciudad al Consejo Local de la Juventud. Para mí, ver la ciudad con ojos diferentes es una riqueza que me hace reflexionar sobre la interacción de los individuos con el territorio, cómo la planificación define nuestra relación con el territorio, la forma de habitar de las personas, sus desplazamientos, su consumo y sus interacciones sociales.</p>
            <p>Me gustaría estudiar para trabajar en la creación de una ciudad evolutiva, sostenible y flexible que se adapte constantemente para responder a los riesgos y necesidades cambiantes de los ciudadanos.</p>
            <p>¡Y si quieres saber más sobre mis compromisos y mis principales proyectos, consulta a continuación!</p>
        </section>

        <section id="cv" class="container">
            <h2>Mi CV</h2>
            <embed src="cv_fr.pdf" type="application/pdf" width="100%" height="600px" />
            <a class="fas fa-cloud-download-alt" download="cv_en.pdf"> Descargar la versión en inglés aquí</a>
        </section>

        <section id="contact" class="container">
            <h2>Contactarme</h2>
            <ul class="contact-list">
                <li>
                    <i class="fa fa-map-marker"></i>
                    <a>París, Francia</a>
                </li>
                <li>
                    <i class="fa fa-envelope"></i>
                    <a href="mailto:lisa.argento@ensg.eu">lisa.argento@ensg.eu</a>
                </li>
                <li>
                    <i class="fa fa-phone"></i>
                    <a href="+33 6 95 32 63 90">+33 6 95 32 63 90</a>
                </li>
                <li>
                    <i class="fab fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/lisa-argento-25l92a" target="_blank">LinkedIn</a>
                </li>
                <li>
                    <i class="fab fa-github"></i>
                    <a href="https://github.com/lisaargento" target="_blank">GitHub</a>
                </li>
                <li>
                    <i class="fab fa-gitlab"></i>
                    <a href="https://gitlab.com/lisa.argento" target="_blank">GitLab</a>
                </li>
            </ul>
        </section>
        `;
            break;
        default:
            break;
    }
}
