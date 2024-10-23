import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  advertiserId: { type: mongoose.Schema.Types.ObjectId, ref: 'Advertiser', required: true },
  productId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  mediaOwnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'MediaOwner', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalCost: { type: Number, required: true },
  orderStatus: { type: String, required: true },
  uploadedMedia: [{ type: String }],
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);