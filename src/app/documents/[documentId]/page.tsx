//to fetch the id you can create an interface
import { Editor } from "./editor";
interface DocumentIDPage {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIDPage) => {
  // const documentId = (await (params)).documentId;
  // const awaitedParams = params;
  // const documentId = awaitedParams.documentId;
  const { documentId } = await params;

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
