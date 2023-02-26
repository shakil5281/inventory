import mongoose from "mongoose";

const userAddressSchema = new mongoose.Schema({
  address: {
    street: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
      match: /^[a-zA-Z0-9\s,'-]*$/
    },
    city: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      match: /^[a-zA-Z\s]*$/
    },
    state: {
      type: String,
      required: true,
      enum: ['Barisal', 'Chattogram', 'Dhaka', 'Khulna', 'Mymensingh', 'Rajshahi', 'Rangpur', 'Sylhet']
    },
    country: {
      type: String,
      required: true,
      default: 'Bangladesh',
      enum: ['Bangladesh']
    },
    zip: {
      type: String,
      required: true,
      match: /^[0-9]{4}$/,
      minlength: 4,
      maxlength: 4
    }
  },
  // other fields
});

const Useraddress = mongoose.model('Useraddress', userAddressSchema);

module.exports = Useraddress;
