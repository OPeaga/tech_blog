"use client";
import { createContext } from "react";

type LoginContextType = {
  id: string;
  name: string;
  setLoginContext: (data: { id: string; name: string }) => void;
};

export const LoginContext = createContext<LoginContextType>({
  id: "",
  name: "",
  setLoginContext: () => {},
});
