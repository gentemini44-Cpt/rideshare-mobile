# Java 6: PWA dhe lexim offline

## Zbatimi

- U shtuan manifesti RideShare AAB dhe ikonat PNG 192x192 dhe 512x512.
- Endpoint-i GET /api/udhetimet kthen vetëm ID-në, nisjen, destinacionin, orën, vendtakimin dhe vendet.
- Service worker ruan faqen offline, ikonat dhe përgjigjen publike të listës. Paneli, hyrja dhe kërkesat POST nuk ruhen.
- Faqja offline tregon burimin dhe kohën e kopjes. Butoni i rezervimit mbetet i çaktivizuar.
- Komponenti Pwa regjistron worker-in dhe ngroh kopjen pasi shfletuesi kontrollohet prej tij.

### Prova 1: Manifesti dhe vizita online

**Hapat:** Hapa /manifest.webmanifest, të dy ikonat dhe /api/udhetimet në Chrome. Pastaj hapa aplikacionin me gjerësi 375 px dhe kontrollova Service Worker dhe Cache Storage.

**Pritja:** Manifesti dhe ikonat hapen, API-ja kthen tri udhëtime me gjashtë fushat publike, worker-i është aktiv dhe faqja nuk ka dalje horizontale.

**Rezultati real:** Manifesti, API-ja, faqja offline, service worker-i dhe ikonat u përgjigjën me HTTP 200. API-ja ktheu tri udhëtime me gjashtë fushat publike. Cache Storage përmbante /offline.html, ikonat dhe /api/udhetimet; në gjerësi 375 px u shfaqën tri karta dhe dokumenti ishte 375 px i gjerë, pa dalje horizontale.

### Prova 2: Pa internet edhe pas rifreskimit

**Hapat:** Pasi lista u ruajt online, aktivizova Network Offline në tab-in RideShare, hapa përsëri /, rifreskova faqen dhe shtypa Rifresko listën.

**Pritja:** Pas rifreskimit shfaqen tri karta nga kopja e ruajtur, njoftimi tregon se lista mund të jetë e vjetruar dhe rezervimi është i çaktivizuar.

**Rezultati real:** Shfletuesi ishte offline dhe pas rifreskimit u shfaqën tri karta nga kopja e ruajtur. Mesazhi tregoi se lista mund të jetë e vjetruar, koha e ruajtjes u shfaq dhe butoni i rezervimit ishte i çaktivizuar.

### Prova 3: Rikthimi i lidhjes dhe të dhënat e reja

**Hapat:** Në Neon ndryshova përkohësisht orën e udhëtimit ID 2 nga 08:18 në 08:25. Riktheva lidhjen, shtypa Rifresko listën në RideShare dhe pas provës e riktheva orën fillestare.

**Pritja:** Pas rifreskimit online, ID 2 tregon 08:25, burimin server dhe kohën e re të ruajtjes; pastaj ora fillestare rikthehet në Neon dhe aplikacion.

**Rezultati real:** Pas rifreskimit online, karta e ID 2 tregoi 08:25, burimin server dhe kohën e re të ruajtjes. Pastaj ora u rikthye dhe u verifikua si 08:18 në Neon dhe në aplikacion. Baza kishte 08:18 para provës; udhëzuesi përmend 08:15, ndaj vlera fillestare u ruajt dhe mospërputhja u shënua.

## Verifikime teknike

- npm.cmd run build përfundoi me sukses.
- Ikonat u verifikuan si PNG me përmasat e kërkuara.
- Asnjë sekret nuk u shtua në raport.
