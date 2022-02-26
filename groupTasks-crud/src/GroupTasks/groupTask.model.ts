/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import * as mongoose from 'mongoose';
import { GroupTask } from './groupTask.interface';

const groupTaskchema: mongoose.Schema = new mongoose.Schema({
  groupTaskName: {
    type: String,
    required: true,
    unique: true,
  },

  content: {
    type: String,
    required: true,
  },
  
  tasks: {
    type: Array,
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

export const groupTaskModel = mongoose.model<GroupTask & mongoose.Document>('GroupTask', groupTaskchema);
