    // Fonction pour afficher la bannière des cookies
    function showCookieBanner() {
        const banner = document.createElement("div");
        banner.classList.add("cookie-banner");
        banner.innerHTML = `
            <p>
                Ce site utilise des cookies pour vous offrir une meilleure expérience. En poursuivant votre navigation, vous acceptez leur utilisation.
            </p>
            <div class="cookie-buttons">
                <button id="acceptCookies" class="cookie-button accept">Accepter</button>
                <button id="declineCookies" class="cookie-button decline">Refuser</button>
            </div>
        `;
        document.body.appendChild(banner);

        // Gérer les clics sur les boutons
        document.getElementById("acceptCookies").addEventListener("click", function () {
            banner.remove(); // Cache la bannière après avoir cliqué sur "Accepter"
        });

        document.getElementById("declineCookies").addEventListener("click", function () {
            banner.remove(); // Cache la bannière après avoir cliqué sur "Refuser"
        });
    }

    // Appel de la fonction pour afficher la bannière à chaque visite
    window.onload = function () {
        showCookieBanner();
    };