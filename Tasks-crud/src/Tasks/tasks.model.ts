/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import * as mongoose from 'mongoose';
import { Task } from './tasks.interface';

const taskschema: mongoose.Schema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },

  taskName: {
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

export const taskModel = mongoose.model<Task & mongoose.Document>('Task', taskschema);
