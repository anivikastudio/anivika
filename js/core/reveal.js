/* ==================================================
ANIVIKA REVEAL ANIMATION
================================================== */

document.addEventListener("DOMContentLoaded", () => {

```
const revealElements =
    document.querySelectorAll(
        ".reveal"
    );

if (!revealElements.length) return;

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "active"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15,
            rootMargin:
                "0px 0px -50px 0px"
        }

    );

revealElements.forEach(element => {

    observer.observe(
        element
    );

});
```

});
