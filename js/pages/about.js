/* ==================================================
   ABOUT PAGE
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

        ".about-section, \
         .journey-section, \
         .founder-section, \
         .vision-section, \
         .connect-section"

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

/* ==================================================
   TIMELINE STAGGER
================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const timelineItems =
        document.querySelectorAll(
            ".timeline-item"
        );

        timelineItems.forEach(

            (item, index) => {

                item.style.transition =
                    "all 0.8s ease";

                item.style.transitionDelay =
                    `${index * 0.15}s`;

            }

        );

    }
);