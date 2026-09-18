/* ==================================================
   COLLABORATION PAGE
================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initScrollReveal();

    }
);

/* ==================================================
   SCROLL REVEAL
================================================== */

function initScrollReveal() {

    const sections =
    document.querySelectorAll(

        ".collab-section, \
         .partners-section, \
         .contact-section"

    );

    const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(

                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "revealed"
                        );

                    }

                }

            );

        },

        {
            threshold: 0.15
        }

    );

    sections.forEach(

        section => {

            observer.observe(
                section
            );

        }

    );

}