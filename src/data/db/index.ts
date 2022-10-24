import mongoose, { Mongoose } from "mongoose";
import { apiLogger } from "../../commons/logger";
import { DatabaseError, DatabaseErrorCodes } from "../../errors";

const connect = async (): Promise<Mongoose> => { 
    try {
        const con = await mongoose.connect("mongodb://localhost:27017/my-contacts")
        return con    
    } catch (error: Error | any) {
        apiLogger.error("Error connecting to database", {
            local: 'data.db',
            method: 'connect',
            code: DatabaseErrorCodes.CONNECTION,
            exception: error.message,
        })

        throw new DatabaseError("Error connecting to database", 
            DatabaseErrorCodes.CONNECTION)
    }
}

export default { 
    connect
}
