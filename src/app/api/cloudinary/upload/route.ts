import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

export const runtime = "nodejs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (
  fileBuffer: Buffer,
  folder: string
): Promise<{ image_url: string; cloudinary_public_id: string }> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
      },
      (error, result) => {
        if (error || !result) {
          reject(error);
          return;
        }

        resolve({
          image_url: result.secure_url,
          cloudinary_public_id: result.public_id,
        });
      }
    );

    stream.end(fileBuffer);
  });
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("image");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { message: "La imagen es obligatoria." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const folder =
      process.env.CLOUDINARY_UPLOAD_FOLDER || "armario-digital/items";

    const result = await uploadToCloudinary(buffer, folder);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error al subir imagen a Cloudinary:", error);

    return NextResponse.json(
      { message: "Error al subir la imagen a Cloudinary." },
      { status: 500 }
    );
  }
}