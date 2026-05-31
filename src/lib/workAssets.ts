import type { CollectionEntry } from "astro:content";

type ContentEntry = CollectionEntry<"works"> | CollectionEntry<"competitions">;

const localAssets = import.meta.glob("../content/**/*.pdf", {
  eager: true,
  import: "default",
  query: "?url"
}) as Record<string, string>;

export function contentPath(entry: ContentEntry) {
  const filePath = entry.filePath?.replace(/\\/g, "/");

  if (filePath?.startsWith("src/content/")) {
    return filePath.replace(/^src\/content\//, "").replace(/\/index\.md$/, "");
  }

  return entry.id.replace(/\/index(?:\.md)?$/, "");
}

export function resolveWorkHref(entry: ContentEntry, href = "") {
  if (
    href === "" ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("#")
  ) {
    return href;
  }

  if (href.startsWith("./")) {
    const key = `../content/${contentPath(entry)}/${href.slice(2)}`;
    return localAssets[key] ?? href;
  }

  return href;
}

export function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}
