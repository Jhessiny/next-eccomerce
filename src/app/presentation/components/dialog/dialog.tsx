import React, { PropsWithChildren } from "react";
import { Card, Overlay, Portal } from "@/app/presentation/components";
import { IoMdClose } from "react-icons/io";

type Props = PropsWithChildren & {
  className?: string;
  paddingCard?: string;
  close: () => void;
};

export const Dialog = ({ children, className, paddingCard, close }: Props) => {
  return (
    <Portal>
      <Overlay />
      <div className="absolute top-0 w-full h-full flex items-center justify-center">
        <Card paddingClasses={paddingCard} className={`${className}`}>
          <div
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => close()}
          >
            <IoMdClose size={20} />
          </div>
          {children}
        </Card>
      </div>
    </Portal>
  );
};
