import Client from "pg/lib/client.js"
import "dotenv/config"

export const db = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: String(process.env.DB_PASS),
  database: process.env.DB.NAME,
})

