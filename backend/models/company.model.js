import mongoose from "mongoose";
import { User } from "./user.model.js";

const companySchema = new mongoose.Schema({
  name: {
    type:String,
    unique:true
  },
  description: {
    type: String,
    
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  logo: {
    type: String,//URL to company logo
  },
  UserId:{
    type:mongoose.Schema.Types.ObjectId,
    ref: User,
    required:true
  }
}, {timestamps:true});
export const company = mongoose.model("Company", companySchema);