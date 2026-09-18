/* ==========================================
ANIVIKA DATA LOADER
Version 1.0
========================================== */

window.DataLoader = {

/* ======================================
CACHE
====================================== */

cache: {},

/* ======================================
FETCH JSON
====================================== */

async fetchJSON(path) {


try {

    const response =
        await fetch(path);

    if (!response.ok) {

        throw new Error(
            `Failed to load: ${path}`
        );

    }

    return await response.json();

}

catch(error) {

    console.error(
        "DataLoader Error:",
        error
    );

    return null;

}


},

/* ======================================
LOAD UNIVERSE
====================================== */

async loadUniverse(id) {


if (
    this.cache[id]
) {

    return this.cache[id];

}

const data =
    await this.fetchJSON(
        `/data/universes/${id}.json`
    );

if (data) {

    this.cache[id] =
        data;

}

return data;


},

/* ======================================
LOAD ORIGINALS
====================================== */

async loadOriginals() {


return await this.fetchJSON(
    "/data/originals.json"
);


},

/* ======================================
LOAD ALL UNIVERSES
====================================== */

async loadAllUniverses() {


const originals =
    await this.loadOriginals();

if (!originals) {

    return [];

}

const universes =
    await Promise.all(

        originals.map(
            item =>
                this.loadUniverse(
                    item.id
                )
        )

    );

return universes.filter(
    universe => universe
);


},

/* ======================================
GET CACHE
====================================== */

getUniverse(id) {


return (
    this.cache[id] ||
    null
);


},

/* ======================================
HAS CACHE
====================================== */

hasUniverse(id) {


return Boolean(
    this.cache[id]
);


},

/* ======================================
CLEAR CACHE
====================================== */

clearCache() {


this.cache = {};


},

/* ======================================
CLEAR SINGLE CACHE
====================================== */

clearUniverse(id) {


delete this.cache[id];

}

};
