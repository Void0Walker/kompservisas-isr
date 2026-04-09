import "i18next";

import Resources from "@/@types/resources.ts";

declare module "i18next" {
  // eslint-disable-next-line no-unused-vars
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: Resources;
  }
}
