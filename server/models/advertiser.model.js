import mongoose from 'mongoose';

const advertiserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: { type: String, required: true },
  industry: { type: String },
  accountBalance: { type: Number, default: 0 },
  address: { type: String },
  adType: { type: String },
}, { timestamps: true });

export default mongoose.model('Advertiser', advertiserSchema);