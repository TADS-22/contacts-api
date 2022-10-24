import { contactRepository } from "../../../data/repository"
import { ContactDto } from "../../dto"
import { contactMapper } from "../../mapper"

const execute = async (id: string): Promise<ContactDto | null> => {
    const contact = await contactRepository.findById(id)

    if (contact) {
        return contactMapper.mapContactDto(contact)
    }

    return null
}

export default { 
    execute,
}