/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "lt",
    localeDetection: false,
    locales: ["lt", "en"],
  },
  defaultNS: "common",
  react: {
    useSuspense: false,
  },
};
