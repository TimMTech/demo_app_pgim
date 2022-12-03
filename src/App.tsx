import Main from "./components/Main/Main";
import RightPanel from "./components/RightPanel/RightPanel";
import Navbar from "./components/Navbar";
import LeftPanel from "./components/LeftPanel";
import { useState, ChangeEvent, FormEvent } from "react";

import { Predictions } from "@aws-amplify/predictions";
import { example } from "./utils/exampleContent";
import DeviceBar from "./components/Main/DeviceBar";
import { AiFillLeftSquare, AiFillRightSquare } from "react-icons/ai";

const App: React.FC = () => {
  const [step, setStep] = useState(1);

  const [deviceView, setDeviceView] = useState<boolean>(false);

  const [generalContent, setGeneralContent] = useState<{ [key: string]: any }>({
    data: {
      title: "",
      author: "",
      description: "",
    },
  });
  const [editorContent, setEditorContent] = useState<string>("");
  const [translatedContent, setTranslatedContent] = useState<string>("");

  const [demoContent, setDemoContent] = useState<any>(example);

  const [selectedLanguages, setSelectedLanguages] = useState<[]>([]);
  const [activeLanguage, setActiveLanguage] = useState<string>("");

  const [imageFilePath, setImageFilePath] = useState<object[]>([]);
  const [videoFilePath, setVideoFilePath] = useState<object[]>([]);

  const [closeLeftPanel, setCloseLeftPanel] = useState<boolean>(false);
  const [closeRightPanel, setCloseRightPanel] = useState<boolean>(false);

  const handleDeviceView = () => {
    setDeviceView(!deviceView);
  };

  const handleGeneralContentChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setGeneralContent((prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        [id]: value,
      },
    }));
  };
 
  const handleGeneralContentSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("http://localhost:1337/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(generalContent),
    })
      .then((response) => {
        if (!response.ok) console.log("error");
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  const handleDemoChange = (content: string) => {
    setDemoContent(content);
  };

  const handleEditorTranslate = async (language: string) => {
    setActiveLanguage(language);
    Predictions.convert({
      translateText: {
        source: {
          text: editorContent,
        },
        targetLanguage: language,
      },
    })
      .then((response) => {
        setTranslatedContent(response.text);
      })
      .catch((error) => console.log(error));
  };

  const handleMultiSelect = (value: any) => {
    setSelectedLanguages(value);
  };

  const handleNextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevState) => prevState - 1);
  };

  const handleImageOnSuccess = async (response: any) => {
    await fetch(response.thumbnailUrl)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        setImageFilePath((prevState) => [...prevState, { ...response, blob }]);
      });
  };

  const handleImageOnError = (response: any) => {
    console.log("error", response);
  };

  const handleVideoOnSuccess = (response: any) => {
    setVideoFilePath((prevState) => [...prevState, response]);
  };

  const handleVideoOnError = (response: any) => {
    console.log("error", response);
  };

  const handleCloseLeftPanel = () => {
    setCloseLeftPanel(!closeLeftPanel);
  };

  const handleCloseRightPanel = () => {
    setCloseRightPanel(!closeRightPanel);
  };

  return (
    <div className="absolute z-[1] top-0 bottom-0 left-0 right-0 ">
      <Navbar
        step={step}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      />
      <DeviceBar deviceView={deviceView} handleDeviceView={handleDeviceView} />
      <div className="flex w-full h-full relative">
        <LeftPanel closeLeftPanel={closeLeftPanel} />
        <Main
          step={step}
          editorContent={editorContent}
          translatedContent={translatedContent}
          demoContent={demoContent}
          deviceView={deviceView}
          handleDemoChange={handleDemoChange}
          handleEditorChange={handleEditorChange}
        />
        <RightPanel
          closeRightPanel={closeRightPanel}
          step={step}
          generalContent={generalContent}
          imageFilePath={imageFilePath}
          videoFilePath={videoFilePath}
          selectedLanguages={selectedLanguages}
          activeLanguage={activeLanguage}
          handleGeneralContentChange={handleGeneralContentChange}
          handleGeneralContentSubmit={handleGeneralContentSubmit}
          handleEditorTranslate={handleEditorTranslate}
          handleMultiSelect={handleMultiSelect}
          handleImageOnSuccess={handleImageOnSuccess}
          handleImageOnError={handleImageOnError}
          handleVideoOnSuccess={handleVideoOnSuccess}
          handleVideoOnError={handleVideoOnError}
        />
      </div>
      <div
        className={`${
          closeLeftPanel && "left-[1px]"
        }  absolute bottom-0 top-0 left-[150px] z-[1000] flex items-center justify-center`}
      >
        {closeLeftPanel ? (
          <AiFillRightSquare
            className="bg-black text-white"
            size={40}
            onClick={handleCloseLeftPanel}
          />
        ) : (
          <AiFillLeftSquare
            className="bg-black text-white"
            size={40}
            onClick={handleCloseLeftPanel}
          />
        )}
      </div>
      <div
        className={`${
          closeRightPanel && "right-[1px]"
        }  absolute bottom-0 top-0 right-[275px] z-[1000] flex items-center justify-center`}
      >
        {closeRightPanel ? (
          <AiFillLeftSquare
            className="bg-black text-white"
            size={40}
            onClick={handleCloseRightPanel}
          />
        ) : (
          <AiFillRightSquare
            className="bg-black text-white"
            size={40}
            onClick={handleCloseRightPanel}
          />
        )}
      </div>
    </div>
  );
};

export default App;
