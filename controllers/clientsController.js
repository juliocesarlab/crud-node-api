import { db } from "../database/connection.js";
import { clientExists } from "../services/clientExists.js"

class Clients {
  async getAll(req, res) {
    try{
      const result = await db.query("SELECT * FROM clients WHERE disabled=false ORDER BY id ASC");
      const { rows } = result;
      
      res.status(200).json(rows)
    } catch(err) {
      console.log("error" + err);
      res.status(500).send("Error: Contact admin");
    } 
  }

  async getAllDisable(req, res) {
    try{
      const result = await db.query("SELECT * FROM clients WHERE disabled=true ORDER BY id ASC");
      const { rows } = result;
      
      res.status(200).json(rows)
    } catch(err) {
      console.log("error" + err);
      res.status(500).send("Error: Contact admin");
    } 
  }

  async create(req, res) {
    try{
      const { name, cel, city}  = await req.body
      const clientAlreadyExists  = await clientExists(name)

      if (clientAlreadyExists) {
        res.status(400).json({'message': `Client with name ${name} already exists`})
      } else {
        await db.query(
          `INSERT INTO clients(name, cel ,city) 
           VALUES ('${name}', '${cel}', '${city}')`
        )
        res.status(201).json({name, cel, city})
      }
    }catch (err) {
      console.log("error" + err);
      res.status(500).send("Error: Contact admin");
    }
  }
  
  async update(req, res) {
    const { id } =  req.params
    const { name, cel, city, disabled}  = req.body
    const clientAlreadyExists  = await clientExists(Number(id))

    if (clientAlreadyExists) {
      const result = db.query(
        `UPDATE clients SET 
          name='${name}', cel='${cel}', city='${city}', disabled=${disabled}
          WHERE id=${id}`
      )

      res.status(200).json({name, cel, city, disabled})

    } else {
      res.status(400).json({'message': `Client with id ${id} not exists`})
    }
  }
}

export default new Clients()