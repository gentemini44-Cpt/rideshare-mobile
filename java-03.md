# RideShare — Java 3

## Çfarë ndërtova
Sot përfundova faqen kryesore me listën e udhëtimeve fiktive përmes komponentit të kartave, faqen dinamike të detajeve të udhëtimit me vendtakimin përkatës, si dhe simulimin e kërkesës për vend në aplikacionin RideShare duke përdorur Next.js dhe TypeScript.

## Provat që bëra
### Prova 1: Lista në telefon
Hapa faqen kryesore në pamjen e telefonit përmes mjeteve të zhvilluesit në shfletues; prisja tri karta pa lëvizje anash; pashë se tri kartat u renditën saktë dhe dizajni u përshtat pa shkaktuar rrëshqitje horizontale (horizontal scroll).

### Prova 2: Detajet e udhëtimit të dytë
Klikova kartën 2; prisja adresën /udhetimi/2 dhe vendtakimin e saj; pashë se adresa ndryshoi saktësisht dhe u shfaq vendtakimi i detajuar. 
Shënova edhe çfarë ndodhi te karta 3 (zero vende) dhe te /udhetimi/99: Karta e tretë u shfaq me statusin e çaktivizuar për shkak të mungesës së vendeve të lira, kurse te adresa /udhetimi/99 u shfaq saktësisht faqja përkatëse që njoftonte se udhëtimi nuk u gjet.

### Prova 3: Kërkesa në pritje
Klikova Kërko vend; prisja “Simulim: Në pritje”, pa rezervim real; pashë se mesazhi u shfaq menjëherë nën buton në mënyrë interaktive. Pastaj u ktheva te detajet dhe lista: Navigimi mbrapa funksionoi në mënyrë të rregullt pa ruajtur ndonjë rezervim të vërtetë në backend.

## Çfarë do të përmirësoj
Për javën e ardhshme do të përmirësoj menaxhimin e gjendjes (state) që kërkesat e dërguara të ruhen përkohësisht gjatë sesionit të përdoruesit.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
AI më ndihmoi në strukturimin e komponentëve të Next.js, rregullimin e gabimeve të TypeScript dhe konfigurimin e rrugëve dinamike për detajet, ndërsa unë vetë bëra testimin e faqeve dhe provat në shfletues.