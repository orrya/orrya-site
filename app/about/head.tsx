import { siteMeta } from "../seo.config";

export default function Head() {
  const { siteUrl, name, tagline } = siteMeta;

  const title = `About · ${name}`;
  const desc = `${name} builds quiet, spatial AI for leaders who think deeply.`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={`${siteUrl}/about`} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={`${siteUrl}/og/about-og.png`} />
    </>
  );
}
