document.addEventListener("DOMContentLoaded", () => {
loadHero();
loadFeatured();
loadComingSoon();
loadWorlds();
});

/* ==========================================
HERO
========================================== */

async function loadHero() {
try {
const response = await fetch("data/featured.json");


const data = await response.json();

if (!data.length) return;

const hero = data[0];

const label = document.getElementById("hero-label");
const title = document.getElementById("hero-title");
const description = document.getElementById("hero-description");
const button = document.getElementById("hero-button");

const videoSource =
  document.getElementById("hero-video-source");

const video =
  document.getElementById("hero-video");

const moreInfo =
  document.getElementById("heroMoreInfo");

if (label)
  label.textContent =
    hero.subtitle || "";

if (title)
  title.textContent =
    hero.title || "";

if (description)
  description.textContent =
    hero.description || "";

if (button)
  button.href =
    hero.url || "#";

if (videoSource && hero.heroVideo) {

  videoSource.src =
    hero.heroVideo;

  if (video) {
    video.load();
  }

}

if (moreInfo) {

  moreInfo.addEventListener(
    "click",
    () => {

      if (
        typeof openPopup ===
        "function"
      ) {

        openPopup(hero);

      }

    }
  );

}


} catch (error) {

console.error(
  "Hero Load Error:",
  error
);


}
}

/* ==========================================
FEATURED ORIGINALS
========================================== */

async function loadFeatured() {

const container =
document.getElementById(
"featured-originals"
);

if (!container) return;

try {


const response =
  await fetch(
    "data/featured.json"
  );

const data =
  await response.json();

container.innerHTML = "";

data.forEach((item) => {

  const card =
    document.createElement(
      "div"
    );

  card.className =
    "card poster-card";

  card.innerHTML = `

    <img
      src="${item.poster}"
      alt="${item.title}">

    <div class="card-overlay">

      <h3 class="card-title">

        ${item.title}

      </h3>

      <p class="card-description">

        ${item.description}

      </p>

    </div>

  `;

  card.addEventListener(
    "click",
    () => {

      if (
        typeof openPopup ===
        "function"
      ) {

        openPopup(item);

      }

    }
  );

  container.appendChild(
    card
  );

});


} catch (error) {


console.error(
  "Featured Load Error:",
  error
);


}
}

/* ==========================================
COMING SOON
========================================== */

async function loadComingSoon() {

const container =
document.getElementById(
"coming-soon"
);

if (!container) return;

try {


const response =
  await fetch(
    "data/coming-soon.json"
  );

const data =
  await response.json();

container.innerHTML = "";

data.forEach((item) => {

  container.innerHTML += `

    <div
      class="card poster-card">

      <img
        src="${item.poster}"
        alt="${item.title}">

      <div
        class="card-overlay">

        <h3
          class="card-title">

          ${item.title}

        </h3>

      </div>

    </div>

  `;

});


} catch (error) {


console.error(
  "Coming Soon Load Error:",
  error
);


}
}

/* ==========================================
WORLDS
========================================== */

async function loadWorlds() {

const container =
document.getElementById(
"worlds"
);

if (!container) return;

try {


const response =
  await fetch(
    "data/worlds.json"
  );

const data =
  await response.json();

container.innerHTML = "";

data.forEach((item) => {

  container.innerHTML += `

    <a
      href="${item.url}"
      class="world-card">

      <img
        src="${item.image}"
        alt="${item.title}">

    </a>

  `;

});


} catch (error) {


console.error(
  "Worlds Load Error:",
  error
);

}
}
