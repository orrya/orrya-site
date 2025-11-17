import { siteMeta } from "../seo.config";

export default function Head() {
  const { siteUrl, product, description, themeColor } = siteMeta;

  const title = `${product} · Quiet AI for high-signal work`;
  const url = `${siteUrl}/echo`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={url} />

      {/* OG */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="product" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${siteUrl}/og/echo-og.png`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og/echo-og.png`} />

      <meta name="theme-color" content={themeColor} />

      {/* JSON-LD — SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: product,
            applicationCategory: "Productivity",
            operatingSystem: "All",
            description: description,
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            url: url,
            image: `${siteUrl}/og/echo-og.png`,
          }),
        }}
      />
    </>
  );
}
