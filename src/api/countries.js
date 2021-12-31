import { API_URL } from "../configs/api";

const all = async () => {
  const response = await fetch(`${API_URL}/all`);
  if (!response.ok) {
    throw new Error("No se encontró los recursos solicitados");
  }
  return await response.json();
};

const getByName = async (name) => {
  const response = await fetch(`${API_URL}/name/${name}`);
  if (!response.ok) {
    throw new Error("No se encontró los recursos solicitados");
  }
  return await response.json();
};

const exp = {
  all,
  getByName,
};

export default exp;
