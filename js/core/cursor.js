/* ==================================================
ANIVIKA CURSOR
================================================== */

document.addEventListener("DOMContentLoaded", () => {

```
const cursor =
    document.getElementById("cursor");

if (!cursor) return;

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

/* ==========================================
   TRACK MOUSE
========================================== */

document.addEventListener(
    "mousemove",
    (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

    }
);

/* ==========================================
   SMOOTH FOLLOW
========================================== */

function animateCursor() {

    currentX +=
        (mouseX - currentX) * 0.15;

    currentY +=
        (mouseY - currentY) * 0.15;

    cursor.style.left = currentX + "px";
cursor.style.top = currentY + "px";

    requestAnimationFrame(
        animateCursor
    );

}

animateCursor();

/* ==========================================
   HOVER EFFECT
========================================== */

const hoverTargets =
    document.querySelectorAll(
        "a, button, .card"
    );

hoverTargets.forEach(item => {

    item.addEventListener(
        "mouseenter",
        () => {

            cursor.classList.add(
                "hover"
            );

        }
    );

    item.addEventListener(
        "mouseleave",
        () => {

            cursor.classList.remove(
                "hover"
            );

        }
    );

});
```

});
