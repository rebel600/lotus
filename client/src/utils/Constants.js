export const SERVER_IP = "http://localhost:5175/lotus/api";

export const BASE_API = `${SERVER_IP}`

export const MESSAGE = {
    PASSWORD : "Must be minimum 8 characters long and alphanumeric with at least 1 uppercase letter, 1 number and 1 special character",
    REQUIRED : "This field is required",
};

  export const PASSWORDS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/g;
  export const OTP_REGEX = /^[0-9]{4}$/;