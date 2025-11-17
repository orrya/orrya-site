import { siteMeta } from "../seo.config";

export default function Head() {
  const { siteUrl, product } = siteMeta;

  return (
    <>
      <title>Join the Echo Waitlist</title>
      <meta
        name="description"
        content="Join the early access waitlist for Echo — quiet AI for high-signal work."
      />
      <link rel="canonical" href={`${siteUrl}/waitlist`} />
    </>
  );
}
