const getAll = async () => {
  const response = await fetch("http://localhost:4000/brands/all");
  const data = await response.json();
  return data;
};

const addOne = async (body: Record<string, FormDataEntryValue | null>) => {
  const response = await fetch("http://localhost:4000/brands/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

const deleteOne = async (id: number) => {
  await fetch(`http://localhost:4000/brands/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const brandsApi = {
  getAll,
  addOne,
  deleteOne,
};

export default brandsApi;
