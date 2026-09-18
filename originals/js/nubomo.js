/* ==================================================
NUBOMO DATA
================================================== */

let nubomoData = null;

/* ==================================================
INIT
================================================== */

document.addEventListener(
"DOMContentLoaded",
async () => {


    await loadNubomoData();

    populateNubomoData();

    initStoriesCounter();

    loadMoreOriginals();

    initReveal();

}


);

/* ==================================================
LOAD NUBOMO DATA
================================================== */

async function loadNubomoData() {


try {

    nubomoData =
        await DataLoader.loadUniverse(
            "nubomo"
        );

}

catch(error) {

    console.error(
        "Nubomo Data Error:",
        error
    );

}


}

/* ==================================================
POPULATE PAGE
================================================== */

function populateNubomoData() {


if (!nubomoData) return;

const heroTitle =
    document.getElementById(
        "heroTitle"
    );

const heroDescription =
    document.getElementById(
        "heroDescription"
    );

const heroStatus =
    document.getElementById(
        "heroStatus"
    );

const heroFormat =
    document.getElementById(
        "heroFormat"
    );

if (heroTitle) {

    heroTitle.textContent =
        nubomoData.title;

}

if (heroDescription) {

    heroDescription.textContent =
        nubomoData.tagline;

}

if (heroStatus) {

    heroStatus.textContent =
        nubomoData.status;

}

if (heroFormat) {

    heroFormat.textContent =
        nubomoData.format;

}

/* CHARACTER */

const characterHeadline =
    document.getElementById(
        "characterHeadline"
    );

const characterBio =
    document.getElementById(
        "characterBio"
    );

if (
    characterHeadline &&
    nubomoData.character
) {

    characterHeadline.textContent =
        nubomoData.character.headline;

}

if (
    characterBio &&
    nubomoData.character
) {

    characterBio.textContent =
        nubomoData.character.bio;

    }
    /* PERSONALITY */

const personalityGrid =
    document.getElementById(
        "personalityGrid"
    );

if (
    personalityGrid &&
    nubomoData.character?.personality
) {

    personalityGrid.innerHTML =
        "";

    nubomoData.character.personality.forEach(
        trait => {

            personalityGrid.innerHTML += `

            <div class="trait-card">

                <h3>

                    ${trait}

                </h3>

            </div>

            `;

        }
    );

    }
    
    /* WORLD */

const worldHeadline =
    document.getElementById(
        "worldHeadline"
    );

const worldDescription =
    document.getElementById(
        "worldDescription"
    );

if (
    worldHeadline &&
    nubomoData.world
) {

    worldHeadline.textContent =
        nubomoData.world.headline;

}

if (
    worldDescription &&
    nubomoData.world
) {

    worldDescription.textContent =
        nubomoData.world.description;

}
}

/* ==================================================
STORIES COUNTER
================================================== */

function initStoriesCounter() {


const counter =
    document.getElementById(
        "storiesCount"
    );

if (!counter) return;

const target =
    nubomoData?.stories || 0;

if (target <= 0) {

    counter.textContent =
        "Coming Soon";

    counter.classList.add(
        "coming-soon"
    );

    return;

}

let current = 0;

const observer =
    new IntersectionObserver(
        entries => {

            if (
                entries[0]
                .isIntersecting
            ) {

                const duration =
                    2000;

                const fps =
                    60;

                const totalFrames =
                    duration /
                    (1000 / fps);

                const increment =
                    target /
                    totalFrames;

                const timer =
                    setInterval(() => {

                        current +=
                            increment;

                        if (
                            current >=
                            target
                        ) {

                            counter.textContent =
                                target;

                            clearInterval(
                                timer
                            );

                        }

                        else {

                            counter.textContent =
                                Math.floor(
                                    current
                                );

                        }

                    }, 1000 / fps);

                observer.disconnect();

            }

        },
        {
            threshold: 0.5
        }
    );

observer.observe(
    counter
);


}

/* ==================================================
MORE ORIGINALS
================================================== */

async function loadMoreOriginals() {


const container =
    document.getElementById(
        "moreOriginals"
    );

if (!container) return;

try {

    const universes =
        await DataLoader.loadAllUniverses();

    container.innerHTML =
        "";

    universes.forEach(
        universe => {

            if (
                universe.id ===
                "nubomo"
            ) {

                return;

            }

            container.innerHTML += `

            <a
                href="${universe.links?.page || "#"}"
                class="original-card">

                <h3>
                    ${universe.title}
                </h3>

                <p>
                    ${universe.description}
                </p>

            </a>

            `;

        }
    );

}

catch(error) {

    console.error(
        "Originals Load Error:",
        error
    );

}


}

/* ==================================================
SCROLL REVEAL
================================================== */

function initReveal() {


const revealObserver =
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

document
.querySelectorAll(
    ".content-row, .showcase-section, .world-section, .stories-counter"
)
.forEach(
    section => {

        revealObserver.observe(
            section
        );

    }
);


}
