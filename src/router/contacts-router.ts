import { Router } from "express";
import { contactController } from "../controller";

const contactsRouter = Router()

contactsRouter.get('/', contactController.findAll)
contactsRouter.post('/', contactController.save)

export default contactsRouter
