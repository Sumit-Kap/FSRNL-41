const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  name: { type: String, required: true },
  email_id: { type: String, index: true },
  phone_number: { type: String, index: true },
  address: { type: String },
});

const Customer = mongoose.model("Customers", CustomerSchema);

module.exports = Customer;
