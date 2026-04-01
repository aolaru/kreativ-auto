const AMAZON_AFFILIATE_TAG = "kreativauto-20";

const AMAZON_HOSTS = new Set([
  "amazon.com",
  "www.amazon.com",
  "smile.amazon.com"
]);

export function withAffiliateTag(url: string) {
  try {
    const parsedUrl = new URL(url);

    if (!AMAZON_HOSTS.has(parsedUrl.hostname)) {
      return url;
    }

    parsedUrl.searchParams.set("tag", AMAZON_AFFILIATE_TAG);
    return parsedUrl.toString();
  } catch {
    return url;
  }
}
