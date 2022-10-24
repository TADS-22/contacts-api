import { Request, Response } from "express";
import { findAllContactsUseCase, registerContactUseCase } from "../../domain/use-case";
import findContactUseCase from "../../domain/use-case/contact/find-contact-use-case";

const save = async (req: Request, res: Response) => {
    await registerContactUseCase.execute(req.body)
    res.end()
}

const findAll = async (req: Request, res: Response) => {
    const result = await findAllContactsUseCase.execute()
    res.json(result)
}

const findById = async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await findContactUseCase.execute(id)
    res.json(result)
}

export default {
    save,
    findAll,
    findById,
}