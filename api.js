const API_URL = import.meta.env.VITE_API_URL;

export const getLinks = async () => {
  const res = await fetch(`${API_URL}/links`);
  return res.json();
};

export const createLink = async (link) => {
  const res = await fetch(`${API_URL}/links`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(link),
  });
  return res.json();
};

export const deleteLink = async (id) => {
  await fetch(`${API_URL}/links/${id}`, { method: "DELETE" });
};
