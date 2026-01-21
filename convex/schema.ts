import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  documents: defineTable({
    title: v.string(),
    initialContent: v.optional(v.string()),
    ownerId: v.string(),
    roomId: v.optional(v.string()),
    organization_Id: v.optional(v.string()),
  })
    .index("by_owner_id", ["ownerId"])
    .index("by_ordanization_id", ["organization_Id"])
    .searchIndex("search_title", {
      searchField: "title",
      filterFields: ["ownerId", "organization_Id"],
    }),
});
