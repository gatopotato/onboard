import express from 'express';
import {
  getAllAdvertisers,
  getAdvertiserById,
  createAdvertiser,
  updateAdvertiser,
  deleteAdvertiser
} from '../controllers/advertiserController.js';

const router = express.Router();

router.get('/', getAllAdvertisers);
router.get('/:id', getAdvertiserById);
router.post('/', createAdvertiser);
router.put('/:id', updateAdvertiser);
router.delete('/:id', deleteAdvertiser);

export default router;