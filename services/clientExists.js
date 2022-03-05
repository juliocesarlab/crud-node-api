import { db } from "../database/connection.js";

export async function clientExists(clientParam) {
  let clientProperty = typeof clientParam === 'number' ? 'id' : 'name'

  const result = await db.query(`SELECT name FROM clients WHERE ${clientProperty}='${clientParam}'`)
  
  const clientAlreadyExists = result.rows.length != 0 ? true : false
  return clientAlreadyExists
}


