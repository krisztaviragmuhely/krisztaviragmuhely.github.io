const search = document.querySelector("#kereses");
const category = document.querySelector("#kategoria");
const grid = document.querySelector("#novenyek");
const report = document.querySelector("#talalat");
const template = document.querySelector("#novenykartya");
const status = document.querySelector("#keszlet");
const skus = kinalat.novenyek;
const available = skus.filter(plant => plant.allapot === "elerheto");
const samples = skus.filter(plant => plant.allapot === "minta");
const plants = available.length ? available : samples;

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
    image.src = "assets/img/" + plant.kep;
    image.alt = plant.nev + (plant.allapot === "minta" ? " – illusztráció" : "");
    card.querySelector("h2").textContent = plant.nev;
    card.querySelector("i").textContent = plant.latin;
    card.querySelector(".eyebrow").textContent = plant.kategoria;
    card.querySelector(".description").textContent = plant.leiras;
    grid.append(card);
  }
}

search.addEventListener("input", render);
category.addEventListener("change", render);
render();
