"use server";

import { revalidatePath } from "next/cache";

export const addPart = async (formData: FormData) => {
  const rawData = {
    name: formData.get("name"),
  };
  await fetch("http://localhost:4000/parts/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawData),
  });

  revalidatePath("/parts");
};
