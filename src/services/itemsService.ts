import { supabase } from "@/lib/supabaseClient";
import { uploadImageToCloudinary } from "@/services/cloudinaryService";

const TEST_USER_ID = process.env.NEXT_PUBLIC_TEST_USER_ID;

export type CreateItemInput = {
  name: string;
  category_id: string;
  fabric_id?: string | null;
  color_hex?: string | null;
  image_file: File;
  min_temp?: number | null;
  max_temp?: number | null;
  user_id?: string;
};

export type UpdateItemInput = {
  name?: string;
  category_id?: string;
  fabric_id?: string | null;
  color_hex?: string | null;
  image_file?: File | null;
  min_temp?: number | null;
  max_temp?: number | null;
};

const validateHexColor = (color?: string | null) => {
  if (!color) return true;
  return /^#([0-9A-Fa-f]{6})$/.test(color);
};

const validateTemperatures = (
  minTemp?: number | null,
  maxTemp?: number | null
) => {
  if (minTemp === null || minTemp === undefined) return true;
  if (maxTemp === null || maxTemp === undefined) return true;

  return minTemp <= maxTemp;
};

const validateCreateItem = (item: CreateItemInput) => {
  if (!item.name || item.name.trim() === "") {
    throw new Error("El nombre de la prenda no debe estar vacío.");
  }

  if (!item.category_id) {
    throw new Error("La categoría es obligatoria.");
  }

  if (!item.image_file) {
    throw new Error("La imagen es obligatoria para crear una prenda.");
  }

  if (!validateTemperatures(item.min_temp, item.max_temp)) {
    throw new Error("La temperatura mínima no debe ser mayor que la máxima.");
  }

  if (!validateHexColor(item.color_hex)) {
    throw new Error("El color debe tener formato hexadecimal válido. Ejemplo: #000000");
  }
};

const validateUpdateItem = (item: UpdateItemInput) => {
  if (item.name !== undefined && item.name.trim() === "") {
    throw new Error("El nombre de la prenda no debe estar vacío.");
  }

  if (!validateTemperatures(item.min_temp, item.max_temp)) {
    throw new Error("La temperatura mínima no debe ser mayor que la máxima.");
  }

  if (!validateHexColor(item.color_hex)) {
    throw new Error("El color debe tener formato hexadecimal válido. Ejemplo: #000000");
  }
};

export const getItems = async () => {
  const { data, error } = await supabase
    .from("items")
    .select(`
      *,
      categories(name),
      fabrics(name)
    `)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getItemById = async (id: string) => {
  const { data, error } = await supabase
    .from("items")
    .select(`
      *,
      categories(name),
      fabrics(name)
    `)
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const createItem = async (item: CreateItemInput) => {
  validateCreateItem(item);

  const userId = item.user_id || TEST_USER_ID;

  if (!userId) {
    throw new Error("Falta user_id temporal. Configura NEXT_PUBLIC_TEST_USER_ID.");
  }

  const imageResult = await uploadImageToCloudinary(item.image_file);

  const { data, error } = await supabase
    .from("items")
    .insert([
      {
        name: item.name.trim(),
        category_id: item.category_id,
        fabric_id: item.fabric_id || null,
        color_hex: item.color_hex || null,
        image_url: imageResult.image_url,
        cloudinary_public_id: imageResult.cloudinary_public_id,
        min_temp: item.min_temp ?? null,
        max_temp: item.max_temp ?? null,
        user_id: userId,
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const updateItem = async (id: string, item: UpdateItemInput) => {
  validateUpdateItem(item);

  let imageData = {};

  if (item.image_file) {
    const imageResult = await uploadImageToCloudinary(item.image_file);

    imageData = {
      image_url: imageResult.image_url,
      cloudinary_public_id: imageResult.cloudinary_public_id,
    };
  }

  const updateData = {
    ...(item.name !== undefined && { name: item.name.trim() }),
    ...(item.category_id !== undefined && { category_id: item.category_id }),
    ...(item.fabric_id !== undefined && { fabric_id: item.fabric_id }),
    ...(item.color_hex !== undefined && { color_hex: item.color_hex }),
    ...(item.min_temp !== undefined && { min_temp: item.min_temp }),
    ...(item.max_temp !== undefined && { max_temp: item.max_temp }),
    ...imageData,
  };

  const { data, error } = await supabase
    .from("items")
    .update(updateData)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const deleteItem = async (id: string) => {
  if (!id) {
    throw new Error("No se recibió el id de la prenda a eliminar.");
  }

  const { data, error } = await supabase
    .from("items")
    .delete()
    .eq("id", id)
    .select();

  console.log("DELETE DATA:", data);
  console.log("DELETE ERROR:", error);

  if (error) {
    throw new Error(error.message);
  }

  if (!data || data.length === 0) {
    throw new Error(
      "No se eliminó ningún registro. Puede ser por permisos RLS o porque el id no existe."
    );
  }

  return true;
};