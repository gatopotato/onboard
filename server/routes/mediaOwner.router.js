import express from 'express';
import {
  getAllMediaOwners,
  getMediaOwnerById,
  createMediaOwner,
  updateMediaOwner,
  deleteMediaOwner
} from '../controllers/mediaOwnerController.js';

const router = express.Router();

router.get('/', getAllMediaOwners);
router.get('/:id', getMediaOwnerById);
router.post('/', createMediaOwner);
router.put('/:id', updateMediaOwner);
router.delete('/:id', deleteMediaOwner);

export default router;