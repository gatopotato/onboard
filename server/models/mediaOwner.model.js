import mongoose from 'mongoose';

const mediaOwnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: { type: String, required: true },
  location: { type: String },
  licenseNumber: { type: String },
  productCatalog: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  address: { type: String },
}, { timestamps: true });

export default mongoose.model('MediaOwner', mediaOwnerSchema);