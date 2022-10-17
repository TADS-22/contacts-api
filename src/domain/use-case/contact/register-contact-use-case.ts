import { contactRepository } from "../../../data/repository";
import { RegisterContactDto } from "../../dto";
import { contactMapper } from "../../mapper";

const execute = async (registerContact: RegisterContactDto) => {
    const contact = contactMapper.mapContact(registerContact)
    await contactRepository.save(contact)   
}

export default {
    execute
}
