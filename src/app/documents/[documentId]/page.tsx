//to fetch the id you can create an interface
import { Editor } from "./editor";
import { Toolbar } from "./toolbar";
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
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
