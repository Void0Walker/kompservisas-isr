import Head from "next/head";
import { memo } from "react";
import { PageNames, ProductEntryWithLink } from "@/src/helpers/types";
import { STATIC_METADATA, notFoundImage } from "@/src/metaData";
import { useRouter } from "next/router";
import { Locales } from "@/utils/locales";

const metaBannerDefault = {
  dimensions: {
    height: "628",
    width: "1200",
  },
  src: "https://res.cloudinary.com/kalandarisvili-dev/image/upload/v1700908309/kompservisas-banners/facebook-banner-leptops.png",
};

const metaBannerRepair = {
  dimensions: {
    height: "628",
    width: "1200",
  },
  src: "https://res.cloudinary.com/kalandarisvili-dev/image/upload/v1700908309/kompservisas-banners/facebook-banner-repair.png",
};

const PageHead = memo(function PageHead({
  name,
  isProductPage,
  product,
}: {
  name: PageNames;
  isProductPage: boolean;
  product?: ProductEntryWithLink;
}) {
  const { locale } = useRouter();

  const currentLocale = (locale ?? Locales.LT) as Locales;

  const { keywords, metaDescription: description, metaName: title, path } = STATIC_METADATA[currentLocale][name];

  const {
    src,
    dimensions: { height, width },
  } = name === "Remontas" ? metaBannerRepair : metaBannerDefault;

  if (isProductPage) {
    return (
      <Head key={name}>
        <title>{product?.Product_Name ?? ""}</title>
        <meta property="og:title" content={product?.Product_Name ?? ""} key="title" />
        <meta property="og:type" content="og:product" />
        <meta property="og:image" content={product?.Image.data[0].attributes?.url ?? notFoundImage} />
        <meta property="og:description" content={product?.Product_Description ?? ""} />
        <meta property="og:url" content={`https://kompservisas.lt/${product?.link ?? ""}`} />
        <meta property="product:price.amount" content={`${product?.Price.toFixed()}.00`} />
        <meta name="description" content={product?.Product_Description ?? ""} />
        <meta property="product:price.currency" content="EUR" />
      </Head>
    );
  }

  return (
    <Head key={name}>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={src} />
      <meta property="og:image:width" content={width} />
      <meta property="og:image:height" content={height} />
      <meta property="og:url" content={`https://kompservisas.lt${path}`} />
      <meta property="og:site_name" content="kompservisas" />
      <meta property="og:type" content="website" />
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://kompservisas.lt${path}`} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
});

export default PageHead;
