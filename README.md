# Kriszta Virágműhely

Magyar nyelvű statikus honlapterv az algyői virágműhelynek. A megjelenést a Facebook-borító púderrózsaszín, pink és olívazöld színei, a kör alakú K monogram és a virágfotók ihlették. A honlap helyben is megnyitható az index.html fájllal.

| Fájl vagy mappa | Szerepe |
| --- | --- |
| index.html | Bemutatkozás, saját nevelésű növények, átjárás a katalógusba és a kapcsolati oldalra. |
| katalogus.html | Kereshető, növénycsoport szerint szűrhető kínálat. Kép, magyar név, latin név és rövid jellemzés minden kártyán. |
| rendeles.html | A meglévő Google Forms rendelési lap beágyazva, közvetlen megnyitási lehetőséggel. |
| kapcsolat.html | Algyői átvételi cím, térkép és Facebook-link a friss nyitvatartáshoz. |
| assets/js/novenyek.js | A katalógus tartalma és készletállapota. |
| assets/js/katalogus.js | Keresés, szűrés és a kártyák megjelenítése. |
| assets/css/style.css | Közös tipográfia, színpaletta és reszponzív elrendezés. |
| assets/img/ | WebP képek korábbi virágműhelyes promóciós anyagokból. |
| .nojekyll | A statikus fájlok közvetlen kiszolgálása GitHub Pages-en. |

## Készletfrissítés

1. Az új képet másold az assets/img/ mappába, majd az assets/js/novenyek.js fájlban vedd fel a magyar és latin nevet, a növénycsoportot, a képfájl nevét és a rövid leírást.
2. A megerősített készletű növények állapota legyen `elerheto`, az elfogyottaké `elfogyott`. Az induló `minta` állapotú bejegyzéseket váltsd át vagy töröld az élő katalógus bekapcsolásakor. A mintaképeket cseréld az adott készleten lévő fajtáról készült képre.
3. Írd be a frissítés dátumát a `frissitve` mezőbe, például `2026. november 15.`, majd mentsd a változtatásokat. A katalógus a készleten lévő tételeket jeleníti meg. A mintákat csak akkor mutatja, ha nincs elérhető tétel és maradt mintabejegyzés.

## GitHub és közzététel

A forrásfájlok közvetlenül egy GitHub-repozitórium gyökerébe másolhatók. A kicsomagolt mappa **tartalmát** töltsd fel. Ha a választott webhely megfelel a GitHub Pages feltételeinek, a **Settings → Pages → Deploy from a branch → main → / (root)** beállítással publikálható. A címet ezután a Pages beállításainál mutatja a GitHub.

A GitHub Pages feltételei korlátozzák az online üzleti és az elsősorban kereskedelmi tranzakciókat kiszolgáló használatot. A rendelésfelvételt is tartalmazó üzleti oldal teljes verziójához használhatsz a GitHub-repozitóriumból telepítő, üzleti célú weboldalt engedő tárhelyet.

- GitHub Pages beállítás: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- GitHub Pages használati korlátai: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
