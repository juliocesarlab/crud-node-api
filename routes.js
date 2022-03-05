import { Router } from "express";
import ClientsController from './controllers/getClientsController.js'

export const clientsRouter = Router();

clientsRouter.get('/', ClientsController.getAllClients)

clientsRouter.post('/data', (req, res) => {
  const { name, cel, city}  = req.body
  db.query("INSERT INTO clients (name, cel ,city) VALUES (name ,'23423', 'uberaba')")
})

