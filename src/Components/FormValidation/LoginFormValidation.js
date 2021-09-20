export default function validate(values) {
   console.log("My Values Object is in Validations Object", values);
  let { picture } = values;
   
  
  let errors = {};
  let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  /// Email validation

  if (!values.email) {
    errors.email = "email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  /// Phone number validation
    
  if(!values.phone) {
    errors.phone = "phone number is required";
  }
  else if (values.phone.length < 10 ) {
    errors.phone= "Phone number must be at least 10 characters long";
  } else if(values.phone.match(phoneno)){
     errors.phone = "Please Enter a valid phone number";
  }

  /// PassWord Validation
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  }

  /// File Upload Validations
  if (!values.picture) {
    errors.picture = "Please select a picture";
  } else if (
    picture.type !== "image/jpeg" &&
    picture.type !== "image/png" &&
    picture.type !== "image/jpg" &&
    picture.type !== "image/svg" &&
    picture.type !== "image/gif"
  ) {
    errors.picture = "Please select a  Valid picture";
  }

  return errors;
}
