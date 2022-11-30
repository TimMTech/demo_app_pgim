import { IKImage, IKVideo } from "imagekitio-react";
import { formatBytes } from "../../../utils/conversions";

interface IKMediaProps {
  imageFilePath: object[];
  videoFilePath: object[];
}

const IKMedia: React.FC<IKMediaProps> = ({ imageFilePath, videoFilePath }) => {
  return (
    <div className="text-white  flex flex-col gap-4">
      <div className="flex-1 flex flex-col gap-4 p-2 max-h-[600px] overflow-y-auto   ">
        {imageFilePath.length !== 0 && (
          <h2 className=" text-center font-prompt font-semibold ">
            Images
          </h2>
        )}

        {imageFilePath?.map((image: any, index: number) => {
          const { size, url, blob } = image;
          return (
            <div
              key={index}
              className="flex flex-col gap-4 font-prompt text-sm "
            >
              <div className="flex flex-col">
                <span className="">{formatBytes(size)} KB (Original)</span>
                <IKImage src={url} draggable />
              </div>
              <div>
                <span >
                  {formatBytes(size)} KB (Optimized 100% Quality)
                </span>
                <IKImage
                  src={url}
                  lqip={{ active: true, quality: 100 }}
                  draggable
                />
              </div>
              <div className="flex flex-col">
                <div>
                  <span>{formatBytes(blob.size)} KB (Thumbnail)</span>
                  <IKImage
                    src={url}
                    draggable
                    transformation={[
                      {
                        width: "200",
                        height: "200",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex-1 flex flex-col gap-4 p-2 max-h-[600px] overflow-y-auto ">
        {videoFilePath.length !== 0 && (
          <h2 className="text-center font-prompt font-semibold ">
            Videos
          </h2>
        )}
        {videoFilePath?.map((video: any, index: number) => {
          const { size, url } = video;
          return (
            <div
              key={index}
              className="flex flex-col gap-4 font-prompt text-sm"
            >
              <div className="flex flex-col">
                <span>{formatBytes(size)} KB (Original)</span>
                <IKVideo src={url} draggable controls />
              </div>
              <div>
                <span>{formatBytes(size)} KB (Thumbnail)</span>
                <IKVideo
                  src={url}
                  transformation={[
                    {
                      width: "200",
                      height: "200",
                    },
                  ]}
                  draggable
                  controls
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IKMedia;
