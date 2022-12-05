import { IKImage, IKVideo } from "imagekitio-react";
import { formatBytes } from "../../../utils/conversions";

interface IKMediaProps {
  imageFilePath: object[];
  videoFilePath: object[];
}

const IKMedia: React.FC<IKMediaProps> = ({ imageFilePath, videoFilePath }) => {
  return (
    <div className="text-white  flex flex-col gap-4">
      {imageFilePath.length !== 0 && (
        <h2 className=" text-center font-prompt font-semibold ">Images</h2>
      )}
      <div className="flex-1 flex flex-col gap-10 p-2 max-h-[1000px] overflow-y-auto   ">
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
                  className=" border cursor-grabbing"
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
    </div>
  );
};

export default IKMedia;
