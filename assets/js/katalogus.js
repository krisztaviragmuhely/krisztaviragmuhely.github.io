const search = document.querySelector("#kereses");
const category = document.querySelector("#kategoria");
const grid = document.querySelector("#novenyek");
const report = document.querySelector("#talalat");
const template = document.querySelector("#novenykartya");
const status = document.querySelector("#keszlet");
let plants = [];

function normalize(value) {
  return value.toLocaleLowerCase("hu").normalize("NFD").replace(/\p{M}/gu, "");
}

function render() {
  const query = normalize(search.value.trim());
  const matches = plants.filter(plant =>
    (!category.value || plant.kategoria === category.value) &&
    normalize(plant.nev + " " + plant.latin).includes(query)
  );
  grid.replaceChildren();
  report.textContent = matches.length ? matches.length + " növény" : "Nincs találat.";
  for (const plant of matches) {
    const card = template.content.cloneNode(true);
    const image = card.querySelector("img");
    image.src = "assets/img/" + encodeURIComponent(plant.kep);
    image.addEventListener("error", () => image.remove(), { once: true });
    image.alt = plant.nev + (plant.allapot === "minta" ? " – illusztráció" : "");
    card.querySelector("h2").textContent = plant.nev;
    card.querySelector("i").textContent = plant.latin;
    card.querySelector(".eyebrow").textContent = plant.kategoria;
    card.querySelector(".description").textContent = plant.leiras;
    grid.append(card);
  }
}

async function loadCatalog() {
  try {
    const response = await fetch("data/novenyek.json", { cache: "no-cache" });
    if (!response.ok) throw new Error("HTTP " + response.status);
    const kinalat = await response.json();
    if (!Array.isArray(kinalat?.novenyek)) throw new Error("Hiányzó növénylista");
    const skus = kinalat.novenyek;
    const available = skus.filter(plant => plant.allapot === "elerheto");
    const samples = skus.filter(plant => plant.allapot === "minta");
    plants = available.length ? available : samples;

    status.hidden = false;
    if (available.length) {
      status.textContent = kinalat.frissitve
        ? "Készlet frissítve: " + kinalat.frissitve
        : "Az aktuálisan elérhető növények.";
    } else if (!samples.length) {
      status.textContent = "Jelenleg nincs készleten lévő növény a katalógusban.";
    }

    for (const name of [...new Set(plants.map(plant => plant.kategoria))].sort((a,b) => a.localeCompare(b,"hu"))) {
      category.add(new Option(name, name));
    }

    search.addEventListener("input", render);
    category.addEventListener("change", render);
    render();
  } catch (error) {
    report.textContent = "A katalógus most nem tölthető be. Próbáld újra később.";
    console.error("A katalógus betöltése sikertelen.", error);
  }
}

loadCatalog();
