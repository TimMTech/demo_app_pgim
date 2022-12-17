import DOMPurify from "dompurify";

interface ContentPreviewProps {
  editorContent: string;
  languageSwitcher: any;
  activeLanguage: string;
  originalContentView: boolean;
  mediaView: { [key: string]: string };
}

const ContentPreview: React.FC<ContentPreviewProps> = ({
  editorContent,
  languageSwitcher,
  activeLanguage,
  originalContentView,
  mediaView,
}) => {
  return (
    <>
      {!originalContentView ? (
        <div
          className={`${mediaView.width} bg-white p-4 h-[1200px] my-body my-header my-table my-thead my-tr my-tbody my-td my-th my-links my-ul`}
          dangerouslySetInnerHTML={{
            __html: languageSwitcher
              .filter((languages: any) => languages.label === activeLanguage)
              .map(({ value }: any) =>
                DOMPurify.sanitize(value, {
                  FORCE_BODY: true,
                })
              ),
          }}
        />
      ) : (
        <body
          className={`${mediaView.width} bg-white p-4 h-[1200px] my-body my-header my-table my-thead my-tr my-tbody my-td my-th my-links my-ul`}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(editorContent, {
              FORCE_BODY: true,
            }),
          }}
        />
      )}
    </>
  );
};

export default ContentPreview;