import { auth } from "@clerk/nextjs/server";
import { preloadQuery } from "convex/nextjs";

import { Id } from "../../../../convex/_generated/dataModel";
import { DocumentPage } from "./document";
import { api } from "../../../../convex/_generated/api";

type DocumentIdPageProps = {
  params: Promise<{ documentId: Id<"documents"> }>;
};

async function DocumentIdPage({ params }: DocumentIdPageProps) {
  const { documentId } = await params;

  const { getToken } = await auth();
  const token = (await getToken({ template: "convex" })) ?? undefined;

  if (!token) {
    throw new Error("UnAuthorised");
  }

  const preloadedDocument = await preloadQuery(
    api.documents.getById,
    { id: documentId },
    { token },
  );

  if (!preloadedDocument) {
    throw new Error("Document Not found!");
  }
  return <DocumentPage preloadedDocument={preloadedDocument} />;
}

export default DocumentIdPage;
