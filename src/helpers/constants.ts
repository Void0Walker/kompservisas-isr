export const validPathsLT = {
  "/apie-mus": "/about-us",
  "/kitos-prekes": "/other-products",
  "/kontaktai": "/contacts",
  "/krepselis": "/shopping-cart",
  "/monitoriai": "/monitors",
  "/nesiojami": "/laptops",
  "/remontas": "/repair",
  "/stacionarus": "/desktops",
  "/supirkimas": "/buyback",
  "/uzsakymas": "/order",
} as const;

export const ValidPathsDynamicLT = {
  "/kitos-prekes/[preke]": "/other-products/[product]",
  "/monitoriai/[monitorius]": "/monitors/[monitor]",
  "/nesiojami/[nesiojamas]": "/laptops/[laptop]",
  "/stacionarus/[stacionarus]": "/desktops/[desktop]",
  "/uzsakymas/[uzsakymas]": "/order/[order]",
} as const;

export const validPathsEN = {
  "/about-us": "/apie-mus",
  "/buyback": "/supirkimas",
  "/contacts": "/kontaktai",
  "/desktops": "/stacionarus",
  "/laptops": "/nesiojami",
  "/monitors": "/monitoriai",
  "/order": "/uzsakymas",
  "/other-products": "/kitos-prekes",
  "/repair": "/remontas",
  "/shopping-cart": "/krepselis",
} as const;

export const ValidPathsDynamicEN = {
  "/desktops/[desktop]": "/stacionarus/[stacionarus]",
  "/laptops/[laptop]": "/nesiojami/[nesiojamas]",
  "/monitors/[monitor]": "/monitoriai/[monitorius]",
  "/order/[order]": "/uzsakymas/[uzsakymas]",
  "/other-products/[product]": "/kitos-prekes/[preke]",
} as const;
