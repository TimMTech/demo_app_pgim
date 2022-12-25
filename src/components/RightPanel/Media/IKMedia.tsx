import { IKImage, IKVideo } from "imagekitio-react";

import { formatBytes } from "../../../utils/conversions";

import classNames from "classnames";
import { useState } from "react";

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
  const [currentImageSize, setCurrentImageSize] = useState<string>("");

  const handleSeeImageSpecs = (src: string) => {
    fetch(src).then((response) =>
      response.blob().then((blob) => setCurrentImageSize(blob.size.toString()))
    );
  };

  return (
    <div className="text-white flex flex-col gap-4">
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
        <div>
          {imageFilePath.length !== 0 && (
            <div className="flex flex-col gap-2 py-6">
              <p className="text-center">
                Drag And Drop Image Into Rich Text Editor To Add Image.
              </p>
              <span className="text-center">
                Image Size :{" "}
                {currentImageSize !== "" && formatBytes(currentImageSize)} KB
              </span>
            </div>
          )}
          <div className="flex flex-col gap-8 max-h-[50vh] p-2 overflow-y-auto">
            {imageFilePath?.map((image: any, index: number) => {
              const { url } = image;

              return (
                <div
                  key={index}
                  className="flex flex-col gap-2 font-prompt text-sm "
                >
                  <div className="flex flex-col ">
                    <span>Optimized</span>
                    <IKImage
                      className="border cursor-grabbing"
                      src={url}
                      lqip={{ quality: 80 }}
                      draggable
                      loading="lazy"
                      onMouseEnter={(event) => {
                        handleSeeImageSpecs(event.currentTarget.currentSrc);
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span>Original</span>
                    <IKImage
                      className="border cursor-grabbing"
                      src={url}
                      draggable
                      loading="lazy"
                      transformation={[
                        {
                          orig: "true",
                        },
                      ]}
                      onMouseEnter={(event) => {
                        handleSeeImageSpecs(event.currentTarget.currentSrc);
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <div className="flex flex-col"></div>
                      <span>Thumbnail</span>
                      <IKImage
                        className="border cursor-grabbing"
                        src={url}
                        lqip={{ quality: 80 }}
                        draggable
                        loading="lazy"
                        transformation={[
                          {
                            width: "100",
                            height: "100",
                          },
                        ]}
                        onMouseEnter={(event) => {
                          handleSeeImageSpecs(event.currentTarget.currentSrc);
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col gap-10 p-2 max-h-[50vh]   overflow-y-auto">
          {videoFilePath.length !== 0 && (
            <p className="text-center">
              Click Video To Copy URL And Paste Into Rich Text Editor's Media
              Upload
            </p>
          )}

          {videoFilePath?.map((video: any, index: number) => {
            const { url } = video;
            return (
              <div
                key={index}
                className="flex flex-col gap-4 font-prompt text-sm "
              >
                <div className="flex flex-col">
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
                    <div className="flex flex-col"></div>
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
