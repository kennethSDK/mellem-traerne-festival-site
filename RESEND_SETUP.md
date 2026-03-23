# Resend Email Setup Guide

For at aktivere email-notifikationer for frivillig-tilmeldinger, skal du følge disse trin:

## 1. Opret en Resend konto

1. Gå til [https://resend.com](https://resend.com)
2. Opret en gratis konto
3. Bekræft din email-adresse

## 2. Få din API-nøgle

1. Log ind på Resend
2. Gå til "API Keys" i menuen
3. Klik på "Create API Key"
4. Giv den et navn (f.eks. "Mellem Træerne Production")
5. Kopiér API-nøglen (den vises kun én gang!)

## 3. Tilføj API-nøglen til projektet

1. Åbn filen `.env.local` i projektets rod
2. Erstat `your_resend_api_key_here` med din rigtige API-nøgle:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
   ```
3. Gem filen
4. Genstart Next.js serveren (stop og start `npm run dev` igen)

## 4. Test funktionaliteten

1. Gå til `/frivillige` siden på hjemmesiden
2. Udfyld og indsend formularen
3. Kenneth@slotsengensmusik.dk skulle nu modtage en email med tilmeldingsdetaljerne

## Vigtige noter

- **Gratis plan**: Resend's gratis plan tillader 100 emails/dag og 3,000 emails/måned
- **From-adresse**: Lige nu bruger emailen `onboarding@resend.dev` som afsender. For at bruge en custom email (f.eks. `noreply@mellemtraerne.dk`), skal du:
  1. Tilføje og verificere dit domæne i Resend
  2. Opdatere `from`-adressen i `app/api/volunteers/route.ts`

## Fejlfinding

Hvis emails ikke ankommer:
1. Tjek at API-nøglen er korrekt i `.env.local`
2. Tjek spam-mappen
3. Se server logs for fejlmeddelelser
4. Verificer at serveren er genstartet efter at have tilføjet API-nøglen

## Support

Hvis du har problemer, kan du kontakte Resend support på [https://resend.com/support](https://resend.com/support)
