import { siteMeta } from "./seo.config";

export default function sitemap() {
  const { siteUrl } = siteMeta;

  return [
    `${siteUrl}`,
    `${siteUrl}/echo`,
    `${siteUrl}/about`,
    `${siteUrl}/waitlist`,
  ].map((url) => ({
    url,
    lastModified: new Date().toISOString(),
  }));
}
