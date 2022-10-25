import * as Yup from 'yup'

const createContactValidator = Yup.object({
    name: Yup.string()
        .required('Nome é obrigatório'),
    phone: Yup.string()
        .required('Telefone é obrigatório'),
    email: Yup.string()
        .required('E-mail é obrigatório')
        .email('E-mail deve ser válido')
})

export default createContactValidator
