//to fetch the id you can create an interface

interface DocumentIDPage {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIDPage) => {
  // const documentId = (await (params)).documentId;
  // const awaitedParams = params;
  // const documentId = awaitedParams.documentId;
  const { documentId } = await params;
  return (
    <div>
      <p>Hello ID is {documentId}</p>
    </div>
  );
};

export default DocumentIdPage;
