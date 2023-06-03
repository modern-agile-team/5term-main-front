import { useAccessTokenQuery } from "queries/auth.queries";
import React, { ReactNode, useEffect } from "react";

interface AuthProps {
  children: ReactNode;
}
const Auth = ({ children }: AuthProps) => {
  useAccessTokenQuery();

  return <>{children}</>;
};

export default Auth;
