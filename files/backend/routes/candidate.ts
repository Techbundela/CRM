import express from 'express';
import { addCandidate, getCandidates, bulkUpload } from '../controllers/candidateController';
import authMiddleware from '../middleware/auth';
import uploadMiddleware from '../middleware/upload'; // For resume files

const router = express.Router();

router.post('/', authMiddleware, addCandidate);
router.get('/', authMiddleware, getCandidates);
router.post('/bulk', authMiddleware, uploadMiddleware.single('file'), bulkUpload);

export default router;