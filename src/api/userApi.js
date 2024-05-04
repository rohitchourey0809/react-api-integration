// userApi.js
const API_URL = "https://reqres.in/api";

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  const data = await response.json();
  return data.data;
};

export const getUserDetails = async (userId) => {
  const response = await fetch(`${API_URL}/users/${userId}`);
  const data = await response.json();
  return data.data;
};

export const createUser = async ({ name, job }) => {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, job }),
  });
  return response.json();
};
