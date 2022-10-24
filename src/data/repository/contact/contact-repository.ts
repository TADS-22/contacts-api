import { apiLogger } from "../../../commons/logger";
import { DatabaseError, DatabaseErrorCodes } from "../../../errors";
import db from "../../db";
import { Contact, IContact } from "../../entity";

const save = async (data: IContact) => {
    try {
        const con = await db.connect()
        const contact = new Contact(data)
        
        await contact.save()
        con.disconnect()    
    } catch(error: Error | any) {
        apiLogger.error("Error saving contact", {
            local: 'contact-repository',
            method: 'save',
            code: DatabaseErrorCodes.SAVE,
            exception: error.message,
        })

        throw new DatabaseError("Error saving contact", 
            DatabaseErrorCodes.SAVE)
    }
}

const findAll = async (): Promise<IContact[]> => {
    try {
        const con = await db.connect()
        const result = await Contact.find()
        con.disconnect()
    
        return result    
    } catch(error: Error | any) {
        apiLogger.error("Error finding all contacts", {
            local: 'contact-repository',
            method: 'findAll',
            code: DatabaseErrorCodes.FIND,
            exception: error.message,
        })

        throw new DatabaseError("Error finding all contacts", 
            DatabaseErrorCodes.FIND)
    }
}

const findById = async (id: string): Promise<IContact | null> => {
    try {
        const con = await db.connect()
        const result = await Contact.findById(id)
        con.disconnect()
        return result
    } catch(error: Error | any) {
        apiLogger.error("Error finding contact by id", {
            local: 'contact-repository',
            method: 'findById',
            code: DatabaseErrorCodes.FIND,
            exception: error.message,
        })

        throw new DatabaseError("Error finding contact by id", 
            DatabaseErrorCodes.FIND)
    }
}

export default { 
    save,
    findAll,
    findById,
}
