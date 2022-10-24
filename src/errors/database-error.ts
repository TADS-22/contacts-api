import { StatusCodes } from 'http-status-codes'
import { DefaultError } from "./default-error";

export enum DatabaseErrorCodes {
    CONNECTION = 'DB-ERROR-000',
    SAVE = 'DB-ERROR-001',
    FIND = 'DB-ERROR-002',
}

export class DatabaseError extends DefaultError {
    constructor(message: string, code: DatabaseErrorCodes) {
        super(message, StatusCodes.INTERNAL_SERVER_ERROR, code)
    }
}
