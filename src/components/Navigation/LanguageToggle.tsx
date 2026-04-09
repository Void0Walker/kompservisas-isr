import { useEffect, useState } from "react";
import { ListItemIcon, ListItemText, MenuItem, SvgIcon, SxProps } from "@mui/material";
import FlagLT from "@/src/components/Navigation/LTFlagSvg";
import FlagUK from "@/src/components/Navigation/UKFlagSvg";
import { Locales } from "@/utils/locales";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { head } from "lodash-es";
import { ValidPathsDynamicEN, validPathsLT, validPathsEN, ValidPathsDynamicLT } from "@/src/helpers/constants";

const replaceDynamicSlug = (slug: string, locale: Locales) => {
  if (locale === Locales.LT) {
    switch (slug) {
      case "preke":
        return "product";
      case "monitorius":
        return "monitor";
      case "nesiojamas":
        return "laptop";
      case "stacionarus":
        return "desktop";
      default:
        return slug;
    }
  }

  switch (slug) {
    case "product":
      return "preke";
    case "monitor":
      return "monitorius";
    case "laptop":
      return "nesiojamas";
    case "desktop":
      return "stacionarus";
    default:
      return slug;
  }
};

const LanguageToggler = ({ sx }: { sx?: SxProps }) => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const { locale: currentLocale, defaultLocale, pathname } = router;

  const [selectedLanguage, setSelectedLanguage] = useState<Locales>(
    (currentLocale as Locales | undefined) ?? (defaultLocale as Locales.LT)
  );

  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      const newLanguage = url.startsWith("/en") ? Locales.EN : Locales.LT;
      i18n.changeLanguage(newLanguage);
      setSelectedLanguage(newLanguage);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events, i18n]);

  const handleClick = () => {
    const localeUpdate = selectedLanguage === Locales.EN ? Locales.LT : Locales.EN;

    if (pathname in validPathsLT) {
      router.push(validPathsLT[pathname as keyof typeof validPathsLT], undefined, {
        locale: localeUpdate,
        scroll: true,
      });
      return;
    }

    if (pathname in validPathsEN) {
      router.push(validPathsEN[pathname as keyof typeof validPathsEN], undefined, {
        locale: localeUpdate,
        scroll: true,
      });
      return;
    }

    if (pathname in ValidPathsDynamicLT) {
      const dynamicPath = ValidPathsDynamicLT[pathname as keyof typeof ValidPathsDynamicLT];

      const slug = head(Object.keys(router.query));

      if (!slug) {
        return;
      }

      const transformedSlug = replaceDynamicSlug(slug, currentLocale as Locales);

      router.push(
        {
          pathname: dynamicPath,
          query: { [transformedSlug]: router.query[slug] },
        },
        undefined,
        {
          locale: localeUpdate,
          scroll: true,
        }
      );
      return;
    }

    if (pathname in ValidPathsDynamicEN) {
      const dynamicPath = ValidPathsDynamicEN[pathname as keyof typeof ValidPathsDynamicEN];

      const slug = head(Object.keys(router.query));

      if (!slug || !currentLocale) {
        return;
      }

      const transformedSlug = replaceDynamicSlug(slug, currentLocale as Locales);

      router.push(
        {
          pathname: dynamicPath,
          query: { [transformedSlug]: router.query[slug] },
        },
        undefined,
        {
          locale: localeUpdate,
          scroll: true,
        }
      );
      return;
    }

    router.push(pathname, undefined, { locale: localeUpdate, scroll: true });
  };

  return (
    <MenuItem onClick={handleClick} sx={sx}>
      <ListItemIcon>
        <SvgIcon component={selectedLanguage === Locales.LT ? FlagUK : FlagLT} />
      </ListItemIcon>
      <ListItemText>{selectedLanguage === Locales.EN ? "Lietuvių" : "English"}&nbsp;</ListItemText>
    </MenuItem>
  );
};

export default LanguageToggler;
