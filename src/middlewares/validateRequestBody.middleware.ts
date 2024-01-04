import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

import { BadRequestError } from '@utils/exeptions/ApiErrors';


const validateRequestBody = (sheme: Joi.Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = sheme.validate(req.body);
        if (error) {
            const { name, statusCode, description, isOperational } = new BadRequestError('Invalid request body structure');
            res.status(statusCode).json({ name, statusCode, description, isOperational })
            
            return;
        }

        next();
    }
};

export default validateRequestBody;