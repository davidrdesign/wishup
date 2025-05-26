import { Helmet } from "react-helmet";

export default function MetaSEO({
  title = "WishUp – Celebrate Together",
  description = "Create colorful, collaborative birthday cards with friends and family.",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/og-wishup.jpg" />
      <meta property="og:url" content="https://wishup.app" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/og-wishup.jpg" />
    </Helmet>
  );
}