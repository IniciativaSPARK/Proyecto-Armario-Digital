export type CloudinaryUploadResponse = {
  image_url: string;
  cloudinary_public_id: string;
};

export const uploadImageToCloudinary = async (
  imageFile: File
): Promise<CloudinaryUploadResponse> => {
  const formData = new FormData();

  formData.append("image", imageFile);

  const response = await fetch("/api/cloudinary/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error al subir imagen.");
  }

  return response.json();
};