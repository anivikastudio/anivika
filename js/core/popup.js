/* ==========================================
ELEMENTS
========================================== */

const popupOverlay =
document.getElementById(
"popupOverlay"
);

const popupClose =
document.getElementById(
"popupClose"
);

const popupPoster =
document.getElementById(
"popupPoster"
);

const popupSubtitle =
document.getElementById(
"popupSubtitle"
);

const popupTitle =
document.getElementById(
"popupTitle"
);

const popupDescription =
document.getElementById(
"popupDescription"
);

const popupStatus =
document.getElementById(
"popupStatus"
);

const popupFormat =
document.getElementById(
"popupFormat"
);

const popupGenre =
document.getElementById(
"popupGenre"
);

const popupYoutube =
document.getElementById(
"popupYoutube"
);

const popupExplore =
document.getElementById(
"popupExplore"
);

/* ==========================================
OPEN POPUP
========================================== */

function openPopup(item) {

    if (!popupOverlay) return;

    /* POSTER */

    if (popupPoster) {

        popupPoster.src =
            item.poster || "";

        popupPoster.alt =
            item.title || "";

    }

    /* TEXT */

    if (popupSubtitle) {

        popupSubtitle.textContent =
            item.subtitle || "";

    }

    if (popupTitle) {

        popupTitle.textContent =
            item.title || "";

    }

    if (popupDescription) {

        popupDescription.textContent =
            item.longDescription ||
            item.description ||
            "";

    }

    /* META */

    if (popupStatus) {

        popupStatus.textContent =
            item.status ||
            "In Development";

    }

    if (popupFormat) {

        popupFormat.textContent =
            item.format ||
            "Original IP";

    }

    if (popupGenre) {

        popupGenre.textContent =
            item.genre ||
            "Coming Soon";

    }

    /* YOUTUBE */

    if (popupYoutube) {

        if (item.youtube) {

            popupYoutube.href =
                item.youtube;

            popupYoutube.style.display =
                "inline-flex";

        } else {

            popupYoutube.style.display =
                "none";

        }

    }

    /* EXPLORE */

    if (popupExplore) {

        popupExplore.href =
            item.url || "#";

    }

    /* OPEN */

    popupOverlay.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

}

/* ==========================================
CLOSE POPUP
========================================== */

function closePopup() {

    if (!popupOverlay) return;

    popupOverlay.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}

/* ==========================================
EVENTS
========================================== */

if (popupClose) {

    popupClose.addEventListener(
        "click",
        closePopup
    );

}

if (popupOverlay) {

    popupOverlay.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                popupOverlay
            ) {

                closePopup();

            }

        }
    );

}

document.addEventListener(
"keydown",
(event) => {

    if (
        event.key === "Escape"
    ) {

        closePopup();

    }

}
);