import React from "react";
import MetaTags from "react-meta-tags";
import { JsonLd } from "react-schemaorg";

const MetaComponent = ({ jsonLd, description, title }) => {
  return (
    <div>
      <MetaTags>
        <meta property="og:type" content="website" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content={"content"} />
        {jsonLd && <JsonLd data={jsonLd} />}
      </MetaTags>
    </div>
  );
};

export default MetaComponent;
