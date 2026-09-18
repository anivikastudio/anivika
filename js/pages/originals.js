document.addEventListener(
"DOMContentLoaded",
async () => {


    await loadFeaturedUniverse();

    initReveal();

}


);

/* ==========================================
FEATURED UNIVERSE
========================================== */

async function loadFeaturedUniverse() {


const universe =
    await DataLoader.loadUniverse(
        "nubomo"
    );

if (!universe) return;

document.getElementById(
    "featuredTitle"
).textContent =
    universe.title;

document.getElementById(
    "featuredDescription"
).textContent =
    universe.description;

document.getElementById(
    "featuredStatus"
).textContent =
    universe.status;

document.getElementById(
    "featuredStories"
).textContent =
    universe.stories > 0
    ? universe.stories
    : "Coming Soon";


}

/* ==========================================
REVEAL
========================================== */

function initReveal() {


const sections =
document.querySelectorAll(
    ".featured-universe, .archive-section, .statement-section"
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
