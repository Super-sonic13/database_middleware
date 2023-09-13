import { Router } from 'express';
import googleSheetsDataValidator from '../middlewares/googleSheetsDataValidator';
import * as GoogleSheetsController from '../controllers/googleSheets.controller';

const router = Router();

router.put(
    '/googleSheets/:tableName', 
    googleSheetsDataValidator,
    GoogleSheetsController.updateData,
);

export default router;