// &nbsp; is unicode for whitespace

"use client";

import { Navbar } from "./navbar";
import { TemplatesGallery } from "./components/templates-gallery";
import { usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { DocumentsTable } from "./components/documentsTabls";
import { useSearchParam } from "@/hooks/use-search-param";

function Page() {
  const [search] = useSearchParam("search");

  const { results, status, loadMore } =
    usePaginatedQuery(api.documents.get, { search }, { initialNumItems: 5 }) ||
    [];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </div>
    </div>
  );
}

export default Page;
