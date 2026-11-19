# RideShare — Java 8

## Çfarë ndërtova
Shtova zgjedhjen lokale të vendtakimit te detajet e udhëtimit. Përdoruesi mund të shkruajë dhe konfirmojë një vendtakim ose të kërkojë pozicionin nga telefoni. Pozicioni nuk e cakton emrin e vendtakimit dhe nuk dërgohet te shoferi.

## Provat që bëra
### Prova 1: Leja nuk kërkohet sapo hapet faqja.
- **Hapat:** Hapa `/java-08-test` dhe vëreva gjendjen para se të klikoja vendndodhjen.
- **Pritshmëria:** Faqja hapet pa kërkuar leje; vendndodhja lexohet vetëm pas klikimit.
- **Vëzhgimi:** Faqja u hap në gjendjen `idle`, pa kërkuar leje. Me një përgjigje të simuluar në shfletues pas klikimit, u shfaq “Pozicioni u mor” dhe `37 m`. Nuk u testua pajisje fizike.

### Prova 2: Refuzimi i lejes nuk e bllokon përdoruesin.
- **Hapat:** Me API-n e vendndodhjes të simuluar në shfletues, ktheva gabimin me kodin 1, pastaj shkrova dhe konfirmova `Parkingu`.
- **Pritshmëria:** Shfaqet mesazhi i refuzimit, pritja mbaron dhe vendtakimi manual mund të konfirmohet.
- **Vëzhgimi:** U shfaq gjendja `denied`; butoni i vendndodhjes u bë përsëri i përdorshëm dhe `Parkingu` u konfirmua. Ky ishte simulim i kodit të gabimit, jo refuzim i lejes reale të pajisjes.

### Prova 3: Skadimi i pritjes nuk e bllokon përdoruesin.
- **Hapat:** Simulova gabimin me kodin 3, pastaj shkrova dhe konfirmova `Stacioni`.
- **Pritshmëria:** Shfaqet gjendja `timeout`, pritja mbaron dhe vendtakimi manual mund të konfirmohet.
- **Vëzhgimi:** U shfaq gjendja `timeout`; butoni i vendndodhjes u bë përsëri i përdorshëm dhe `Stacioni` u konfirmua. Ky ishte simulim i kodit të gabimit, jo pritje reale dhjetësekondëshe.

### Prova 4: Dëshmitë në GitHub nuk tregojnë adresën time reale.
- **Hapat:** Kontrollova skedarët e Javës 8 të krijuar dhe ndryshuar për koordinata, adresa reale dhe sekrete.
- **Pritshmëria:** Nuk publikohen vendndodhje ose të dhëna sekrete.
- **Vëzhgimi:** Komponenti aktiv nuk ruan apo shfaq koordinatat; shfaq vetëm saktësinë në metra. Faqja `/java-08-test` përdor tekst fiktiv dhe nuk lidhet me Neon. Nuk u provua pajisje fizike.

## Ku gjendet puna
- `aplikacioni/src/components/MeetingPoint.tsx` — komponenti aktiv i vendtakimit dhe vendndodhjes.
- `aplikacioni/src/app/udhetimi/[id]/page.tsx` — integrimi në detajet reale të udhëtimit.
- `aplikacioni/src/app/java-08-test/page.tsx` — faqe prove pa Neon ose hyrje.
- `aplikacioni/src/components/MeetingPoint.test.tsx` — test për gjendjen fillestare pa kërkesë automatike për GPS.
- `aplikacioni/src/app/globals.css` — stilet mobile të komponentit.
- `mobile-week08.json` — konfigurimi i faqes së provës për testin automatik të dorëzimit.
- Demonstrimi lokal: `/java-08-test`.

Build-i, lint-i dhe 15 testet automatike të aplikacionit kaluan. Në shfletues provova veçmas refuzimin dhe skadimin me kode të simuluara. Këto nuk zëvendësojnë provën e lejeve GPS në pajisje fizike. Publikimi në Vercel ende nuk është konfirmuar.

## Çfarë mbetet për përmirësim
Zgjedhja ruhet vetëm në gjendjen lokale të faqes dhe nuk i dërgohet shoferit; humbet pas rifreskimit. GPS-i real kërkon leje dhe kontekst të sigurt (localhost ose HTTPS). Duhet provuar pranimi dhe refuzimi i lejes në shfletues.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Përdora Copilot për të lexuar kërkesat e javës 8 dhe për të zbatuar komponentin e ripërdorshëm. Verifikova kodin me lint/build; sjelljen e GPS-it real dhe lejet e pajisjes duhet t’i provoj vetë në shfletues.

## Prova me një hyrje të re
- Hyrja që provova: Shkrova `Biblioteka`, e konfirmova, pastaj ndryshova fushën në `Parkingu` pa e konfirmuar.
- Parashikimi im para klikimit: Vendtakimi i konfirmuar do të mbetet `Biblioteka` derisa të konfirmohet vlera e re.
- Çfarë pashë realisht: Vendtakimi i konfirmuar mbeti `Biblioteka`. Gjithashtu provova tekstin vetëm me hapësira; u shfaq gabimi dhe zgjedhja e mëparshme mbeti.
- Skedari dhe funksioni që e shpjegojnë: `components/MeetingPoint.tsx`, `confirmMeeting`
- Çfarë kuptova ose korrigjova: Teksti në fushë dhe vendtakimi i konfirmuar janë vlera të veçanta; vetëm butoni i konfirmimit e ndryshon zgjedhjen.

Këtë pjesë e shpjegoj në klasë. Kontrolli automatik nuk verifikon vërtetësinë e provës.
