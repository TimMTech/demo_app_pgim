import { IKImage, IKVideo } from "imagekitio-react";

interface IKMediaProps {
  imageFilePath: object[];
  videoFilePath: object[];
}

const IKMedia: React.FC<IKMediaProps> = ({ imageFilePath, videoFilePath }) => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex-1 max-h-[600px] overflow-y-auto ">
        {imageFilePath.length !== 0 && (
          <h2 className="text-center font-prompt font-semibold text-lg p-3">
            Images
          </h2>
        )}
        {imageFilePath.map((image: any, index: number) => {
          const { fileId, filePath, fileType, size, thumbnailUrl, url } = image;
          return (
            <div key={index}>
              <IKImage src={url} draggable />
              <div className="flex">
                <IKImage src={thumbnailUrl} draggable />
                <IKImage src={url} draggable />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex-1 max-h-[600px]  overflow-y-auto ">
        {videoFilePath.length !== 0 && (
          <h2 className="text-center font-prompt font-semibold text-lg p-3">
            Videos
          </h2>
        )}
        {videoFilePath.map((video: any, index: number) => {
          const { fileId, filePath, fileType, size, thumbnailUrl, url } = video;
          return (
            <div key={index}>
              <IKVideo src={url} draggable controls />
              <div className="flex">
                <IKVideo src={thumbnailUrl} draggable controls />
                <IKVideo src={url} draggable controls />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IKMedia;
