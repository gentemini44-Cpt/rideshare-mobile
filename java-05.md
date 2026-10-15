# Java 5 · RideShare

Plotësoje pas provave reale. Mos vendos sekrete ose vlera nga `.env.local` këtu.

### Prova 1 · Sesioni

**Hapat e provës:** Hapa `/panel`, klikova **Hyr me GitHub** dhe autorizova llogarinë; pastaj bëra dy kërkesa rifreskimi të sesionit dhe dërgova kërkesën lokale të daljes.

**Rezultati real:** Hyrja shfaqi profilin me rolin **shofer**; sesioni testues mbeti aktiv pas rifreskimit dhe dalja pastroi cookie-n e sesionit. Dalja nuk u klikua në shfletues.

### Prova 2 · Ndryshimi i lejuar (udhëtimi ID 2)

**Hapat e provës:** Në panel vendosa `08:25` te fusha e orës, klikova **Ruaj orën**, kontrollova Neon/listën/detajet e ID 2 dhe pastaj e riktheva orën në `08:15`.

**Rezultati real:** Paneli shfaqi sukses; Neon, lista dhe detajet treguan `08:25`. Pas rikthimit, ID 2 ishte përsëri `08:15`.

### Prova 3 · Ndryshimi i refuzuar (udhëtimi ID 1)

**Hapat e provës:** Me sesion prove lokal të shoferit, dërgova formularin te Server Action me `id=1` në vend të `id=2` dhe kontrollova rreshtin për ID 1 në Neon.

**Rezultati real:** Serveri e refuzoi kërkesën me mesazhin “Nuk ke leje”; ora e ID 1 mbeti `08:00`. Fusha nuk u ndryshua manualisht në DevTools.

## Vështirësi ose gabime

Dalja në shfletues dhe ndryshimi manual në DevTools nuk u kryen. Rifreskimi/dalja dhe Server Action për ID 1 u verifikuan me sesion lokal prove; ruajtja e ID 2 u provua në panel.
