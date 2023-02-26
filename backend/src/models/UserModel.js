const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: [true, "First name cannot be blank"],
        capitalize: true,
        minlength: 3,
        maxlength: 100,
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        trim: [true, "First name cannot be blank"],
        capitalize: true,
        minlength: 3,
        maxlength: 100,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: [true, "Email cannot be blank"],
        lowercase: true,
        unique: [true, "Email already exists"],
        match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        trim: [true, "Phone number cannot be blank"],
        match: /^(\+?88)?01[0-9]{9}$/
    },
    password: {
        type: String,
        required: true,
        validate: [
          {
            validator: function(value) {
              // Check for at least one uppercase letter
              return /[A-Z]/.test(value);
            },
            message: 'Password must contain at least one uppercase letter'
          },
          {
            validator: function(value) {
              // Check for at least one lowercase letter
              return /[a-z]/.test(value);
            },
            message: 'Password must contain at least one lowercase letter'
          },
          {
            validator: function(value) {
              // Check for at least one number
              return /[0-9]/.test(value);
            },
            message: 'Password must contain at least one number'
          },
          {
            validator: function(value) {
              // Check for at least one special character
              return /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(value);
            },
            message: 'Password must contain at least one special character'
          },
          {
            validator: function(value) {
              // Check for minimum length of 8 characters
              return value.length >= 8;
            },
            message: 'Password must be at least 8 characters long'
          }
        ]
      },

      photo: {
        type: String,
        required: true,
        default: true,
        validate: {
          validator: function(v) {
            return /\.(jpeg|jpg|gif|png)$/.test(v);
          },
          message: props => `${props.value} is not a valid image URL`
        }
      },

      author: {
        type: String,
        required: [true, "Author is required"],
        trim: [true, "Author cannot be blank"],
        capitalize: true,
        minlength: 3,
        maxlength: 100,
        enum: ["superadmin", "admin", "user"],
        default: "superadmin"
      }

}, {versionKey: false, timestamps: true});

const User = mongoose.model("User", UserSchema);
module.exports = User;
