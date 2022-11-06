import {IRoutePersistence} from '../../dataschema/IRoutePersistence';
import mongoose from 'mongoose';

const RouteSchema = new mongoose.Schema(
  {
    domainId: {type: String, unique: true},
    idWarehouseStart: {type: String},
    idWarehouseDestination: {type: String},
    distance: {type: Number},
    time: {type: Number},
    energy: {type: Number},
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IRoutePersistence & mongoose.Document>('Route', RouteSchema);
