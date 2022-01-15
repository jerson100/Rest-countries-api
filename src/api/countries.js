import { API_URL } from "../configs/api";

const all = async () => {
  const response = await fetch(`${API_URL}/all`);
  if (!response.ok) {
    throw new Error("No se encontró los recursos solicitados");
  }
  return await response.json();
};

const getByName = async (name) => {
  const response = await fetch(`${API_URL}/name/${name}?fullText=true`);
  if (!response.ok) {
    throw new Error("No se encontró los recursos solicitados");
  }
  return await response.json();
};

const getByCode = async (name) => {
  const response = await fetch(`${API_URL}/alpha/${name}`);
  if (!response.ok) {
    throw new Error("No se encontró los recursos solicitados");
  }
  return await response.json();
};

const exp = {
  all,
  getByName,
  getByCode,
};

export default exp;
