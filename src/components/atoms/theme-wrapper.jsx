"use client";

import { ThemeProvider } from "next-themes";

export function ThemeWrapper({ children, ...props }) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
