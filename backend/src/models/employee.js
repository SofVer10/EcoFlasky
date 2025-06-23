import { Schema, model } from "mongoose"; 

const employeeSchema = new Schema(
  { 
    name: {
      type: String,
      required: true,  // ❌ Era "require"
      maxLength: 100
    },
    password: {
      type: String,
      required: true,  // ❌ Era "require"
      maxLength: 100   // ❌ Era "maxLenght"
    },
    email: {
      type: String,
      required: true,  // ❌ Era "require"
      maxLength: 100
    },
    speciality: {
      type: Schema.Types.ObjectId,
      ref: "Speciality",
      required: true   // ❌ Era "require"
    },
    isVerified: {
      type: Boolean,
      required: true,  // ❌ Era "require"
      default: false   // ✅ Agregado valor por defecto
    }
  }, 
  {
    timestamps: true,
    strict: true
  }
);

export default model("Employee", employeeSchema);