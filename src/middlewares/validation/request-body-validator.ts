import { NextFunction, Request, Response } from "express";
import * as Yup from 'yup'
import { apiLogger } from "../../commons/logger";
import { ValidationError, ValidationErrorCodes } from "../../errors";

const requestBodyValidator = (schema: Yup.AnyObjectSchema) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try { 
            await schema.validate(req.body)
            next()
        } catch (error: Error | any) {
            apiLogger.error(error.message, {
                local: 'request-body-validator',
                method: 'requestBodyValidator',
                code: ValidationErrorCodes.REQUEST_BODY,
                exception: error.message,
            })

            throw new ValidationError(error.message, 
                ValidationErrorCodes.REQUEST_BODY)
        }
    }

export default requestBodyValidator
