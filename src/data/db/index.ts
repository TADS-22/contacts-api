import mongoose, { Mongoose } from "mongoose";

const connect = async (): Promise<Mongoose> => { 
    const con = await mongoose.connect("mongodb://localhost:27017/my-contacts")
    return con
}

export default { 
    connect
}
