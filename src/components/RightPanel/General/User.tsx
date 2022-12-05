import { ChangeEvent } from "react";
import Styles from "./Styles";

interface UserProps {
  strapiPOST: { [key: string]: any };


  handleGeneralContentChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const User: React.FC<UserProps> = ({
  strapiPOST,

  handleGeneralContentChange,
}) => {
  return (
    <div className="text-white font-prompt h-full w-full flex flex-col">
      <div className="w-full h-full">
        <div className="p-2 flex flex-col gap-2">
          <div className="flex flex-col ">
            <label htmlFor="title">Title</label>
            <input
              value={strapiPOST.data.title}
              className="bg-[#2c3139] outline-none p-1"
              type="text"
              id="title"
              onChange={handleGeneralContentChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="author">Author</label>
            <input
              value={strapiPOST.data.author}
              className="bg-[#2c3139] outline-none  p-1"
              type="text"
              id="author"
              onChange={handleGeneralContentChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              value={strapiPOST.data.description}
              className="bg-[#2c3139] outline-none h-[200px] min-h-[200px] max-h-[200px] resize-none  p-1"
              typeof="text"
              id="description"
              onChange={handleGeneralContentChange}
            />
          </div>
        
         
        </div>
      </div>
    </div>
  );
};
export default User;
