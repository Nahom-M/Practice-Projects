import { Schema, model, models } from "mongoose";

const UserSchema = new Schema (
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true, select: false },
    avatar: String,
    role: { type: String, enum: ["admin", "moderator", "user"], default: "user",},
    isVerified: { type: Boolean, default: false },
  },

  { timestamps: true }
);

export default models.User || model("User", UserSchema);
