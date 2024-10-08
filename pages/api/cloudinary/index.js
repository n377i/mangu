import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export default async function handler(request, response) {
  if (request.method !== "DELETE") {
    response.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { public_id } = request.body;

  try {
    const result = await cloudinary.v2.uploader.destroy(public_id, {
      invalidate: true,
    });
    response.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error deleting image:", error);
    response
      .status(500)
      .json({ success: false, error: "Error deleting image" });
  }
}
