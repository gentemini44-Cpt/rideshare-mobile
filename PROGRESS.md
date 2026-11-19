# Progresi — Java 4

## Kërkesat

- [x] Instalimi i `@neondatabase/serverless` dhe `server-only`.
- [x] Skema idempotente PostgreSQL me tri udhëtime.
- [x] Lidhja private e serverit me `DATABASE_URL`.
- [x] Lista, detajet dhe kërkesa lexojnë në mënyrë asinkrone.
- [x] Gjendjet për listë bosh, gabim lidhjeje, ID që mungon dhe zero vende.
- [x] Testet e njësive dhe komponentëve të serverit.
- [x] Lidhja reale e Neon dhe Vercel.
- [x] Tri provat praktike kundër databazës reale/lokale.
- [x] Verifikimi responsive në gjerësi 375 px.
- [x] Commit/push final dhe Issue i dorëzimit.

## Konfigurimi real

- Neon: projekti ekzistues `rideshare-mobile`, rajoni `aws-eu-central-1`, branch-i primar `production`, databaza `neondb`.
- Vercel: u krijua projekti i ri `rideshare-mobile` në team-in `rexhae`, i lidhur me `gentemini44-Cpt/rideshare-mobile`, branch `main`, framework Next.js dhe Root Directory `aplikacioni`.
- Domain-i i caktuar për projektin e ri: `https://rideshare-mobile-eight-phi.vercel.app`; ende nuk ka deployment.
- URL-ja e vjetër `https://rideshare-mobile-sage.vercel.app` i përket konfigurimit të mëparshëm.
- Demoja publike përdor udhëtime fiktive kur `DATABASE_URL` mungon; kërkesat nuk ruhen. Hyrja me GitHub dhe paneli i shoferit aktivizohen vetëm kur konfigurohen `NEXTAUTH_SECRET`, `GITHUB_ID` dhe `GITHUB_SECRET`.
- Variablat private të projektit të mëparshëm nuk u transferuan; konfigurimi opsional për databazë/hyrje është dokumentuar te `aplikacioni/AUTH_SETUP.md`.
- `aplikacioni/.env.local` përmban vetëm emrin e variablës `GITHUBID`; kodi pret `GITHUB_ID` dhe `GITHUB_SECRET` për hyrjen me GitHub. Vlerat e sekretit nuk u lexuan ose ndryshuan.
- `.env.local`, `.vercel`, `.next` dhe `node_modules`: të injoruara nga Git.
- Git lokal: `origin` dhe autori `Gent Emini` janë konfiguruar për llogarinë `gentemini44-Cpt`.

## Vendimet

- U ripërdor projekti ekzistues Neon në vend që të krijohej një projekt i dyfishtë.
- I njëjti branch `production` i Neon përdoret lokalisht dhe në production; database branching automatik nuk u aktivizua.
- Sekreti ruhet vetëm si `DATABASE_URL` dhe nuk dërgohet në client bundle.
- Pyetja sipas ID-së përdor parametrizimin e klientit Neon.
- Faqet janë `force-dynamic` që ndryshimet në databazë të lexohen në çdo kërkesë.
- Kërkesa për vend mbetet simulim, jo rezervim real.

## Komandat dhe rezultatet

- `schema.sql` u kontrollua për veprime destruktive dhe u ekzekutua dy herë — 3 rreshta, pa dublikate.
- SELECT real — ID 1 `08:00`/2 vende; ID 2 `08:15`/1 vend; ID 3 `07:45`/0 vende.
- Prova 1 — `08:15 → 08:25 → 08:15` u verifikua në listë dhe detaje; ID 3 pa vende; ID 99 HTTP 404: **PASS**.
- Prova 2 — `WHERE false` shfaqi listën bosh; rikthimi shfaqi tri kartat: **PASS**.
- Prova 3 — mungesa lokale e `DATABASE_URL` shfaqi gabim të sigurt; rikthimi shfaqi tri kartat: **PASS**.
- Browser automation në `375 × 844` — 9/9 gjendje u kapën dhe u inspektuan, pa overflow horizontal: **PASS**.
- `npm test` — 5 skedarë, 13/13 teste kaluan.
- `npm run lint` — kaloi pa gabime.
- `npm run build` — kaloi; lista, detajet dhe kërkesa janë rrugë dinamike.
- `npm audit --omit=dev` — 0 dobësi.
- `npm audit` — 5 dobësi `high`, vetëm në zinxhirin e mjeteve të lint-it; rregullimi i propozuar kërkon downgrade të papajtueshëm të `eslint-config-next`.
- Vercel deployment `dpl_FyVA9nVd6nJfvWw6WNdLGmZ8eEeg` — `Ready`, target `production`, funksionet në `fra1`.
- `git push origin main` — commit-i final `a6347ab` u dërgua dhe nisi deployment-in production nga integrimi GitHub.
- Issue i dorëzimit: https://github.com/arbenl/arbenl-mobile-assignments-2025/issues/433 — kontrolli automatik: **5/5**.

## Rreziqet dhe hapi i ardhshëm

- Rreziku i mbetur është vetëm auditimi i varësive të zhvillimit; prodhimi ka zero dobësi të raportuara.
- Nuk ka hap të detyrueshëm të pambyllur për dorëzimin e Javës 4.

## Rishikimi final

- U krye rishikim adversarial lokal, jo i pavarur, mbi korrektësinë, sigurinë, integritetin e të dhënave, regresionet dhe testet.
- Nuk u konfirmua problem bllokues në kodin e ndryshuar.
- Evidenca: SELECT real, tri provat praktike, 13/13 teste, lint, build, audit prodhimi, deployment production dhe 9/9 kontrolle browser në 375 px.
