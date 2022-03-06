import { Router } from "express";
import Clients from './controllers/clientsController.js'

export const clientsRouter = Router();

clientsRouter.get('/', (req, res) => res.send("hey"))
clientsRouter.get('/clients', Clients.getAll)
clientsRouter.get('/clients/disable', Clients.getAllDisable)
clientsRouter.post('/client/create', Clients.create)
clientsRouter.put('/client/edit/:id', Clients.update)
