import { IContact } from "../../../data/entity";
import { ContactDto, RegisterContactDto } from "../../dto";

const mapContact = (registerContact: RegisterContactDto): IContact => {
    return {
        name: registerContact.name,
        email: registerContact.email,
        phone: registerContact.phone,
    }
}

const mapContactDto = (contact: IContact): ContactDto => {
    return {
        id: contact._id ?? '',
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
    }
}

export default {
    mapContact,
    mapContactDto,
}
