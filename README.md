# ORBITAL INTEL

Private flight intelligence web app (Next.js).  
- API Vault (Amadeus keys)  
- Predator multi-hub scan  
- Rarity scoring + anomaly flags  
- Runs locally and deploys to Vercel

## Run locally
1) Install Node.js (18+)
2) In project folder:
   - `npm install`
   - `npm run dev`

Open http://localhost:3000

## Deploy to Vercel
- Import the project in Vercel.
- Add environment variables (recommended):
  - `AMADEUS_CLIENT_ID`
  - `AMADEUS_CLIENT_SECRET`
  - `AMADEUS_ENV` = `test` or `prod` (default `test`)
Then deploy.

If you don’t add env vars, you can still use API Vault to paste keys per session (personal use).
