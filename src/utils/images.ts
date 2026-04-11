export function toThumbnail(src?: string) {
  if (!src) return src;

  if (!src.startsWith("/images/photos/")) {
    return src;
  }

  return src.replace("/images/photos/", "/images/thumbs/");
}
