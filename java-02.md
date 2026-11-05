# RideShare — Java 2

**Shkurtesat:** MVP (Minimum Viable Product – produkti minimal i përdorshëm); AI (Artificial Intelligence – inteligjencë artificiale).

## 1. Problemi

Studentët që udhëtojnë për në AAB e kanë të vështirë të gjejnë shpejt një makinë me vende të lira. Ata kanë nevojë të dinë nga niset makina, në cilën orë niset dhe sa vende janë të lira.

## 2. Përdoruesit

Shoferi dëshiron të publikojë udhëtimin, vendin e nisjes, orën dhe numrin e vendeve të lira.

Udhëtari, si Arta, dëshiron të gjejë një udhëtim për në AAB, të shohë detajet dhe të kërkojë një vend te shoferi.

## 3. Tri ekranet

1. **Lista e udhëtimeve:** shfaq vendin e nisjes, destinacionin, orën dhe numrin e vendeve të lira për çdo udhëtim.
2. **Detajet e udhëtimit:** shfaqin nisjen, destinacionin, orën, vendtakimin dhe vendet e lira. Nga ky ekran Arta mund të kërkojë një vend.
3. **Kërkesa në pritje:** shfaq statusin **“Në pritje”** dhe tregon se kërkesa duhet të pranohet nga shoferi para se të bëhet e konfirmuar.

## 4. MVP — vetëm tri veçori

Tri veçoritë që duhet të funksionojnë së pari janë:

1. Të shfaqet lista e udhëtimeve për në AAB.
2. Përdoruesi të hapë një udhëtim dhe të shohë detajet e tij.
3. Udhëtari të kërkojë një vend dhe të shohë statusin **“Në pritje”**.

## 5. Çfarë e lëmë për më vonë?

Për versionin e parë lëmë jashtë pagesat online dhe hartën live.

Gjithashtu, konfirmimin real nga shoferi dhe njoftimet automatike mund t'i shtojmë më vonë.

## 6. Si e provoj?

**Kërkesë normale:** Arta hap listën, zgjedh një udhëtim që ka vende të lira, hap detajet dhe klikon **“Kërko vend”**. Në ekranin tjetër duhet të shfaqet **“Në pritje”**.

**Kur nuk ka vende të lira:** nëse udhëtimi nuk ka vende, duhet të shfaqet **“Nuk ka vende të lira”** dhe butoni për të kërkuar vend duhet të jetë i çaktivizuar ose të mos shfaqet.

## 7. Prova me kolegun

Gjatë provës kolegu u hutua sepse nuk e kuptoi menjëherë se nga lista duhej të hapte detajet e udhëtimit. Në skicë shtova një shigjetë të qartë nga lista te detajet dhe e bëra më të dukshëm veprimin **“Kërko vend”**.

## 8. Ndihma nga AI

Përdora ndihmë nga AI për t'i organizuar përgjigjet sipas kërkesave të ushtrimit dhe për të kontrolluar rrjedhën **lista → detajet → kërkesa në pritje**. Përmbajtjen e kontrollova vetë dhe e krahasova me funksionimin e aplikacionit.
