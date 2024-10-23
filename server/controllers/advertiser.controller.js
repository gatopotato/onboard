import Advertiser from '../models/advertiser.js';

export const getAllAdvertisers = async (req, res) => {
  try {
    const advertisers = await Advertiser.find();
    res.json(advertisers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAdvertiserById = async (req, res) => {
  try {
    const advertiser = await Advertiser.findById(req.params.id);
    if (!advertiser) {
      return res.status(404).json({ message: 'Advertiser not found' });
    }
    res.json(advertiser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createAdvertiser = async (req, res) => {
  const advertiser = new Advertiser(req.body);
  try {
    const newAdvertiser = await advertiser.save();
    res.status(201).json(newAdvertiser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateAdvertiser = async (req, res) => {
  try {
    const updatedAdvertiser = await Advertiser.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAdvertiser) {
      return res.status(404).json({ message: 'Advertiser not found' });
    }
    res.json(updatedAdvertiser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteAdvertiser = async (req, res) => {
  try {
    const advertiser = await Advertiser.findByIdAndDelete(req.params.id);
    if (!advertiser) {
      return res.status(404).json({ message: 'Advertiser not found' });
    }
    res.json({ message: 'Advertiser deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};