import { baseUrl } from "./constants";

const getAll = async () => {
  const response = await fetch(`${baseUrl}/brands/all`);
  const data = await response.json();
  return data;
};

const addOne = async (body: Record<string, FormDataEntryValue | null>) => {
  const response = await fetch(`${baseUrl}/brands/add`, {
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
  await fetch(`${baseUrl}/brands/${id}`, {
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
