import { createContext } from "react";

export const SomeContext = createContext();

export const HookUseContext = ({ children }) => {
  const value = "testing context";

  return <SomeContext.Provider value={value}>{children}</SomeContext.Provider>;
};
