import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColor = () => {
  const context = useContext(TitleColorContext);
  if (!context)
    throw new Error("iseTitleColor must be used within a Title Color Context");

  return context;
};
