const getAll = async () => {
  const response = await fetch("http://localhost:4000/parts/all");
  const data = await response.json();
  return data;
};

const partsApi = {
  getAll,
};

export default partsApi;
