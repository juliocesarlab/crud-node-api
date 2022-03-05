import { db } from "../database/connection.js";

class ClientsController {
  async getAllClients(req, res) {
    db.query("SELECT * FROM clients", (err, result) => {
      if (err) {
        console.log("error" + err);
        res.status(500).send("Error: Contact admin");
      }
  
      const { rows } = result;
      res.status(200).send(rows)
    })
  }

  
}

export default new ClientsController()