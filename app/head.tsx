import { siteMeta } from "./seo.config";

export default function Head() {
  const { siteUrl, name, tagline, description, twitterHandle, themeColor } =
    siteMeta;

  return (
    <>
      {/* Primary */}
      <title>{`${name} · ${tagline}`}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={siteUrl} />

      {/* OpenGraph */}
      <meta property="og:title" content={`${name} · ${tagline}`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteUrl}/og/home-og.png`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${name} · ${tagline}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og/home-og.png`} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Theme */}
      <meta name="theme-color" content={themeColor} />

      {/* JSON-LD — Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: name,
            url: siteUrl,
            logo: `${siteUrl}/logo.png`,
            description: description,
            sameAs: [
              "https://twitter.com/orrya",
              "https://linkedin.com/company/orrya",
            ],
          }),
        }}
      />
    </>
  );
}
