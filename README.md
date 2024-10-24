# Requirements for Visualization Tools
1. Use Typescript ✅
2. Use next.js ✅
3. Use antd ✅
4. Use Remote API UKHSA 🟢
   - implemented `ukhsaApi` using:
     - `openapi-typescipt` to generate ts types from their swagger (OpenAPI).
     - `openapi-fetch` which is just typed `fetch`, typed by genearted types from previous point 

5. Use `g2.antv` lib gor charts ✅a
6. [OPTIONAL] Use `trpc` libray for backed ✅
    - all backed is implemnted using `trpc`
      - crated 2 services:
        - `ukhsha.service.ts` which fetches data from public API (using `ukhsaApi`)
        - `favorites.service.ts` which uses `Drizzle ORM` to connect to `Vercel Postgres DB`, which control "favoite " feature

# Stack
- NextJs (Meta Framework)
- Ant Desing (Component library)
- Tailwind CSS (Custom styling)
- tRPC (BE framework for client-server communication)
- Drizzle ORM (connect to "Vercel Postgress databse")
- `openapi-typescript`, `openapi-fetch` for generate rest client for UKHSA public api

# Folder Structure in `/src`

### `/app`
My goal is to keep the Next.js file-based router folder as slim as possible, containing only files related to Next.js file routes.

### `/common`
Folder for all reusalbe stuff, I use sub-folder for generic `/components`, `/hooks` and `/utils` (did not need any).

### `db`
Folder for database `schema` definition.
Has `/queries` folder for defining standard CRUD methods for managing databse (Provider Layer)

### `features`
Folder for all business components, hooks etc.

### `lib`
Folder for files that do not belong anywhere else

### `server`
tRPC server files

# `.env`
For db connections
`POSTGRES_URL`