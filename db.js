import 'dotenv/config'
import postgres from 'postgres'

const sql = postgres({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl: 'require'
})

export default sql
