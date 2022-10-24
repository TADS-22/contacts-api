export class DatabaseError extends Error {}

export enum DatabaseErrorCodes {
    CONNECTION = 'DB-ERROR-000',
    SAVE = 'DB-ERROR-001',
    FIND = 'DB-ERROR-002',
}
