import { ITruckPersistence } from '../../dataschema/ITruckPersistence';
import mongoose from 'mongoose';

const TruckSchema = new mongoose.Schema(
  {
    domainId: { type: String, unique: true },
    licensePlate: { type: String },
    tare: { type: Number },
    maximumLoad: { type: Number },
    batteryCapacity: { type: Number },
    autonomy: { type: Number },
    chargingTime: { type: Number },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<ITruckPersistence & mongoose.Document>('Truck', TruckSchema);
