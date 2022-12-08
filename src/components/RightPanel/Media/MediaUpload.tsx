import { IKContext, IKUpload } from "imagekitio-react";
import { toast } from "react-toastify";
import IKMedia from "./IKMedia";

interface MediaUploadProps {
  imageFilePath: object[];
  videoFilePath: object[];
  mediaTypeDisplay: boolean;
  handleImageOnSuccess: (response: any) => void;

  handleImageOnError: (response: any) => void;
  handleVideoOnSuccess: (response: any) => void;
  handleVideoOnError: (response: any) => void;
  handleMediaTypeDisplay: () => void;
}

const MediaUpload: React.FC<MediaUploadProps> = ({
  imageFilePath,
  videoFilePath,
  mediaTypeDisplay,
  handleImageOnSuccess,

  handleImageOnError,
  handleVideoOnSuccess,
  handleVideoOnError,
  handleMediaTypeDisplay,
}) => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-full w-full">
        <IKContext
          urlEndpoint={process.env.REACT_APP_IMAGEKIT_URLENDPOINT}
          publicKey={process.env.REACT_APP_IMAGEKIT_PUBLICKEY}
          authenticationEndpoint={
            process.env.REACT_APP_IMAGEKIT_AUTHENTICATION_ENDPOINT
          }
        >
          <div className="flex items-center justify-evenly p-6 font-prompt text-white text-sm border-b border-white/20 mx-2 gap-2">
            <IKUpload
              hidden
              id="image-upload"
              multiple
              onSuccess={handleImageOnSuccess}
              onUploadStart={() =>
                toast.info("Uploading Images...", {
                  autoClose: 500,
                })
              }
              onError={handleImageOnError}
            />
            <label
              htmlFor="image-upload"
              className="cursor-pointer text-center w-full border px-6 py-3 rounded-lg bg-[rgba(44,49,57,0.6);]"
            >
              Upload Images
            </label>
            <IKUpload
              hidden
              id="video-upload"
              multiple
              onUploadStart={() =>
                toast.info("Uploading Videos...", {
                  autoClose: 3000,
                })
              }
              onSuccess={handleVideoOnSuccess}
              onError={handleVideoOnError}
            />
            <label
              htmlFor="video-upload"
              className="cursor-pointer text-center w-full border px-6 py-3 rounded-lg bg-[rgba(44,49,57,0.6);]"
            >
              Upload Videos
            </label>
          </div>
          <IKMedia
            mediaTypeDisplay={mediaTypeDisplay}
            imageFilePath={imageFilePath}
            videoFilePath={videoFilePath}
            handleMediaTypeDisplay={handleMediaTypeDisplay}
          />
        </IKContext>
      </div>
    </div>
  );
};

export default MediaUpload;
