import React, { PropsWithChildren, useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  const queryClient = useRef(new QueryClient());
  return (
    <QueryClientProvider client={queryClient.current}>
      {children}
    </QueryClientProvider>
  );
};
