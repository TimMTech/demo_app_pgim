import Main from "./components/Main/Main";
import RightPanel from "./components/RightPanel/RightPanel";
import Navbar from "./components/Navbar";
import LeftPanel from "./components/LeftPanel";
import { useState, ChangeEvent } from "react";

import { Predictions } from "@aws-amplify/predictions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeviceBar from "./components/Main/DeviceBar";

const App: React.FC = () => {
  const [step, setStep] = useState(1);

  const [deviceView, setDeviceView] = useState<boolean>(false);

  const [editorContent, setEditorContent] = useState<string>("");
  const [translatedContent, setTranslatedContent] = useState<string>("");

  const [strapiPOST, setStrapiPOST] = useState<{ [key: string]: any }>({
    data: {
      title: "",
      author: "",
      description: "",
      editor_content: "",
      translated_content: "",
    },
  });

  const [selectedLanguages, setSelectedLanguages] = useState<[]>([]);
  const [activeLanguage, setActiveLanguage] = useState<string>("");
  const [recentTranslations, setRecentTranslations] = useState<{}[]>([]);

  const [imageFilePath, setImageFilePath] = useState<object[]>([]);
  const [videoFilePath, setVideoFilePath] = useState<object[]>([]);

  const [preview, setPreview] = useState<boolean>(false);

  const handleDeviceView = () => {
    setDeviceView(!deviceView);
  };

  const handlePreviewMode = () => {
    setPreview(!preview);
  };

  const handleGeneralContentChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    setStrapiPOST((prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        [id]: value,
      },
    }));
  };

  const handleStrapiSubmit = async () => {
    await fetch("http://localhost:1337/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(strapiPOST),
    })
      .then((response) => {
        if (!response.ok) {
          toast.error("We Need Content :(");
        } else {
          toast.success("Published!");
        }
        return response.json();
      })
      .catch((error) => {
        console.log(error);
        toast.error("We Need Content :(");
      });
  };

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
    setStrapiPOST((prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        editor_content: content,
      },
    }));
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
        setRecentTranslations((prevState) =>
          prevState.some(
            (languages: any) => languages.language === response.language
          )
            ? prevState
            : [...prevState, response]
        );
        setStrapiPOST((prevState) => ({
          ...prevState,
          data: {
            ...prevState.data,
            translated_content: response.text,
          },
        }));
        toast.success(`Translated in ${language}`);
      })
      .catch((error) => {
        toast.error("Editor Cannot Be Empty.");
        console.log("error", error);
      });
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
        toast.success("Image Uploaded!");
        return response.blob();
      })
      .then((blob) => {
        setImageFilePath((prevState) => [...prevState, { ...response, blob }]);
      })
      .catch((error) => {
        toast.error("Image Upload Failed :(");
        console.log("error", error);
      });
  };

  const handleImageOnError = (response: any) => {
    toast.error("Image Upload Failed :(");
    console.log("error", response);
  };

  const handleVideoOnSuccess = (response: any) => {
    setVideoFilePath((prevState) => [...prevState, response]);
  };

  const handleVideoOnError = (response: any) => {
    console.log("error", response);
  };

  return (
    <div className="absolute z-[1] top-0 bottom-0 left-0 right-0 ">
      <ToastContainer
        theme="dark"
        toastStyle={{
          backgroundColor: "#22262e",
        }}
      />
      <Navbar
        preview={preview}
        handlePreviewMode={handlePreviewMode}
        handleStrapiSubmit={handleStrapiSubmit}
      />
      <DeviceBar deviceView={deviceView} handleDeviceView={handleDeviceView} />
      <div className="flex w-full h-full ">
        <LeftPanel preview={preview} />
        <Main
          editorContent={editorContent}
          translatedContent={translatedContent}
          deviceView={deviceView}
          handleEditorChange={handleEditorChange}
        />
        <RightPanel
          step={step}
          preview={preview}
          strapiPOST={strapiPOST}
          imageFilePath={imageFilePath}
          videoFilePath={videoFilePath}
          selectedLanguages={selectedLanguages}
          activeLanguage={activeLanguage}
          recentTranslations={recentTranslations}
          handleGeneralContentChange={handleGeneralContentChange}
          handleEditorTranslate={handleEditorTranslate}
          handleMultiSelect={handleMultiSelect}
          handleImageOnSuccess={handleImageOnSuccess}
          handleImageOnError={handleImageOnError}
          handleVideoOnSuccess={handleVideoOnSuccess}
          handleVideoOnError={handleVideoOnError}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      </div>
    </div>
  );
};

export default App;
