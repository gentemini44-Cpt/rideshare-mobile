# PRD (Product Requirements Document) — 1 Faqe

**Shkurtesat:** PWA (Progressive Web App – aplikacion web progresiv); PRD (Product Requirements Document – dokumenti i kërkesave të produktit); MVP (Minimum Viable Product – produkti minimal i përdorshëm); MSRP (Manufacturer's Suggested Retail Price – çmimi i sugjeruar i shitjes nga prodhuesi).
**Kursi:** Programimi për Pajisje Mobile (2026/2027) • **Kolegji AAB**  
**Emri i Projektit:** Sistem i Brendshëm për Menaxhim të Inventarit  
**Themeluesi / Ekipi:** Blerim Tahiri, RE-88956/24  
**Data & Versioni:** Java 01 • Versioni 1.0 (Draft për MVP)

---

## 1. Përdoruesi dhe Problemi Real
- **Kush e përjeton dhimbjen?** Një biznes familjar në fazë fillestare (3 anëtarë) që rishet veshje të porositura nga faqja zyrtare e një brendi: njëri anëtar bën porositë, ndërsa pranimi dhe verifikimi i produkteve bëhet bashkërisht nga të tre.
- **Kur ndodh?** Sa herë që pranohet një dërgesë nga furnizuesi (~2–3 dërgesa në muaj, me 35–50 produkte secila) dhe duhet bërë vlerësimi/verifikimi i produkteve; si dhe në çdo shitje, kur produkti duhet hequr nga evidenca.
- **Si e zgjidhin sot?** Stoku mbahet manualisht në Excel/Word. Çdo produkt i pranuar krahasohet dorazi me faqen e brendit (a është i njëjti artikull, masa, ngjyra) — vetëm verifikimi i një dërgese merr mbi 4 orë. Ka pasur raste kur produkte nuk kanë arritur fare por kanë figuruar "në stok", dhe raste kur produkte të shitura janë harruar në Excel e u janë premtuar klientëve.

## 2. Evidenca e Vëzhgimit (3 Bisedat me Përdoruesit)
- **Biseda 1 (Porositësi – anëtari që bën porositë):** *"Çdo dërgesë me 35–50 produkte na merr mbi 4 orë vetëm verifikimi — e hapim Excel-in dhe faqen e brendit produkt për produkt për të parë a janë masat dhe ngjyrat ashtu siç i kemi porositur."*
- **Biseda 2 (Anëtari i pranimit të mallit):** *"Ka pasur raste kur disa produkte nuk kanë ardhur fare në dërgesë, e ne kemi menduar se i kemi në dispozicion — e kemi kuptuar vetëm kur i kemi kërkuar fizikisht."*
- **Biseda 3 (Anëtari i shitjeve):** *"Kemi harruar ta heqim nga Excel-i një produkt të shitur; klienti kërkoi ta blinte dhe i thamë se e kemi, por nuk e kishim. Ajo situatë na kushtoi besim."*

## 3. Hipoteza e Vlerës
> **Nëse** i ofrojmë biznesit familjar një Mobile PWA ku porositë regjistrohen me variacione (masë/ngjyrë), të dhënat dhe fotot e produkteve importohen automatikisht nga faqja e brendit, dërgesat pranohen me verifikim produkt-për-produkt dhe shitja bëhet me skanim të label-it,  
> **atëherë** koha e verifikimit të një dërgese bie nga ~4 orë në nën 1 orë, stoku pasqyron gjithmonë gjendjen reale (zero raste "e kemi por s'e kemi"), dhe çmimi i sugjeruar i shitjes dihet për çdo produkt në momentin e pranimit.

## 4. Rrjedha Kryesore e Përdoruesit (Core Flow — Max 5 Hapa)
1. **Kyçja:** Anëtari i biznesit kyçet me llogarinë e tij të autorizuar.
2. **Regjistrimi i porosisë:** Pas porosisë në faqen e brendit, invoice futet në sistem; produktet shtohen me variacione (masë, ngjyrë, sasi, çmim blerjeje), ndërsa të dhënat, fotot dhe MSRP importohen nga faqja e brendit.
3. **Pritja:** Porosia qëndron me status "Në pritje" derisa dërgesa të arrijë në depo.
4. **Pranimi dhe verifikimi:** Çdo produkt verifikohet fizikisht dhe shënohet: *Arriti* / *Mungon* / *Gabim (masë/ngjyrë)*.
5. **Kostoja dhe çmimi:** Pas pranimit, sistemi nxjerr për çdo produkt çmimin e sugjeruar të shitjes (çmimi i blerjes + marzhë e konfigurueshme).

## 5. Kufijtë e MVP-së (Scope Contract)
- **BRENDA MVP-së (Maksimumi 3 funksione):**
  1. Autentikimi i sigurt — qasje vetëm për 3 anëtarët e autorizuar të biznesit.
  2. Cikli i porosisë: regjistrimi me variacione + importi i të dhënave/fotove nga faqja e brendit + pranimi me verifikim produkt-për-produkt + llogaritja automatike e çmimit të sugjeruar të shitjes.
  3. Shitja me skanim: skanohet label-i i brendit në rrobë, produkti gjendet në sistem dhe me një klik shënohet "Sold" (largohet nga stoku në kohë reale).
- **JASHTË MVP-së (Të përjashtuara qëllimisht për këtë semestër):**
  - Storefront publik për klientët.
  - Shtimi i brendeve të reja (MVP mbulon vetëm një brend).
  - Leximi automatik i invoice-ave nga email-i.

## 6. Kriteret e Pranimit (Acceptance Criteria - Çfarë testohet)
- [ ] **AC-1:** Një porosi me N produkte regjistrohet me variacione (masë/ngjyrë) dhe shfaqet me status "Në pritje" te të gjithë anëtarët pa rifreskuar faqen (Supabase Realtime).
- [ ] **AC-2:** Kur një produkt shënohet "Mungon" gjatë pranimit, ai NUK llogaritet në stokun e disponueshëm.
- [ ] **AC-3:** Pas përfundimit të pranimit, për çdo produkt të pranuar llogaritet automatikisht çmimi i sugjeruar i shitjes (çmimi i blerjes + marzhë e konfigurueshme).
- [ ] **AC-4:** Skanimi i label-it e gjen produktin e saktë (përfshirë variacionin) dhe klikimi "Sold" e zbret stokun menjëherë për të gjithë përdoruesit.
- [ ] **AC-5:** Përdoruesit e paautorizuar bllokohen nga sistemi; të dhënat lexohen/shkruhen vetëm nga llogaritë e biznesit (Supabase RLS).
- [ ] **AC-6:** Pa internet, aplikacioni hapet dhe shfaq inventarin e fundit dhe porositë ekzistuese (read-only offline).

## 7. Modeli Minimal i të Dhënave (Supabase PostgreSQL)
```sql
profiles (id, full_name, email, role)
orders   (id, invoice_no, brand_order_url, order_date, status)
products (id, order_id, name, brand_sku, size, color, label_code,
          purchase_price, msrp, suggested_price,
          status)  -- ordered | received | missing | wrong_item | sold
product_photos (id, product_id, photo_url)
settings (id, default_margin)  -- marzha e konfigurueshme për çmimin e sugjeruar
```

## 8. Rreziku Kryesor që Duhet Testuar
- **Rreziku:** Bllokimi i IP-së nga faqja e brendit gjatë importimit automatik të të dhënave dhe fotove të produkteve — pa fotot dhe të dhënat zyrtare, regjistrimi kthehet në proces manual.
- **Testi në Javën 2:** Importohen të dhënat dhe fotot për një porosi reale (35–50 produkte) me kufizim të shpejtësisë së kërkesave (rate limiting), për të vërtetuar se importi përfundon i plotë pa u bllokuar nga faqja e brendit.
