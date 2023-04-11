"use client";

import { FC, useEffect, useState } from "react";

interface IClientComponent {
  children: React.ReactNode;
}

const ClientComponent: FC<IClientComponent> = ({ children }) => {
  const [hasComponentMounted, setHasComponentMounted] = useState(false);

  useEffect(() => {
    setHasComponentMounted(true);
  }, []);

  if (!hasComponentMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientComponent;
