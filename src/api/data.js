import axios from "axios";

export const api = axios.create({
  baseURL: "https://raw.githubusercontent.com/InCicle/frontend-test/main/",
});

export const buscaQuadros = async (setDado) => {
  const resposta = await api.get("management.json");
  setDado(resposta.data.data[0].boards);
};

export const buscaPosts = async () => {
  const resposta = await api.get("data.json");
  const a = resposta.data.data;
  return a;
};
