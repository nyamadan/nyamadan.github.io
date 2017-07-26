export default function normalizeUrl(url: string) {
  return url
    .replace(/\?.*$/, "")
    .replace(/#.*$/, "")
    .replace(/\.html?$/, "")
    .replace(/\/index$/, "")
    .replace(/\/$/, "");
}
