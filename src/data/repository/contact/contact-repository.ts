import db from "../../db";
import { Contact, IContact } from "../../entity";

const save = async (data: IContact) => {
    const con = await db.connect()
    const contact = new Contact(data)
    
    await contact.save()
    
    con.disconnect()
}

const findAll = async (): Promise<IContact[]> => {
    const con = await db.connect()
    const result = await Contact.find()
    con.disconnect()

    return result
}

const findById = async (id: string): Promise<IContact | null> => {
    const con = await db.connect()
    const result = await Contact.findById(id)
    con.disconnect()
    return result
}

export default { 
    save,
    findAll,
    findById,
}
