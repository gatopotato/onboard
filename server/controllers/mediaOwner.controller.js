import MediaOwner from '../models/mediaOwner.js';

export const getAllMediaOwners = async (req, res) => {
  try {
    const mediaOwners = await MediaOwner.find();
    res.json(mediaOwners);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMediaOwnerById = async (req, res) => {
  try {
    const mediaOwner = await MediaOwner.findById(req.params.id);
    if (!mediaOwner) {
      return res.status(404).json({ message: 'Media Owner not found' });
    }
    res.json(mediaOwner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createMediaOwner = async (req, res) => {
  const mediaOwner = new MediaOwner(req.body);
  try {
    const newMediaOwner = await mediaOwner.save();
    res.status(201).json(newMediaOwner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateMediaOwner = async (req, res) => {
  try {
    const updatedMediaOwner = await MediaOwner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMediaOwner) {
      return res.status(404).json({ message: 'Media Owner not found' });
    }
    res.json(updatedMediaOwner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteMediaOwner = async (req, res) => {
  try {
    const mediaOwner = await MediaOwner.findByIdAndDelete(req.params.id);
    if (!mediaOwner) {
      return res.status(404).json({ message: 'Media Owner not found' });
    }
    res.json({ message: 'Media Owner deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};