document.addEventListener(
    "DOMContentLoaded",
    () => {

        const footer =
        document.getElementById(
            "footer-container"
        );

        if (!footer) return;

        footer.innerHTML = `

        <footer class="footer">

            <div class="footer-container">

                <div class="footer-brand">

                    <h3>

                        ANIVIKA

                    </h3>

                    <p>

                        Home of Original Worlds

                    </p>

                </div>

                <div class="footer-column">

                    <h4>

                        Originals

                    </h4>

                    <a href="/originals.html">

                        All Originals

                    </a>

                    <a href="/originals/nubomo.html">

                        Nubomo

                    </a>

                </div>

                <div class="footer-column">

                    <h4>

                        Company

                    </h4>

                    <a href="/about.html">

                        About

                    </a>

                </div>

                <div class="footer-social">

                    <a
                        href="https://instagram.com/anivika.id"
                        target="_blank"
                        aria-label="Instagram">

                        <i class="fa-brands fa-instagram"></i>

                    </a>

                    <a
                        href="https://youtube.com/@anivikaoriginals"
                        target="_blank"
                        aria-label="YouTube">

                        <i class="fa-brands fa-youtube"></i>

                    </a>

                </div>

            </div>

            <div class="footer-bottom">

                © 2026 Anivika.
                All rights reserved.

            </div>

        </footer>

        `;

    }
);