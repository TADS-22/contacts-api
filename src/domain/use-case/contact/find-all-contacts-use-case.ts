import { contactRepository } from "../../../data/repository";
import { ContactDto } from "../../dto";
import { contactMapper } from "../../mapper";

const execute = async (): Promise<ContactDto[]> => {
    const result = await contactRepository.findAll()
    return result.map(contact => contactMapper.mapContactDto(contact))
}

export default {
    execute,
}
