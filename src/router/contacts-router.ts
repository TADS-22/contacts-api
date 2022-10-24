import { Router } from "express";
import { contactController } from "../controller";

const contactsRouter = Router()

contactsRouter.get('/', contactController.findAll)
contactsRouter.get('/:id', contactController.findById)

contactsRouter.post('/', contactController.save)

export default contactsRouter
