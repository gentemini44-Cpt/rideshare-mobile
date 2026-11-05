# Java 3: Kartat dhe faqet

## Prova 1: Lista në telefon

**Hapat:** Hapa faqen kryesore në `http://localhost:3000` dhe aktivizova pamjen e telefonit me gjerësi 375px në shfletues.

**Rezultati real:** U shfaqën saktësisht tri karta transporti (Prishtinë, Fushë Kosovë dhe Lipjan drejt AAB) dhe faqja nuk pati lëvizje horizontale.

## Prova 2: Detajet, zero vende dhe ID që mungon

**Hapat:** Klikova kartën e dytë dhe kontrollova `/udhetimi/2`; pastaj hapa kartën e tretë dhe adresën `/udhetimi/99`.

**Rezultati real:** `/udhetimi/2` shfaqi vendtakimin “Te stacioni kryesor”; karta 3 shfaqi butonin e çaktivizuar “Nuk ka vende të lira”; `/udhetimi/99` shfaqi “Udhëtimi nuk u gjet” dhe lidhjen për t'u kthyer te lista.

## Prova 3: Kërkesa dhe kthimi mbrapa

**Hapat:** Nga detajet e kartës 2 klikova “Kërko vend”, kontrollova faqen e kërkesës dhe klikova “Kthehu te detajet”.

**Rezultati real:** Faqja shfaqi “Simulim: Në pritje”, pa rezervim real; lidhja e kthimit e riktheu me sukses te detajet e udhëtimit.
