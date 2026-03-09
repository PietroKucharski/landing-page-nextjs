"use client";

import { useEffect } from "react";

export const ErrorComponent = () => {
  useEffect(() => {
    throw new Error('Componente lançando um error')
  }, []);

  return (
    <div>
      <h2>Error</h2>
    </div>
  );
};
