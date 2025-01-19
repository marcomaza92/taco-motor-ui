import { baseUrl } from "./constants";

const getAll = async () => {
  const response = await fetch(`${baseUrl}/parts/all`);
  const data = await response.json();
  return data;
};

const partsApi = {
  getAll,
};

export default partsApi;
