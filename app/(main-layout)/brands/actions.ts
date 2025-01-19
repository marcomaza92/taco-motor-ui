"use server";

import brandsApi from "@/services/api/brands";
import { revalidatePath } from "next/cache";

export const addBrand = async (formData: FormData) => {
  const rawData = { name: formData.get("name") };
  await brandsApi.addOne(rawData);
  revalidatePath("/brands");
};

export const deleteBrand = async (id: number) => {
  await brandsApi.deleteOne(id);
  revalidatePath("/brands");
};
