import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  mediaOwnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'MediaOwner', required: true },
  location: { type: String, required: true },
  adType: { type: String, required: true },
  availabilityStatus: { type: String, required: true },
  price: { type: Number, required: true },
  dimensions: { type: String },
}, { timestamps: true });

export default mongoose.model('Product', productSchema);