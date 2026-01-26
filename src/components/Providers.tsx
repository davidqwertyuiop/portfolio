"use client";

import { RoleProvider } from "./RoleContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RoleProvider>
      {children}
    </RoleProvider>
  );
}
