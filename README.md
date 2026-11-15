# Migrasjonskart

Mobilvennlig, scrollbar visualisering av menneskets vandring – fra de tidligste menneskene/neandertalerne til i dag, med hovedfokus på urfolk (spesielt samer og inuitter).

**Live:** https://johannes-code.github.io/migrasjonskart/ (under arbeid – foreløpig bare skjelett med plassholdere)

## Bakgrunn

Oppstod fra en diskusjon om hvorvidt samene stammer fra inuittene (de gjør ikke – se research under). Ingen eksisterende verktøy (Bradshaw Foundation "Journey of Mankind", National Geographic "Human Journey", Cal Academy "Human Odyssey") er både mobilvennlige, scrollbare OG har urfolk-fokus med kildehenvisninger. Derfor bygges dette fra bunnen.

## Research så langt (faktasjekket, med kilder)

- **Homo sapiens oppsto i Afrika:** eldste kjente fossiler fra Jebel Irhoud, Marokko, ~300 000 år. Kilde: Hublin et al. 2017, *Nature* – https://www.nature.com/articles/nature22336
- **Spredning ut av Afrika:** verdensomspennende ekspansjon for 60 000–40 000 år siden. Kilde: Bergström et al. 2021, *Nature* – https://www.nature.com/articles/s41586-021-03244-5
- **Neandertalere:** ~1,8–2,6 % neandertaler-DNA hos folk utenfor Afrika (Prüfer et al. 2017, *Science* – https://doi.org/10.1126/science.aao1887), fra én felles blanding for ca. 45 000–49 000 år siden (Sümer et al. 2024, *Nature* – https://www.nature.com/articles/s41586-024-08420-x). Neandertalerne forsvant for ~41 000–39 000 år siden (Higham et al. 2014, *Nature* – https://www.nature.com/articles/nature13621).

- **Samer (uralsk språk):** sibirsk genetisk innslag ankom Nord-Europa for **minst 3500 år siden**, knyttet til uralsk-språklige folk inkl. samer. Kilde: Lamnidis et al. 2018, *Nature Communications* – https://www.nature.com/articles/s41467-018-07483-5
- **Inuitter (eskimo-aleutisk språk):** separat migrasjon fra Sibir til Nord-Amerika ca. **4000 f.Kr.** (paleo-inuitter), senere erstattet av thule-kulturen (dagens inuitters direkte forfedre) rundt **1300 e.Kr.**, som stammer fra Birnirk-kulturen i Sibir. Kilde: https://en.wikipedia.org/wiki/Paleo-Eskimo
- **Forholdet mellom dem:** ikke direkte beslektet – to separate sibirske opphav på ulike tidspunkt. Det finnes en omstridt, uanerkjent lingvistisk hypotese (Bergsland 1959 / Fortescue 1998, "Uralo-sibirsk") om en svært dyp felles opprinnelse, men dette er ikke bevist. Kilde: https://en.wikipedia.org/wiki/Eskimo%E2%80%93Uralic_languages
- Eldre "mongolsk rase"-klassifisering som lumpet samer og inuitter sammen er tilbakevist av moderne genetikk. Kilde: https://www.discovermagazine.com/saami-i-am-not-39886

## Plan for minimal første skive (MVP)

Tre steg i en scrollbar tidslinje, hvert med kildehenvisning:
1. Ut av Afrika (tidligste mennesker/neandertalere → spredning)
2. Sápmi-sporet (samenes opphav, sibirsk innslag ~3500 år siden)
3. Inuitt-sporet (paleo-inuitter → thule-kultur → dagens inuitter)

Se GitHub-issues for nedbrutte oppgaver.

## Teknisk

Statisk nettside (HTML/CSS/vanilla JS), mobilførst, hostet på GitHub Pages fra `main`. Ingen backend eller byggesteg.

- `index.html` – én `<section class="step">` per steg i tidslinjen
- `style.css` – kartet ligger sticky øverst på mobil, til høyre på desktop (≥900px)
- `script.js` – IntersectionObserver markerer aktivt steg og oppdaterer kartet

Kjør lokalt: `python3 -m http.server` i repo-mappa og åpne http://localhost:8000
