import * as React from "react";
import { ThemeProvider, type PaletteMode } from "@mui/material/styles";

import { createAppTheme } from "@/src/theme";

const STORAGE_KEY = "kompservisas-color-mode";

type ColorModeContextValue = {
  mode: PaletteMode;
  toggleColorMode: () => void;
};

const ColorModeContext = React.createContext<ColorModeContextValue | null>(null);

export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = React.useState<PaletteMode>("light");

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as PaletteMode | null;
      if (stored === "light" || stored === "dark") {
        setModeState(stored);
        return;
      }
    } catch {
      /* ignore */
    }
    if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setModeState("dark");
    }
  }, []);

  const toggleColorMode = React.useCallback(() => {
    setModeState((prev) => {
      const next = prev === "light" ? "dark" : "light";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const theme = React.useMemo(() => createAppTheme(mode), [mode]);

  const value = React.useMemo(
    () => ({
      mode,
      toggleColorMode,
    }),
    [mode, toggleColorMode]
  );

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  const ctx = React.useContext(ColorModeContext);
  if (!ctx) {
    throw new Error("useColorMode must be used within ColorModeProvider");
  }
  return ctx;
}
