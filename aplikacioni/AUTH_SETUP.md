# Java 5 – GitHub login dhe paneli i shoferit

Ky projekt shton autentikimin GitHub (NextAuth v4), profilin në Neon dhe panelin e shoferit duke ruajtur ndërfaqen dhe testet ekzistuese.

## Konfigurimi

1. Në terminal, hyni në `aplikacioni` dhe ekzekutoni `npm install`.
2. Ekzekutoni `schema-java05.sql` **një herë** në databazën Neon të laboratorit.
3. Krijoni OAuth App në GitHub. Callback URL për lokal: `http://localhost:3000/api/auth/callback/github`; për prodhim përdorni URL-në reale të aplikacionit.
4. Krijoni `aplikacioni/.env.local` me vlerat e mëposhtme (mos e ngarkoni në Git):

```dotenv
DATABASE_URL=postgresql://...
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<sekret i gjeneruar rastësisht>
GITHUB_ID=<GitHub OAuth Client ID>
GITHUB_SECRET=<GitHub OAuth Client Secret>
```

5. Ekzekutoni `npm run dev` dhe hapni `/panel`. Pas hyrjes, profilit i caktohet automatikisht roli `udhetar`.
6. Për ta provuar panelin si shofer, vendosni ID-në numerike të GitHub të llogarisë suaj (shfaqet te `/panel`):

```sql
UPDATE profilet SET roli = 'shofer' WHERE github_id = '<GITHUB_NUMERIC_ID>';
UPDATE udhetimet SET shofer_id = '<GITHUB_NUMERIC_ID>' WHERE id = '2';
```

7. Rifreskoni `/panel`, ndryshoni orën dhe verifikoni listën. Vetëm pronari i udhëtimit me rolin `shofer` mund ta ndryshojë atë.

**Kujdes:** Për deployment caktoni `NEXTAUTH_URL` dhe variablat e tjera në platformë. `schema-java05.sql` nuk duhet ekzekutuar mbi databazë prodhimi pa kontroll paraprak. Rezervimi i vendit mbetet vetëm simulim.

## Vercel

Projekti `rideshare-mobile` në team-in `rexhae` është lidhur me repository-n `gentemini44-Cpt/rideshare-mobile`, branch-in `main` dhe Root Directory `aplikacioni`. Domain-i i caktuar aktualisht është `https://rideshare-mobile-eight-phi.vercel.app`. Krijoni GitHub OAuth App nën llogarinë tuaj dhe vendosni callback URL-në:
`https://rideshare-mobile-eight-phi.vercel.app/api/auth/callback/github`.

Aplikacioni hapet edhe pa këto sekrete në mënyrën publike demonstrative: shfaq udhëtime fiktive, por nuk ruan kërkesa. Hyrja dhe paneli i shoferit mbeten të çaktivizuara derisa të konfigurohet OAuth.

Në Vercel → Project Settings → Environment Variables, shtoni `DATABASE_URL`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`, `GITHUB_ID` dhe `GITHUB_SECRET` për Production. Përdorni vlera private të krijuara për llogaritë tuaja; mos i vendosni këtu, në Git ose në logje. Për Preview, caktoni variablat dhe URL-në përkatëse veçmas nëse aktivizoni preview deployments. Pas ndryshimit, bëni redeploy.

- `DATABASE_URL`: connection string nga projekti juaj Neon.
- `NEXTAUTH_URL`: `https://rideshare-mobile-eight-phi.vercel.app`.
- `NEXTAUTH_SECRET`: gjenerojeni lokalisht me një gjenerator kriptografik të sigurt.
- `GITHUB_ID` dhe `GITHUB_SECRET`: nga GitHub OAuth App që krijoni; callback URL-ja duhet të jetë ajo më sipër. Emri i saktë i variablës është `GITHUB_ID` (me nënvizë), jo `GITHUBID`.

Shtoni të njëjtat emra në `aplikacioni/.env.local` për zhvillim lokal. Mos i kopjoni vlerat e prodhimit në dokumentim ose Git.
