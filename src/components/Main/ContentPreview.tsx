import DOMPurify from "dompurify";

interface ContentPreviewProps {
  editorContent: string;
  translatedContent: { [key: string]: string };
  activeLanguage: string;
  originalContentView: boolean;
  mediaView: { [key: string]: string };
}

const ContentPreview: React.FC<ContentPreviewProps> = ({
  editorContent,
  translatedContent,
  activeLanguage,
  originalContentView,
  mediaView,
}) => {
  return (
    <>
      {!originalContentView ? (
        <div className={`${mediaView.width}`}>
          <div
            className={`content bg-white w-full h-full  my-body my-header my-table my-thead my-tr my-tbody my-td my-th my-links my-ul`}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(translatedContent[activeLanguage]),
            }}
          />
        </div>
      ) : (
        <div className={`${mediaView.width}`}>
          <div
            className={`content bg-white h-full w-full my-body my-header my-table my-thead my-tr my-tbody my-td my-th my-links my-ul`}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(editorContent, {
                FORCE_BODY: true,
                ADD_TAGS: ["iframe"],
              }),
            }}
          />
        </div>
      )}
    </>
  );
};

export default ContentPreview;
