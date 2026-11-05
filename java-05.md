# Java 5 - Hyrja me GitHub dhe ndryshimi me leje

## Zbatimi

- [x] NextAuth 4.24.15 dhe rruga e hyrjes me GitHub jane shtuar ne kod.
- [x] Skema ruhet te aplikacioni/schema-java05.sql dhe u ekzekutua ne Neon.
- [x] Neon konfirmoi ID 1 ne 08:00 me pronarin demo, ID 2 ne 08:15 pa pronar dhe ID 3 ne 07:45.
- [x] Paneli lexon identitetin dhe rolin nga sesioni dhe Neon; ruajtja kontrollon rolin dhe pronarin ne server.
- [x] OAuth App u krijua; konfigurimi lokal ruhet ne aplikacioni/.env.local, i perjashtuar nga Git. Sekretet nuk vendosen ne kete raport.
- [ ] Lidhja GitHub OAuth dhe caktimi i pronarit te ID 2 duhen konfiguruar per llogarine Gent Emini para se te perdoret paneli.

## Provat

Hyrja me GitHub dhe caktimi i pronarit nuk jane verifikuar per llogarine e pronarit te repository-t. Testet e ruajtjes per rastin e lejuar dhe te refuzuar jane ne pritje.

### Prova 1 - Sesioni

Hyrja me GitHub: duhet konfiguruar dhe testuar me llogarine e pronarit te repository-t.

### Prova 2 - Ruajtja e lejuar

ID 2: pronari ne Neon duhet verifikuar; veprimi per ndryshimin e ores nuk u testua.

### Prova 3 - Refuzimi

ID 1: refuzimi nepermjet formularit nuk u testua ende. Ora ne Neon mbeti 08:00; ID 2 mbeti 08:15 pas caktimit te pronarit.

## Sekretet dhe ruajtja

Sekretet qendrojne ne aplikacioni/.env.local, i cili perjashtohet nga Git. Kontrollo qe skedari te mos shfaqet ne GitHub Desktop.