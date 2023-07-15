import { env } from "~/env.mjs";
import axios from "axios";
import { type ImageType } from "react-images-uploading";

interface UploadImageRes {
  secure_url: string;
}

// Upload Image Service
const uploadImageService = async (image: ImageType) => {
  const imageData = new FormData();
  imageData.append("file", image.file as File);
  imageData.append("upload_preset", env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
  imageData.append("cloud_name", env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
  imageData.append("folder", "3andekshy3andi/Products");

  try {
    const res = await axios.post<UploadImageRes>(
      `https://api.cloudinary.com/v1_1/${env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      imageData
    );
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      return null;
    }
  }
};

export default uploadImageService;
