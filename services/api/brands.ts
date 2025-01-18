const getAll = async () => {
  const response = await fetch("http://localhost:4000/brands/all");
  const data = await response.json();
  console.log(data);
  return data;
};

const brandsApi = {
  getAll,
};

export default brandsApi;
