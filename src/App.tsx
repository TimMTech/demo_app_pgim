import Main from "./components/Main/Main";
import RightPanel from "./components/RightPanel/RightPanel";
import Navbar from "./components/Navbar";
import LeftPanel from "./components/LeftPanel";
import { useState, ChangeEvent } from "react";
import { example } from "./utils/exampleContent";
import { Predictions } from "@aws-amplify/predictions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeviceBar from "./components/Main/DeviceBar";
import { languages } from "./utils/languages";

const App: React.FC = () => {
  const [step, setStep] = useState(1);

  const [deviceView, setDeviceView] = useState<boolean>(false);
  const [translationView, setTranslationView] = useState<boolean>(false);

  const [editorContent, setEditorContent] = useState<string>(example);
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

  const [selectedLanguages, setSelectedLanguages] = useState<[] | any>([]);
  const [sourceLanguages, setSourceLanguages] = useState<{
    [key: string]: string;
  }>({
    label: "en",
    value: "en",
  });

  const [activeLanguage, setActiveLanguage] = useState<string>("");
  const [recentTranslations, setRecentTranslations] = useState<{}[]>([]);

  const [imageFilePath, setImageFilePath] = useState<object[]>([]);
  const [videoFilePath, setVideoFilePath] = useState<object[]>([]);
  const [mediaTypeDisplay, setMediaTypeDisplay] = useState<boolean>(true);
  const [preview, setPreview] = useState<boolean>(false);

  const handleDeviceView = () => {
    setDeviceView(!deviceView);
  };

  const handleTranslationView = () => {
    if (!translatedContent) return;
    setTranslationView(!translationView);
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
    if (
      Object.values(strapiPOST.data).some(
        (value) => value === "" || value === null
      )
    ) {
      toast.error("We Need Content :(");
      return;
    }
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
          language: sourceLanguages.label,
        },
        targetLanguage: language,
      },
    })
      .then((response) => {
        setTranslationView(true);
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

  const handleSourceSelect = (value: any) => {
    setSourceLanguages(value);
  };

  const handleTranslationSelect = (value: any) => {
    const selectAll = {
      label: "Select All",
      value: "*",
    };
    if (
      value !== null &&
      value.length > 0 &&
      value[value.length - 1].label === selectAll.label
    ) {
      setSelectedLanguages(languages);
    } else {
      setSelectedLanguages(value);
    }
  };

  const handleNextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevState) => prevState - 1);
  };

  const handleMediaTypeDisplay = () => {
    setMediaTypeDisplay(!mediaTypeDisplay);
  };

  const handleImageOnSuccess = async (response: any) => {
    await fetch(response.thumbnailUrl)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        setMediaTypeDisplay(true);
        setImageFilePath((prevState) => [...prevState, { ...response, blob }]);
        toast.success("Images Uploaded!");
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

  const handleVideoOnSuccess = async (response: any) => {
    await fetch(response)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        setMediaTypeDisplay(false);
        setVideoFilePath((prevState) => [...prevState, { ...response, blob }]);
        toast.success("Videos Uploaded!");
      })
      .catch((error) => {
        toast.error("Video Upload Failed :(");
        console.log("error", error);
      });
  };

  const handleVideoOnError = (response: any) => {
    toast.error("Video Upload Failed :(");
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
      <DeviceBar
        translationView={translationView}
        translatedContent={translatedContent}
        handleDeviceView={handleDeviceView}
        handleTranslationView={handleTranslationView}
        handleSourceSelect={handleSourceSelect}
      />
      <div className="flex w-full h-full ">
        <LeftPanel preview={preview} />
        <Main
          deviceView={deviceView}
          editorContent={editorContent}
          translatedContent={translatedContent}
          translationView={translationView}
          handleEditorChange={handleEditorChange}
        />
        <RightPanel
          step={step}
          preview={preview}
          strapiPOST={strapiPOST}
          imageFilePath={imageFilePath}
          videoFilePath={videoFilePath}
          mediaTypeDisplay={mediaTypeDisplay}
          selectedLanguages={selectedLanguages}
          activeLanguage={activeLanguage}
          sourceLanguages={sourceLanguages}
          recentTranslations={recentTranslations}
          handleGeneralContentChange={handleGeneralContentChange}
          handleEditorTranslate={handleEditorTranslate}
          handleTranslationSelect={handleTranslationSelect}
          handleImageOnSuccess={handleImageOnSuccess}
          handleImageOnError={handleImageOnError}
          handleVideoOnSuccess={handleVideoOnSuccess}
          handleVideoOnError={handleVideoOnError}
          handleMediaTypeDisplay={handleMediaTypeDisplay}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      </div>
    </div>
  );
};

export default App;
