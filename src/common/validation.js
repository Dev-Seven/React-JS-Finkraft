export function requiredField(message, value) {
  let error;
  if (value === "" || value === null || value === 0 || value === undefined) {
    error = message;
    console.log(error);
  }
  return error;
}

//For Select Dropdown
export function requiredSelect(message, value) {
  let error;
  if (value === "" || value === null || value === 0 || value === undefined) {
    error = message;
  }
  return error;
}

export function validateEmail(message, value) {
  let errorMessage;
  if (value === "" || value === null || value === undefined) {
    errorMessage = message;
    return errorMessage;
  } else if (
    !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
    value !== "" &&
    value !== null
  ) {
    errorMessage = "Please enter valid Email Address";
    return errorMessage;
  } else {
  }
}

export function validatePhone(message, value) {
  let errorMessage;
  if (value === "" || value === null || value === undefined) {
    errorMessage = message;
    return errorMessage;
  } else if (
    !value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i) &&
    value !== "" &&
    value !== null
  ) {
    errorMessage = "Please enter valid Phone Number";
    return errorMessage;
  } else {
  }
}

export function validatePinCode(message, value) {
  let errorMessage;
  var pattern = /^\d{6}$/;
  //console.log("field", value);
  if (value === "" || value === null || value === undefined) {
    errorMessage = message;
    return errorMessage;
  } else if (value.length > 6) {
    errorMessage = "Pincode must be 6 digits only.";
    return errorMessage;
  } else if (!pattern.test(value) && value.length !== 0) {
    errorMessage = "Invalid PinCode";
    return errorMessage;
  } else {
  }
}

export function validatePanCard(message, value) {
  let errorMessage;
  if (value === "" || value === null || value === undefined) {
    errorMessage = message;
    return errorMessage;
  } else if (!value.match("^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$")) {
    errorMessage = "Please enter valid PAN card number.";
    return errorMessage;
  } else {
  }
}

export function validateOTP(message, value) {
  let errorMessage;
  if (value === "" || value === null || value === undefined) {
    errorMessage = "Please enter OTP number.";
    return errorMessage;
  } else if (value.match("^[0-9]{6}(s*,*,s*[0-9]{6})*$") && value.length > 6) {
    errorMessage = "OTP must be 6 digits only.";
    return errorMessage;
  } else if (!value.match("^[0-9]{6}(s*,*,s*[0-9]{6})*$")) {
    errorMessage = "Please enter valid OTP number.";
    return errorMessage;
  } else {
  }
}

export function validateGstNumber(message, value) {
  let errorMessage;
  if (value === "" || value === null || value === undefined) {
    errorMessage = message;
    return errorMessage;
  } else if (
    !value.match("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$")
  ) {
    errorMessage = "Please enter valid GSTIN number";
    return errorMessage;
  } else {
  }
}
