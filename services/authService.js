import api from './api/client';

const ACCOUNTS_URL = `${import.meta.env.VITE_API_URL}/api/accounts`;

export const signIn = async (email, password) => {
  const res = await api.post("/api/accounts/signin", { email, password });
  return res.data.user;
};

export const signUp = async (
  email,
  password,
  passwordConfirmation,
  firstName,
  lastName,
  businessName
) => {
  const res = await api.post("/api/accounts/signup", {
    email,
    password,
    passwordConfirmation,
    firstName,
    lastName,
    businessName,
  });

  return res.data;
};