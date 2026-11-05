# RideShare — Java 8

## Përgatitja

Hapa projektin ekzistues RideShare dhe shqyrtova punën e javës së kaluar në `java-07.md` dhe rrjedhën e detajeve të udhëtimit. Përgatita faqen lokale `/java-08-test` me të dhëna fiktive, pa hyrje apo Neon, si dhe `mobile-week08.json`. Për provat përdora ID 2 dhe vetëm vendtakime fiktive si “Biblioteka”, “Parkingu” dhe “Hyrja B”; nuk përdora apo regjistrova adresën ose koordinatat e mia. Provat nuk ndryshuan databazën.

## Çfarë ndërtova

Te faqja e detajeve pika e nisjes shfaqet qartë, ndërsa vendtakimi i shoferit shfaqet veçmas. Shtova një zgjedhje lokale të vendtakimit. Përdoruesi mund ta shkruajë vendin, ta ndryshojë tekstin pa humbur zgjedhjen e konfirmuar dhe ta përditësojë vetëm me butonin “Konfirmo”.

Butoni “Përdor vendndodhjen time” kërkon lejen vetëm pas klikimit. Gjatë kërkesës shfaqet gjendja e pritjes dhe përdoret timeout 10 sekonda. Suksesi shfaq vetëm saktësinë, jo koordinatat; refuzimi, pozicioni i padisponueshëm, timeout-i dhe mungesa e mbështetjes e lënë të përdorshme fushën manuale. Përzgjedhja mbetet në gjendjen e komponentit të klientit: nuk dërgohet në server ose në Neon.

## Provat që bëra

### Prova 1: Leja nuk kërkohet sapo hapet faqja

**Hapat:** Hapa `/udhetimi/2` lokalisht në Chrome headless. Para klikimit lexova gjendjen e lejes `geolocation` dhe numrin e thirrjeve të `getCurrentPosition`. Pastaj lejova vendndodhjen nga DevTools, vendosa një pozicion fiktiv dhe shtypa “Përdor vendndodhjen time”.

**Pritja:** Në hapje leja mbetet `prompt` dhe nuk thirret API-ja. Pas klikimit shfaqet pritja; pas suksesit shfaqet saktësia, pa koordinata.

**Rezultati real:** Në hapje leja ishte `prompt` dhe numri i thirrjeve ishte 0. Pas klikimit pati një thirrje me timeout 10000 ms; faqja shfaqi përmbledhjen me saktësinë e pozicionit fiktiv. Pika e nisjes së udhëtimit shfaqet te detajet. Gjerësia dhe gjatësia e pozicionit të DevTools nuk u shfaqën në faqe.

### Prova 2: Refuzimi i lejes nuk e bllokon përdoruesin

**Hapat:** Vendosa lejen `geolocation` në `denied` në DevTools dhe shtypa butonin e vendndodhjes. Pastaj shkrova “Hyrja pranë parkingut” dhe shtypa “Konfirmo”. Simulova veçmas gabimin e pozicionit të padisponueshëm, timeout-in dhe mungesën e `navigator.geolocation`. Në faqen `/java-08-test` kontrollova gjithashtu se teksti me vetëm hapësira jep gabim.

**Pritja:** Pas refuzimit, pritja mbaron, shfaqet mesazhi përkatës dhe vendtakimi manual mund të konfirmohet. Edhe tri rastet e tjera japin mesazh dhe nuk e lënë ekranin në pritje.

**Rezultati real:** Refuzimi shfaqi udhëzimin për vazhdim manual; “Hyrja pranë parkingut” u konfirmua. Pozicioni i padisponueshëm, timeout-i dhe mungesa e mbështetjes u provuan me kthime të simuluara në shfletues dhe të tria përfunduan me fushën manuale të përdorshme. Teksti me vetëm hapësira shfaqi gabim dhe nuk e ndryshoi vendtakimin e konfirmuar.

