import { ImagePlus, Trash2 } from "lucide-react";
import ImageUploading, {
  type ImageListType,
  type ImageType,
} from "react-images-uploading";

interface ImageUploaderProps {
  image: ImageType[];
  setImage: (image: ImageType[]) => void;
  label: string;
}

/**
 * Image Uploader Component
 *
 */
const ImageUploader: React.FC<ImageUploaderProps> = ({
  image,
  setImage,
  label,
}) => {
  const onChange = (imageList: ImageListType) => {
    setImage(imageList as never[]);
  };

  return (
    <ImageUploading
      multiple
      value={image}
      onChange={onChange}
      maxNumber={1}
      data-testid="image-uploader"
    >
      {({ imageList, onImageUpload, onImageRemove, dragProps }) => (
        <>
          {imageList[0]?.dataURL ? (
            <div className="w-[400px] rounded-md  py-9">
              <div className="relative">
                <img
                  src={imageList[0].dataURL || ""}
                  alt="Product Image"
                  className="rounded-md border border-primary"
                />
                <div className="absolute right-0 top-0 p-4">
                  <button
                    className=" btn-primary btn-sm btn"
                    onClick={() => onImageRemove(0)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="text-xs">Supprimer</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="w-[300px] py-9 md:w-[400px]"
              onClick={onImageUpload}
              {...dragProps}
            >
              <div className="bg-muted">
                <div className="flex h-full flex-col items-center justify-center gap-4 rounded-lg border border-primary py-24">
                  <ImagePlus className="h-10 w-10" />
                  <p className="font-bold">{label}</p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </ImageUploading>
  );
};

export default ImageUploader;
