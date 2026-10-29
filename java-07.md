# RideShare · Java 7

Ruaje këtë raport pranë README në rrënjën e repository-t.

## Rasti im
GitHub: gentemini44-Cpt
Kodi: P7-186
Skenari i zgjedhur (numri dhe titulli, nga Rastet 1–5): 1 — Lista dhe detajet
ID i udhëtimit në projektin tim: 2
Të dhënat fiktive të rastit: ID 2 për rrjedhën normale; ID 3 për provën me 0 vende; ID 999999 për ID që mungon.

## Parashikimi
Pres që kur të hap ID 2 nga lista, faqja e detajeve të tregojë të njëjtin udhëtim. Një ID që nuk ekziston duhet të shfaqë 404. Me 0 vende, kërkesa nuk duhet të jetë aktive. Kur lista është bosh, duhet të shfaqet mesazhi përkatës dhe një mundësi për rifreskim.

## Dy probleme
1. Lista bosh tregonte mesazhin se nuk kishte udhëtime, por nuk kishte veprim për ta rifreskuar listën.
2. Faqja e detajeve nuk e shfaq ID-në në përmbajtjen e dukshme; ID-ja shihet vetëm në adresë, ndaj konfirmimi vizual i udhëtimit është më i paqartë.

## Korrigjimi
Skedari: aplikacioni/src/app/page.tsx
Korrigjimi: U shtua lidhja “Rifresko listen” në gjendjen kur lista është bosh.
Arsyeja: Pa këtë veprim, përdoruesi nuk mund ta riprovonte ngarkimin nga ekrani bosh.

## Versionet
Para: https://github.com/gentemini44-Cpt/rideshare-mobile/commit/2260166c891fa9121370747296308afcd69b6168
Pas: https://github.com/gentemini44-Cpt/rideshare-mobile/commit/a79d658074145df9fb89a0a36df1f9beb8e1a4e0

## Provat që bëra
### Prova 1
Hapat: U hapën faqja kryesore, detajet dhe kërkesa për ID 2; pastaj u hap ID 999999.
Pritshmëria: Lista dhe detajet i referohen të njëjtit udhëtim; kërkesa shënohet si simulim dhe ID-ja që mungon kthen 404.
Vëzhgimi: Lista, detajet dhe kërkesa u përgjigjën me HTTP 200. Faqja e kërkesës shfaqi “Simulim: Në pritje”. ID 999999 u përgjigj me HTTP 404. Nuk u krye rezervim dhe nuk u ndryshuan të dhënat.

### Prova 2
Hapat: Për një kontroll lokal, query-ja e leximit u ndryshua përkohësisht që të kthente zero rreshta. U hap faqja kryesore, pastaj skedari i query-së u rikthye byte për byte.
Pritshmëria: Faqja shfaq mesazhin se nuk ka udhëtime dhe lidhjen “Rifresko listen”.
Vëzhgimi: Faqja u përgjigj me HTTP 200 dhe shfaqi mesazhin e listës bosh bashkë me lidhjen “Rifresko listen”. Query-ja nuk shkroi në databazë dhe skedari origjinal u rikthye.

### Prova 3
Hapat: Hyrja u ndryshua nga ID 2 në ID 3. U hapën faqja e detajeve dhe kërkesa për ID 3.
Pritshmëria: Me 0 vende, veprimi i kërkesës është joaktiv dhe faqja nuk premton rezervim.
Vëzhgimi: Detajet u përgjigjën me HTTP 200 dhe butoni ishte i çaktivizuar. Faqja e kërkesës tregoi se nuk kishte vende të lira.

## Ndryshimi i ri
Në provën 3 u përdor ID 3 në vend të ID 2; udhëtimi ID 3 ka 0 vende. Për hyrjen e re parashikova që kërkesa të mos jetë aktive, sepse nuk ka vende të lira. Nuk e kam dokumentuar si provë të demonstruar me koleg.

## Ndihma nga AI
AI ndihmoi në shqyrtimin e kodit, gjetjen e mungesës së veprimit të rifreskimit, zbatimin e korrigjimit dhe rishikimin e raportit. U kontrolluan përgjigjet HTTP dhe skedari i korrigjuar në projektin lokal.