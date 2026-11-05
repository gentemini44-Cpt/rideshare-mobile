# RideShare - Java 4: Neon dhe PostgreSQL

## Çfarë ndërtova

Lista kryesore dhe faqet e udhëtimit lexojnë rreshtat e tabelës udhetimet në Neon. Lidhja DATABASE_URL përdoret vetëm në server nga src/lib/db.ts. Skedari lokal aplikacioni/.env.local përjashtohet nga Git.

## Provat që bëra

### Prova 1: Ora e ndryshuar shfaqet te lista dhe detajet

Ndryshova përkohësisht orën e ID 2 në 08:25 në Neon. Lista kryesore dhe /udhetimi/2 u përgjigjën me HTTP 200 dhe të dyja shfaqën 08:25. E riktheva orën në 08:15; të dyja faqet shfaqën 08:15.

### Prova 2: Lista bosh dhe rikthimi

Vendosa përkohësisht WHERE false vetëm në pyetjen e lexoUdhetimet. Faqja u përgjigj me HTTP 200, shfaqi mesazhin "Nuk ka udhëtime për momentin." dhe zero karta. Pas heqjes së kushtit, lista u kthye me tri karta. Rreshtat në databazë nuk u fshinë.

### Prova 3: Lidhja mungon dhe rikthehet

Riemërtova përkohësisht DATABASE_URL në DATABASE_URL_TEST në .env.local. Aplikacioni shfaqi mesazhin "Nuk u lidhëm me databazën. Provo përsëri.". Riktheva emrin DATABASE_URL; lidhja punoi sërish. Git e injoron .env.local.

## Verifikime shtesë

npm.cmd run build përfundoi me sukses. Faqja kryesore shfaqi tri karta; /udhetimi/2 shfaqi 08:15; /udhetimi/3 tregoi zero vende; /udhetimi/99 u përgjigj me HTTP 404.

## Ku gjendet puna

Skema: aplikacioni/schema.sql. Lidhja dhe pyetjet: aplikacioni/src/lib. Faqet: aplikacioni/src/app. Repository: https://github.com/gentemini44-Cpt/rideshare-mobile.

## Kufizimi i funksionalitetit

Kërkesa për vend mbetet simulim. Aplikacioni nuk ruan rezervim dhe nuk dërgon njoftim te shoferi.

## Ndihma nga AI

Përdora ndihmë nga AI për integrimin dhe për rishikimin e kodit. Provat e mësipërme u kryen lokalisht kundër databazës Neon.
