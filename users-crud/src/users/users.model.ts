/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import * as mongoose from 'mongoose';
import { PermissionType, User } from './users.interface';

const userSchema: mongoose.Schema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  armyId: {
    type: String,
    required: true,
    unique: true,
  },
  permissions: {
    type: [String],
    enum: Object.values(PermissionType),
    required: true,
  },
  validationQuestions: [{
    _id: false,
    questionId: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  }],
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

userSchema.index({ armyId: 1 });
userSchema.index({ firstName: 1, lastName: 1 });

export const UserModel = mongoose.model<User & mongoose.Document>('User', userSchema);
