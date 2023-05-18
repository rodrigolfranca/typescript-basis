import express from 'express';
import Controller from '../controllers/controller';

const router = express.Router();

router.get('/', Controller.message);

export default router;