import React, { PropsWithChildren, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useMount } from "@/app/presentation/hooks";

export const Portal = ({ children }: PropsWithChildren) => {
  const portalRef = useRef<Element | null>(null);
  const isMounted = !useMount();

  useEffect(() => {
    portalRef.current = document.querySelector<HTMLElement>("#portal");
  }, []);

  if (!portalRef.current || !isMounted) return null;

  return createPortal(<>{children}</>, portalRef.current);
};
