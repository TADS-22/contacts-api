import { Router } from "express";
import { contactController } from "../controller";
import { createContactValidator } from "../domain/validation/contact";
import { requestBodyValidator } from "../middlewares/validation";

const contactsRouter = Router()

contactsRouter.get('/', contactController.findAll)
contactsRouter.get('/:id', contactController.findById)

contactsRouter.post('/', 
    requestBodyValidator(createContactValidator), 
    contactController.save,
)

export default contactsRouter
