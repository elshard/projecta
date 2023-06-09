const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  type: String,
  brand: String,
  model: String,
  mYear: String,
  km: Number,
  mileage: String,
  noOfOwner: Number,
  fueltype: String,
  rtoNo: String,
  chassisNo: String,
  color: String,
  insurance: { expiry: Date, type: String },
  transmissionType: String,
  history: String,
  lastService: Date,
  airbags: Number,
  musicSystem: String,
  orvm: String,
  engineStartStop: String,
  centralLocking: String,
  sunroof: String,
  powerWindow: String,
  headLamps: String,
  ac: String,
  engineType: String,
  driveTrain: String,
  steeringType: String,
  bhp: String,
  fueltank: Number,
  seatingCapacity: Number,
  bootSpace: Number,
  length: Number,
  height: Number,
  groundClearance: Number,
  loanStatus: String,
  interiorImages: { type: Array },
  exteriorImages: { type: Array },
  rtoLicenseType: String,
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
