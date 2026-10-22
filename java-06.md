# RideShare — Java 6 · PWA dhe puna offline

## Çfarë ndërtova
- **Manifesti** (`src/app/manifest.ts` → `/manifest.webmanifest`) i jep aplikacionit emrin
  "RideShare AAB", pamjen `standalone`, ngjyrat dhe dy ikonat (192×192 dhe 512×512),
  që shfletuesi ta njohë si PWA. Nuk ruan udhëtime dhe nuk prek databazën.
- **API publike** (`/api/udhetimet`) kthen vetëm gjashtë fushat publike të udhëtimeve nga
  Neon, pa profile, email ose sesion.
- **Service worker** (`public/sw.js`) ruan në cache `rideshare-public-v1` vetëm
  `offline.html`, ikonat dhe listën publike. Për listën provon fillimisht serverin dhe ruan
  përgjigjen me kohën e ruajtjes; kur serveri nuk arrihet, kthen kopjen e fundit.
  `/panel`, hyrja dhe POST nuk ruhen.
- **Lexuesi offline** (`public/offline.html`) shfaq kartat, burimin (server ose kopje) dhe
  kohën e ruajtjes. Butoni "Kërko vend" është i çaktivizuar.
- **Pwa.tsx** në `layout.tsx` regjistron worker-in dhe mbush kopjen që në vizitën e parë.

## Provat që bëra
Provat u bënë në Microsoft Edge (Chromium) në `http://localhost:3000`, me ndërprerjen e
rrjetit të simuluar nga mjetet e zhvilluesit (si Network → Offline) për faqen dhe service worker-in.

### Prova 1: Manifesti dhe vizita online
Hapa `http://localhost:3000/manifest.webmanifest`: emri "RideShare AAB", `display: standalone`,
ikonat `/icons/icon-192.png` (192×192) dhe `/icons/icon-512.png` (512×512); të dyja hapen me
përmasat e sakta. Pas hapjes së faqes kryesore, `/sw.js` ishte `activated` dhe e kontrollonte faqen.
Te Cache Storage → `rideshare-public-v1` gjeta `/offline.html`, dy ikonat dhe `/api/udhetimet`.
`/offline.html` shfaqi tri kartat, "Lista erdhi nga serveri. Lexo sërish para çdo veprimi."
dhe kohën e ruajtjes (22.10.2026, 6:19 m.d.). Instalimin si aplikacion nuk e provova.

### Prova 2: Pa internet dhe pas rifreskimit
Aktivizova Offline dhe hapa `/`, pastaj rifreskova faqen. U hap dokumenti offline
"RideShare · Lista e ruajtur" me tri kartat (08:00, 08:15, 07:45) dhe kohën e kopjes
22.10.2026, 6:19 m.d. Mesazhi ishte "Lista e fundit e ruajtur · Mund të jetë vjetruar.
Serveri nuk u arrit." Butoni "Kërko vend" ishte i çaktivizuar: kjo pamje është vetëm lexim
nga një kopje e vjetër dhe nuk mund ta pyesë serverin, prandaj nuk konfirmon asnjë rezervim.

### Prova 3: Lidhja rikthehet
Me RideShare ende offline, ndryshova në Neon orën e ID 2 nga 08:15 në 08:25.
Klikimi "Rifresko listën" offline tregoi ende 08:15 dhe mesazhin e kopjes së ruajtur.
Riktheva rrjetin dhe klikova "Rifresko listën": ID 2 tregoi 08:25, burimi
"Lista erdhi nga serveri" dhe koha e re e ruajtjes (6:19:38 m.d.).
Pastaj riktheva në Neon 08:15, rifreskova dhe lista tregoi sërish 08:15.

## Ku gjendet puna
Repository: https://github.com/arberpreniqi-aab/rideshare-mobile

Skedarët e shtuar ose të ndryshuar brenda `aplikacioni/`:
- `src/app/manifest.ts`
- `public/icons/icon-192.png`, `public/icons/icon-512.png`
- `src/app/api/udhetimet/route.ts`
- `public/sw.js`
- `public/offline.html`
- `src/components/Pwa.tsx`
- `src/app/layout.tsx` (shtova `<Pwa />`)

Demo në Vercel nuk e publikova këtë javë; provat u bënë lokalisht.

## Çfarë mbetet për përmirësim
Në vizitën e parë pa internet nuk ka asnjë kopje: lexuesi shfaq "Ende nuk ka listë të ruajtur.
Hape aplikacionin me internet dhe provo përsëri." Kufizimi i leximit offline është që lista
mund të jetë e vjetër (vendet dhe orari mund të kenë ndryshuar) dhe nuk mund të bëhet
asnjë veprim, as kërkesë për vend. Më pas do të shtoja një njoftim kur kopja është shumë e vjetër.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Përdora Claude (asistent AI) për të krijuar skedarët A–F sipas udhëzimeve dhe për të
ekzekutuar tri provat në një shfletues Edge të automatizuar, përfshirë ndryshimin e orës në
Neon. Rezultatet e mësipërme janë ato që u shfaqën realisht gjatë provave.
