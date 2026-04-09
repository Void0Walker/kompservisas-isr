/* eslint-disable no-unused-vars */
import { Item } from "react-use-cart";
import { Enum_Product_Grade, Enum_Product_Type } from "@/api/generated/graphql";
import { ArrayElement } from "@/src/helpers/utilityTypes";
import Resources from "@/@types/resources";

type StringOrStringArray = string | string[];

export type ProductData = Array<
  | {
      __typename?: "Product";
      createdAt?: any | null | undefined;
      Product_Name: string;
      Type: Enum_Product_Type;
      CPU?:
        | {
            __typename?: "CpuEntityResponse";
            data?:
              | {
                  __typename?: "CpuEntity";
                  attributes?: { __typename?: "Cpu"; CPU_Model: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
    }
  | null
  | undefined
>;

export type ManufacturerData = Array<string | undefined>;

export type CPUData = ManufacturerData;

export type DisplaySizeData = ManufacturerData;

export type OtherProductTypeData = ManufacturerData;

export type SSDData = ManufacturerData;

export type FilteredLaptopData = Array<
  | {
      id?: string | null | undefined;
      __typename?: "Product";
      Product_Name: string;
      slug?: string | null | undefined;
      grade?: Enum_Product_Grade | null | undefined;
      Price: number;
      Quantity: number;
      ram?:
        | {
            __typename?: "RamEntityResponse";
            data?:
              | {
                  __typename?: "RamEntity";
                  attributes?: { __typename?: "Ram"; RAM: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      gpu?:
        | {
            __typename?: "GpuEntityResponse";
            data?:
              | {
                  __typename?: "GpuEntity";
                  attributes?: { __typename?: "Gpu"; GPU: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      Image: {
        __typename?: "UploadFileRelationResponseCollection";
        data: Array<{
          __typename?: "UploadFileEntity";
          attributes?:
            | {
                __typename?: "UploadFile";
                url: string;
                formats?: any | null | undefined;
                alternativeText?: string | null | undefined;
              }
            | null
            | undefined;
        }>;
      };
      display_size?:
        | {
            __typename?: "DisplaySizeEntityResponse";
            data?:
              | {
                  __typename?: "DisplaySizeEntity";
                  attributes?: { __typename?: "DisplaySize"; Size: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      CPU?:
        | {
            __typename?: "CpuEntityResponse";
            data?:
              | {
                  __typename?: "CpuEntity";
                  attributes?: { __typename?: "Cpu"; Name: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      storage_ssd?:
        | {
            __typename?: "StorageEntityResponse";
            data?:
              | {
                  __typename?: "StorageEntity";
                  attributes?: { __typename?: "Storage"; Size: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      storage_hdd?:
        | {
            __typename?: "StorageHddEntityResponse";
            data?:
              | {
                  __typename?: "StorageHddEntity";
                  attributes?: { __typename?: "StorageHdd"; Size: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      manufacturer?:
        | {
            __typename?: "ManufacturerEntityResponse";
            data?:
              | {
                  __typename?: "ManufacturerEntity";
                  attributes?: { __typename?: "Manufacturer"; Name: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
    }
  | null
  | undefined
>;

export type FilteredTowerData = Array<
  | {
      id?: string | null | undefined;

      __typename?: "Product";
      Product_Name: string;
      slug?: string | null | undefined;
      grade?: Enum_Product_Grade | null | undefined;
      Price: number;
      Quantity: number;
      ram?:
        | {
            __typename?: "RamEntityResponse";
            data?:
              | {
                  __typename?: "RamEntity";
                  attributes?: { __typename?: "Ram"; RAM: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      gpu?:
        | {
            __typename?: "GpuEntityResponse";
            data?:
              | {
                  __typename?: "GpuEntity";
                  attributes?: { __typename?: "Gpu"; GPU: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      Image: {
        __typename?: "UploadFileRelationResponseCollection";
        data: Array<{
          __typename?: "UploadFileEntity";
          attributes?:
            | {
                __typename?: "UploadFile";
                url: string;
                formats?: any | null | undefined;
                alternativeText?: string | null | undefined;
              }
            | null
            | undefined;
        }>;
      };
      display_size?:
        | {
            __typename?: "DisplaySizeEntityResponse";
            data?:
              | {
                  __typename?: "DisplaySizeEntity";
                  attributes?: { __typename?: "DisplaySize"; Size: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      CPU?:
        | {
            __typename?: "CpuEntityResponse";
            data?:
              | {
                  __typename?: "CpuEntity";
                  attributes?: { __typename?: "Cpu"; Name: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      storage_ssd?:
        | {
            __typename?: "StorageEntityResponse";
            data?:
              | {
                  __typename?: "StorageEntity";
                  attributes?: { __typename?: "Storage"; Size: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      storage_hdd?:
        | {
            __typename?: "StorageHddEntityResponse";
            data?:
              | {
                  __typename?: "StorageHddEntity";
                  attributes?: { __typename?: "StorageHdd"; Size: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      manufacturer?:
        | {
            __typename?: "ManufacturerEntityResponse";
            data?:
              | {
                  __typename?: "ManufacturerEntity";
                  attributes?: { __typename?: "Manufacturer"; Name: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
    }
  | null
  | undefined
>;

export type LaptopData = Array<
  | {
      id?: string | null | undefined;
      __typename?: "Product";
      Product_Name: string;
      Product_Description?: string | null | undefined;
      slug?: string | null | undefined;
      grade?: Enum_Product_Grade | null | undefined;
      Price: number;
      Quantity: number;
      Wifi?: boolean | null | undefined;
      WebCam?: boolean | null | undefined;
      createdAt?: any | null | undefined;
      resolution?:
        | {
            __typename?: "ResolutionEntityResponse";
            data?:
              | {
                  __typename?: "ResolutionEntity";
                  attributes?: { __typename?: "Resolution"; Resolution: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      warranty?:
        | {
            __typename?: "WarrantyEntityResponse";
            data?:
              | {
                  __typename?: "WarrantyEntity";
                  attributes?: { __typename?: "Warranty"; Warranty: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      ram?:
        | {
            __typename?: "RamEntityResponse";
            data?:
              | {
                  __typename?: "RamEntity";
                  attributes?: { __typename?: "Ram"; RAM: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      gpu?:
        | {
            __typename?: "GpuEntityResponse";
            data?:
              | {
                  __typename?: "GpuEntity";
                  attributes?: { __typename?: "Gpu"; GPU: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      Image: {
        __typename?: "UploadFileRelationResponseCollection";
        data: Array<{
          __typename?: "UploadFileEntity";
          attributes?:
            | {
                __typename?: "UploadFile";
                url: string;
                name: string;
                caption?: string | null | undefined;
                width?: number | null | undefined;
                height?: number | null | undefined;
                hash: string;
                formats?: any | null | undefined;
                alternativeText?: string | null | undefined;
              }
            | null
            | undefined;
        }>;
      };
      display_size?:
        | {
            __typename?: "DisplaySizeEntityResponse";
            data?:
              | {
                  __typename?: "DisplaySizeEntity";
                  attributes?: { __typename?: "DisplaySize"; Size: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      CPU?:
        | {
            __typename?: "CpuEntityResponse";
            data?:
              | {
                  __typename?: "CpuEntity";
                  attributes?: { __typename?: "Cpu"; Name: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      storage_ssd?:
        | {
            __typename?: "StorageEntityResponse";
            data?:
              | {
                  __typename?: "StorageEntity";
                  attributes?: { __typename?: "Storage"; Size: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      storage_hdd?:
        | {
            __typename?: "StorageHddEntityResponse";
            data?:
              | {
                  __typename?: "StorageHddEntity";
                  attributes?: { __typename?: "StorageHdd"; Size: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      operating_system?:
        | {
            __typename?: "OperatingSystemEntityResponse";
            data?:
              | {
                  __typename?: "OperatingSystemEntity";
                  attributes?: { __typename?: "OperatingSystem"; Name: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      manufacturer?:
        | {
            __typename?: "ManufacturerEntityResponse";
            data?:
              | {
                  __typename?: "ManufacturerEntity";
                  attributes?: { __typename?: "Manufacturer"; Name: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
    }
  | null
  | undefined
>;

export type TowerData = Array<
  | {
      __typename?: "Product";
      id?: string | null | undefined;
      Product_Name: string;
      Product_Description?: string | null | undefined;
      slug?: string | null | undefined;
      grade?: Enum_Product_Grade | null | undefined;
      Price: number;
      Quantity: number;
      createdAt?: any | null | undefined;
      warranty?:
        | {
            __typename?: "WarrantyEntityResponse";
            data?:
              | {
                  __typename?: "WarrantyEntity";
                  attributes?: { __typename?: "Warranty"; Warranty: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      ram?:
        | {
            __typename?: "RamEntityResponse";
            data?:
              | {
                  __typename?: "RamEntity";
                  attributes?: { __typename?: "Ram"; RAM: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      gpu?:
        | {
            __typename?: "GpuEntityResponse";
            data?:
              | {
                  __typename?: "GpuEntity";
                  attributes?: { __typename?: "Gpu"; GPU: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      Image: {
        __typename?: "UploadFileRelationResponseCollection";
        data: Array<{
          __typename?: "UploadFileEntity";
          attributes?:
            | {
                __typename?: "UploadFile";
                url: string;
                name: string;
                caption?: string | null | undefined;
                width?: number | null | undefined;
                height?: number | null | undefined;
                hash: string;
                formats?: any | null | undefined;
                alternativeText?: string | null | undefined;
              }
            | null
            | undefined;
        }>;
      };
      CPU?:
        | {
            __typename?: "CpuEntityResponse";
            data?:
              | {
                  __typename?: "CpuEntity";
                  attributes?: { __typename?: "Cpu"; Name: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      storage_ssd?:
        | {
            __typename?: "StorageEntityResponse";
            data?:
              | {
                  __typename?: "StorageEntity";
                  attributes?: { __typename?: "Storage"; Size: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      storage_hdd?:
        | {
            __typename?: "StorageHddEntityResponse";
            data?:
              | {
                  __typename?: "StorageHddEntity";
                  attributes?: { __typename?: "StorageHdd"; Size: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      operating_system?:
        | {
            __typename?: "OperatingSystemEntityResponse";
            data?:
              | {
                  __typename?: "OperatingSystemEntity";
                  attributes?: { __typename?: "OperatingSystem"; Name: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      manufacturer?:
        | {
            __typename?: "ManufacturerEntityResponse";
            data?:
              | {
                  __typename?: "ManufacturerEntity";
                  attributes?: { __typename?: "Manufacturer"; Name: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
    }
  | null
  | undefined
>;

export type MonitorData = Array<
  | {
      __typename?: "Product";
      id?: string | null | undefined;
      Product_Description?: string | null | undefined;
      Product_Name: string;
      slug?: string | null | undefined;
      grade?: Enum_Product_Grade | null | undefined;
      Price: number;
      Quantity: number;
      createdAt?: any | null | undefined;
      resolution?:
        | {
            __typename?: "ResolutionEntityResponse";
            data?:
              | {
                  __typename?: "ResolutionEntity";
                  attributes?: { __typename?: "Resolution"; Resolution: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      warranty?:
        | {
            __typename?: "WarrantyEntityResponse";
            data?:
              | {
                  __typename?: "WarrantyEntity";
                  attributes?: { __typename?: "Warranty"; Warranty: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      Image: {
        __typename?: "UploadFileRelationResponseCollection";
        data: Array<{
          __typename?: "UploadFileEntity";
          attributes?:
            | {
                __typename?: "UploadFile";
                url: string;
                name: string;
                caption?: string | null | undefined;
                width?: number | null | undefined;
                height?: number | null | undefined;
                hash: string;
                formats?: any | null | undefined;
                alternativeText?: string | null | undefined;
              }
            | null
            | undefined;
        }>;
      };
      display_size?:
        | {
            __typename?: "DisplaySizeEntityResponse";
            data?:
              | {
                  __typename?: "DisplaySizeEntity";
                  attributes?: { __typename?: "DisplaySize"; Size: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      manufacturer?:
        | {
            __typename?: "ManufacturerEntityResponse";
            data?:
              | {
                  __typename?: "ManufacturerEntity";
                  attributes?: { __typename?: "Manufacturer"; Name: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
    }
  | null
  | undefined
>;

export type OtherProductsData = Array<
  | {
      __typename?: "Product";
      Product_Name: string;
      id?: string | null | undefined;
      Product_Description?: string | null | undefined;
      Other_product_model?: string | null | undefined;
      slug?: string | null | undefined;
      grade?: Enum_Product_Grade | null | undefined;
      Price: number;
      Quantity: number;
      createdAt?: any | null | undefined;
      Image: {
        __typename?: "UploadFileRelationResponseCollection";
        data: Array<{
          __typename?: "UploadFileEntity";
          attributes?:
            | {
                __typename?: "UploadFile";
                url: string;
                name: string;
                caption?: string | null | undefined;
                width?: number | null | undefined;
                height?: number | null | undefined;
                hash: string;
                formats?: any | null | undefined;
                alternativeText?: string | null | undefined;
              }
            | null
            | undefined;
        }>;
      };
      manufacturer?:
        | {
            __typename?: "ManufacturerEntityResponse";
            data?:
              | {
                  __typename?: "ManufacturerEntity";
                  attributes?: { __typename?: "Manufacturer"; Name: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      other_product_type?:
        | {
            __typename?: "OtherProductTypeEntityResponse";
            data?:
              | {
                  __typename?: "OtherProductTypeEntity";
                  attributes?: { __typename?: "OtherProductType"; Type: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      warranty?:
        | {
            __typename?: "WarrantyEntityResponse";
            data?:
              | {
                  __typename?: "WarrantyEntity";
                  attributes?: { __typename?: "Warranty"; Warranty: string } | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
    }
  | null
  | undefined
>;

export type ComputerPageType = {
  manufacturerData?: ManufacturerData;
  cpuData?: CPUData;
  sortOrder?: SortOrder;
  displaySizeData?: DisplaySizeData;
  manufacturerFilters?: ManufacturerFilter;
  ssdData?: SSDData;
  cpuFilters?: CPUFilter;
  ssdFilters?: SSDFilter;
};

export type DynamicProductPageProps = {
  slug: string;
};

export type OrderPageProps = {
  UID: string;
};

export type CartItem = Item & {
  cartImageUrl: string;
  cartImageAlt: string;
  cartItemDescription: string;
  cartItemLink: string;
  cartItemName: string;
  quantity: number;
};

export type PageMetaData = {
  isNavBarPage: boolean;
  name: PageNames;
  position: number;
  fallBackPath: string;
};

export type ProductEntry =
  | ArrayElement<LaptopData>
  | ArrayElement<TowerData>
  | ArrayElement<MonitorData>
  | ArrayElement<OtherProductsData>;

export type ProductEntryWithLink = ProductEntry & {
  link: string;
};
export type FilteredProductEntry = ArrayElement<FilteredLaptopData>;

export enum Filters {
  GAMINTOJAS = "gamintojas",
  PROCESORIUS = "procesorius",
  EKRANO_DYDIS = "ekrano_dydis",
  SSD_TALPA = "ssd_talpa",
  RUSIAVIMAS = "rusiavimas",
  PREKES_TIPAS = "prekes_tipas",
  PAGE = "page",
}

export type EnabledFilters = {
  [filterBlockName: string]: {
    [filter: string]: boolean;
  };
};

export type ManufacturerFilter = { [Filters.GAMINTOJAS]: StringOrStringArray };
export type CPUFilter = { [Filters.PROCESORIUS]: StringOrStringArray };
export type DisplaySizeFilter = { [Filters.EKRANO_DYDIS]: StringOrStringArray };
export type OtherProductFilter = { [Filters.PREKES_TIPAS]: StringOrStringArray };
export type SSDFilter = { [Filters.SSD_TALPA]: StringOrStringArray };
export type SortOrder = { [Filters.RUSIAVIMAS]: string };
export type PageFilter = { [Filters.PAGE]: string };

export type PossiblySortOrder = SortOrder | undefined;
export type PossiblyManufacturerFilter = ManufacturerFilter | undefined;
export type PossiblyCPUFilter = CPUFilter | undefined;
export type PossiblyDisplaySizeFilter = DisplaySizeFilter | undefined;
export type PossiblySSDFilter = SSDFilter | undefined;

export type PossiblyLaptopData = FilteredLaptopData | undefined;
export type PossiblyTowerData = FilteredTowerData | undefined;
export type PossiblyManufacturerData = ManufacturerData | undefined;
export type PossiblyCPUData = CPUData | undefined;
export type PossiblyDisplaySizeData = DisplaySizeData | undefined;
export type PossiblySSDData = SSDData | undefined;

export enum SortOrderTypes {
  FromLowest = "nuo_pigiausio",
  FromMostExpensive = "nuo_brangiausio",
}

export type PageNames = keyof Omit<Resources["meta"], "paths">;

export type LaptopProducts = Array<{
  cpu: string;
  id: string | null | undefined;
  display_size: string;
  readonly link: string;
  manufacturer: string;
  name: string;
  price: number;
  ssd: string;
  productCardImage: {
    alt: string;
    url: any;
    width: number;
    height: number;
  };
  productCardSubtitle: string;
  productThumbnail: {
    alt: string;
    url: any;
  };
  quantity: number;
  slug: string;
}>;

export type TowerProducts = Array<{
  cpu: string;
  id: string | null | undefined;
  readonly link: string;
  manufacturer: string;
  name: string;
  price: number;
  productCardImage: {
    alt: string;
    url: any;
    width: number;
    height: number;
  };
  productCardSubtitle: string;
  productThumbnail: {
    alt: string;
    url: any;
  };
  quantity: number;
  slug: string;
}>;

export type MonitorProducts = Array<{
  id: string | null | undefined;
  display_size: string;
  readonly link: string;
  manufacturer: string;
  name: string;
  price: number;
  productCardImage: {
    alt: string;
    url: any;
    width: number;
    height: number;
  };
  productCardSubtitle: string;
  productThumbnail: {
    alt: string;
    url: any;
  };
  quantity: number;
  slug: string;
}>;

export type OtherProducts = Array<{
  id: string | null | undefined;
  readonly link: string;
  manufacturer: string;
  name: string;
  price: number;
  productCardImage: {
    alt: string;
    url: any;
    width: number;
    height: number;
  };
  productCardSubtitle: string;
  productThumbnail: {
    alt: string;
    url: any;
  };
  quantity: number;
  slug: string;
  productModel: string;
  productType: string;
}>;

export type Order = {
  products: Array<{
    id: number;
    quantity: number;
  }>;
};
