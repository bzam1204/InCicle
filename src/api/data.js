import axios from "axios";

export const api = axios.create({
  baseURL: "https://raw.githubusercontent.com/InCicle/frontend-test/main/",
});

export const busca = async (url, setDado) => {
  const resposta = await api.get(url);
  setDado(resposta.data);
};

export const buscaPosts = async () => {
  const resposta = await api.get("data.json");
  const a = resposta.data.data;
  return a;
};
