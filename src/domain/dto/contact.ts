interface BaseContactDto { 
    name: string,
    email: string,
    phone: string,
}

export interface ContactDto extends BaseContactDto{
    id: string,
}

export interface RegisterContactDto extends BaseContactDto {}
