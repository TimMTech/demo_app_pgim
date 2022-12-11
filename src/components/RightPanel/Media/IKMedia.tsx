import { IKImage, IKVideo } from "imagekitio-react";
import { formatBytes } from "../../../utils/conversions";
import classNames from "classnames";

interface IKMediaProps {
  imageFilePath: object[];
  videoFilePath: object[];
  mediaTypeDisplay: boolean;

  handleMediaTypeDisplay: () => void;
}

const IKMedia: React.FC<IKMediaProps> = ({
  imageFilePath,
  videoFilePath,
  mediaTypeDisplay,

  handleMediaTypeDisplay,
}) => {
  return (
    <div className="text-white  flex flex-col gap-4">
      <div className="w-full flex items-center justify-center p-2 font-prompt">
        <button
          disabled={imageFilePath.length === 0}
          onClick={handleMediaTypeDisplay}
          className={classNames("w-full py-2 bg-[rgba(44,49,57,0.6);]", {
            "bg-white text-black":
              mediaTypeDisplay === true && imageFilePath.length !== 0,
            "text-white/20": imageFilePath.length === 0,
          })}
        >
          Images
        </button>
        <button
          disabled={videoFilePath.length === 0}
          onClick={handleMediaTypeDisplay}
          className={classNames("w-full py-2 bg-[rgba(44,49,57,0.6);]", {
            "bg-white text-black":
              mediaTypeDisplay === false && videoFilePath.length !== 0,
            "text-white/20": videoFilePath.length === 0,
          })}
        >
          Videos
        </button>
      </div>
      {mediaTypeDisplay ? (
        <div className="flex-1 flex flex-col gap-10 p-2 max-h-[1000px] overflow-y-auto">
          {imageFilePath.length !== 0 && (
            <p className="text-center">
              Drag And Drop Image Into Rich Text Editor To Add Image.
            </p>
          )}
          {imageFilePath?.map((image: any, index: number) => {
            const { size, url, blob, height, width } = image;
            return (
              <div
                key={index}
                className="flex flex-col gap-4 font-prompt text-sm "
              >
                <div className="flex flex-col">
                  <span>{`${width} x ${height}`}</span>
                  <span>{formatBytes(size)} KB (Original)</span>
                  <IKImage
                    src={url}
                    draggable
                    className="border cursor-grabbing"
                  />
                </div>
                <div className="flex flex-col">
                  <span>{`${width} x ${height}`}</span>
                  <span>{formatBytes(size)} KB (Optimized 100% Quality)</span>
                  <IKImage
                    className="border cursor-grabbing"
                    src={url}
                    lqip={{ active: true, quality: 100 }}
                    draggable
                  />
                </div>
                <div className="flex flex-col">
                  <div>
                    <div className="flex flex-col">
                      <span>200 x 200</span>
                      <span>{formatBytes(blob.size)} KB (Thumbnail)</span>
                    </div>
                    <IKImage
                      className="border cursor-grabbing"
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
      ) : (
        <div className="flex-1 flex flex-col gap-10 p-2 max-h-[1000px]  overflow-y-auto">
          {videoFilePath.length !== 0 && (
            <p className="text-center">
              Click Video To Copy URL And Paste Into Rich Text Editor's Media
              Upload
            </p>
          )}

          {videoFilePath?.map((video: any, index: number) => {
            const { size, url } = video;
            return (
              <div
                key={index}
                className="flex flex-col gap-4 font-prompt text-sm "
              >
                <div className="flex flex-col">
                  <span>500 x 300</span>
                  <span>{formatBytes(size)} KB (Optimized 100% Quality)</span>

                  <IKVideo
                    onClick={() => navigator.clipboard.writeText(url)}
                    className="border cursor-copy"
                    src={url}
                    draggable
                    transformation={[
                      {
                        width: "500",
                        height: "300",
                      },
                    ]}
                  />
                </div>
                <div className="flex flex-col">
                  <div>
                    <div className="flex flex-col">
                      <span>200 x 200</span>
                      <span>{formatBytes(size)} KB (Thumbnail)</span>
                    </div>
                    <IKVideo
                      onClick={() => navigator.clipboard.writeText(url)}
                      className="border cursor-copy"
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
      )}
    </div>
  );
};

export default IKMedia;
