declare module "@builder.io/partytown/react" {
  import type { FC } from "react";

  export const Partytown: FC<{
    debug?: boolean;
    forward?: string[];
  }>;
}
