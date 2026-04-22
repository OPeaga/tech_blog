"use client";
import { useState } from "react";
import { LoginContext } from "../context";

export default function LoginProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState({ id: "12", name: "Pedro" });

  return (
    <LoginContext.Provider value={{ ...user, setLoginContext: setUser }}>
      {children}
    </LoginContext.Provider>
  );
}
