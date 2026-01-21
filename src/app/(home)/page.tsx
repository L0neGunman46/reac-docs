// &nbsp; is unicode for whitespace

"use client";

import { Navbar } from "./navbar";
import { TemplatesGallery } from "./components/templates-gallery";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

function Page() {
  const documents = useQuery(api.documents.get) || [];

  if (documents === undefined) {
    return <p>Loading .... </p>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        {documents?.map((document) => (
          <span key={document._id}>{document.title}</span>
        ))}
      </div>
    </div>
  );
}

export default Page;
