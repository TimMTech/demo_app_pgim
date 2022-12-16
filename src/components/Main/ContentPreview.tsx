interface ContentPreviewProps {
  editorContent: string;
  languageSwitcher: any;
  activeLanguage: string;
  originalContentView: boolean;
}

const ContentPreview: React.FC<ContentPreviewProps> = ({
  editorContent,
  languageSwitcher,
  activeLanguage,
  originalContentView,
}) => {
  return (
    <>
      {!originalContentView ? (
        <div
          className="bg-white"
          dangerouslySetInnerHTML={{
            __html: languageSwitcher
              .filter((languages: any) => languages.label === activeLanguage)
              .map(({ value }: any) => value),
          }}
        />
      ) : (
        <div
          className="bg-white"
          dangerouslySetInnerHTML={{
            __html: editorContent,
          }}
        />
      )}
    </>
  );
};

export default ContentPreview;
