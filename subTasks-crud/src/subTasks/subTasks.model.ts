/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import * as mongoose from 'mongoose';
import { SubTask } from './subTasks.interface';

const subTaskschema: mongoose.Schema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  
  connectedAt: {
    type: Date,
  },
}, {
  toJSON: {
    virtuals: true,
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    transform(_doc, ret) {
      delete ret._id;
    },
  },
  versionKey: false,
  id: true,
  timestamps: { createdAt: true, updatedAt: false },
});

export const subTaskModel = mongoose.model<SubTask & mongoose.Document>('SubTask', subTaskschema);
