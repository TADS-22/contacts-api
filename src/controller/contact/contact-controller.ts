import { Request, Response } from "express";
import { findAllContactsUseCase, registerContactUseCase } from "../../domain/use-case";

const save = async (req: Request, res: Response) => {
    await registerContactUseCase.execute(req.body)
    res.end()
}

const findAll = async (req: Request, res: Response) => {
    const result = await findAllContactsUseCase.execute()
    res.json(result)
}

export default {
    save,
    findAll,
}