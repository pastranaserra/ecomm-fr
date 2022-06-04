import apiClient from './_client';

export const signUp = async ({ name, lastName, email, password }) => {
  try {
    return await apiClient.post('/auth/sign-up', {
      name,
      lastName,
      email,
      password,
    });
  } catch (e) {
    const status = e.response?.status;
    if (status === 500) throw new Error('Unexpected error');
    throw e;
  }
};

export const logIn = async ({ email, password }) => {
  try {
    return await apiClient.post('/auth/log-in', {
      email,
      password,
    });
  } catch (e) {
    const status = e.response?.status;
    if (status === 401) throw new Error('Invalid email or password');
    if (status === 500) throw new Error('Unexpected error');
    throw e;
  }
};
