import React from "react";
import { Helmet } from "react-helmet";

const Meta: React.FC<{ title?: string, keyword?: string, description?: string }>=({ title, keyword, description })=> {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keyword" content={keyword} />
      <meta name="description" content={description} />
    </Helmet>
  );
}


Meta.defaultProps = {
  title: "",
  keyword: "",
  description: "",
};