### Prova 3: Dëshmitë në GitHub nuk tregojnë adresën time reale

**Hapat:** Kontrollova skedarët lokalë që do të ngarkohen dhe kërkesat e shfletuesit gjatë konfirmimit. Përdora vetëm emra vendesh fiktivë: “Biblioteka”, “Parkingu”, “Hyrja B” dhe “Hyrja pranë parkingut”. Ndryshova tekstin nga “Biblioteka” në “Hyrja B” pa konfirmim dhe kontrollova se zgjedhja mbeti “Biblioteka”; pastaj e konfirmova.

**Pritja:** Përzgjedhja e konfirmuar ndryshon vetëm pas klikimit; konfirmimi nuk dërgon vendtakimin ose koordinatat te serveri. Raporti përmban vetëm të dhëna prove fiktive.

**Rezultati real:** Teksti i konfirmuar nuk ndryshoi derisa shtypa “Konfirmo”. Pas klikimit nuk pati kërkesë POST ose kërkesë API nga ky veprim. Faqja nuk shfaqi koordinatat fiktive të DevTools. Skedarët e Java 8 nuk përmbajnë adresë ose koordinata personale.

## Ku gjendet puna

- Fusha manuale dhe vendndodhja: `aplikacioni/src/components/ZgjedhVendtakimin.tsx`.
- Integrimi në detaje: `aplikacioni/src/app/udhetimi/[id]/page.tsx`.
- Faqja e testimit lokal: `aplikacioni/src/app/java-08-test/page.tsx`.
- Konfigurimi i testit: `mobile-week08.json`; `package-lock.json` është pranë `package.json` në `aplikacioni/`.
- Stilet: `aplikacioni/src/app/globals.css`.
- Raporti: `java-08.md` pranë README-së.
- Repository: [gentemini44-Cpt/rideshare-mobile](https://github.com/gentemini44-Cpt/rideshare-mobile).
- Demonstrim publik i aplikacionit: ende nuk kam publikuar një lidhje live.

## Çfarë mbetet për përmirësim

Gjendja e vendtakimit mbahet vetëm në `useState`; pas rifreskimit humbet. Provat e lejes dhe pozicionit u bënë lokalisht në Chrome headless me leje dhe pozicion të kontrolluar nga DevTools; gabimet e tjera u simuluan në shfletues. Prova me një koleg në pajisje reale mbetet për t’u bërë. Dorëzimi në formular dhe leximi i dy përgjigjeve automatike në GitHub mbeten për t’u bërë.

## Prova me një hyrje të re

- Hyrja që provova: Në faqen lokale `/java-08-test`, konfirmova “Biblioteka”, shkrova “Parkingu” pa e konfirmuar, pastaj vendosa vetëm hapësira dhe shtypa “Konfirmo”. E provova vetë në Chrome headless, jo me koleg.
- Parashikimi im para klikimit: `trim()` jep tekst bosh; shfaqet gabim dhe vendtakimi i mëparshëm “Biblioteka” mbetet i konfirmuar.
- Çfarë pashë realisht: U shfaq gabimi për plotësimin e vendtakimit dhe zgjedhja e konfirmuar mbeti “Biblioteka”.
- Skedari dhe funksioni që e shpjegojnë: `aplikacioni/src/components/ZgjedhVendtakimin.tsx`, funksioni `konfirmoVendtakimin`.
- Çfarë kuptova ose korrigjova: Teksti në fushë dhe vendtakimi i konfirmuar janë dy gjendje të ndara; vlera bosh kthehet pa e zëvendësuar zgjedhjen. Prova me koleg duhet përsëritur në klasë.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)

AI ndihmoi në leximin e kërkesave, zbatimin e përzgjedhjes manuale dhe të vendndodhjes, si dhe në përgatitjen e provave. Verifikova vetë ndërtimin e projektit dhe rrjedhat në shfletues; pozicioni i testimit ishte fiktiv dhe databaza nuk u ndryshua.
