import { model, Schema } from "mongoose";

export interface IContact {
    _id?: string,
    name: string,
    email: string,
    phone: string,
}

const contactSchema = new Schema<IContact>({
    name: { type: String },
    email: { type: String },
    phone: { type: String },    
})

export const Contact = model<IContact>('contact', contactSchema)
