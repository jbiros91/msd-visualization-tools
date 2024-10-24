import '@/db/envConfig'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema: './src/db/schema.ts',
    dialect: 'postgresql',

    out: './migrations',
    dbCredentials: {
        url: process.env.POSTGRES_URL,
    },
})
