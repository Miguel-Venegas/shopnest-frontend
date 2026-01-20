import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const ACCOUNTS_URL = `${API_BASE_URL}/api/accounts`;

export const signIn = async (email, password) => {
  const res = await axios.post(`${ACCOUNTS_URL}/signin`, 
    { email, password },
    { withCredentials: true }
);

  return res.data.user;
};

export const signUp = async (email, password, passwordConfirmation, firstName, lastName, businessName) => {
  const res = await axios.post(`${ACCOUNTS_URL}/signup`, 
    {
      email,
      password,
      passwordConfirmation,
      firstName,
      lastName,
      businessName,
    },
    { withCredentials: true }
);

  return res.data;
};
