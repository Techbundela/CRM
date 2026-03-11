import express from 'express';
import { addLead, getLeads, updateLead, deleteLead } from '../controllers/leadController';
import authMiddleware from '../middleware/auth';

const router = express.Router();

router.post('/', authMiddleware, addLead);
router.get('/', authMiddleware, getLeads); // Search/filter via query params
router.put('/:id', authMiddleware, updateLead);
router.delete('/:id', authMiddleware, deleteLead);

export default router;