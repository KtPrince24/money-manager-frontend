const BASE_URL = "http://localhost:5000/api";

// Get all accounts
export const getAccounts = async () => {
  const res = await fetch(`${BASE_URL}/accounts`);
  return res.json();
};

export const getTransactions = async (filter) => {
  const res = await fetch(
    `${BASE_URL}/transactions?filter=${filter}`
  );
  return res.json();
};

// Add income or expense
export const addTransaction = async (data) => {
  const res = await fetch(`${BASE_URL}/transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
