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

export default { 
    save,
    findAll,
}
