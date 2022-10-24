import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../errors/database-error";

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    let code: string;
    let status: number;

    if (error instanceof DatabaseError) {
        status = 500
        code = 'DB-ERROR'
    } else {
        status = 500
        code = 'SERVER-ERROR'
    }

    res.status(status)
    res.json({ code, message: error.message })
}

export default errorHandler
