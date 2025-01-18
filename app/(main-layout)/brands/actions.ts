"use server";

import { revalidatePath } from "next/cache";

export const addBrand = async (formData: FormData) => {
  const rawData = { name: formData.get("name") };
  const response = await fetch("http://localhost:4000/brands/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawData),
  });
  console.log(response);
  revalidatePath("/brands");
};
