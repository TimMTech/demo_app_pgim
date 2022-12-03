import { ChangeEvent, FormEvent } from "react";

interface UserProps {
  generalContent: { [key: string]: any };
  handleGeneralContentSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleGeneralContentChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const User: React.FC<UserProps> = ({
  generalContent,
  handleGeneralContentSubmit,
  handleGeneralContentChange,
}) => {
  return (
    <div>
      <form
        action="POST"
        className="text-white font-prompt h-full w-full flex flex-col"
        onSubmit={handleGeneralContentSubmit}
      >
        <div className="w-full h-full">
          <div className="p-2 flex flex-col gap-2">
            <div className="flex flex-col ">
              <label htmlFor="title">Title</label>
              <input
                value={generalContent.data.title}
                className="bg-[#2c3139] outline-none p-1"
                type="text"
                id="title"
                onChange={handleGeneralContentChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="author">Author</label>
              <input
                value={generalContent.data.author}
                className="bg-[#2c3139] outline-none  p-1"
                type="text"
                id="author"
                onChange={handleGeneralContentChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description">Description</label>
              <textarea
                value={generalContent.data.description}
                className="bg-[#2c3139] outline-none h-[200px] min-h-[200px] max-h-[200px] resize-none  p-1"
                typeof="text"
                id="description"
                onChange={handleGeneralContentChange}
              />
            </div>
            <button type="submit" className="p-1 bg-[#2c3139] ">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default User;
