import { useSession, signOut } from "next-auth/react";
import React, { useContext, useState } from "react";
import { NavItem } from "../";
import { Context } from "@/app/main/providers/context-provider";
import Image from "next/image";
import { inlineFn } from "@/app/presentation/helpers";

export const LoginLogout = () => {
  const { data: session } = useSession();
  const { toggleLoginDialogOpen } = useContext(Context);
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropDown = () => setIsDropdownOpen((prev) => !prev);

  if (!session)
    return (
      <NavItem href="/" action={inlineFn(toggleLoginDialogOpen, true)}>
        Login
      </NavItem>
    );

  const userImage = session.user?.image ?? "";
  const useName = session.user?.name?.split(" ")[0] ?? "";
  return (
    <div className="relative">
      <NavItem href="/" action={toggleDropDown}>
        <div className="flex items-center">
          <Image
            alt="profile picture"
            width={28}
            height={28}
            className="w-7 h-7 rounded-full mr-1"
            src={userImage}
          />
          {useName}
        </div>
      </NavItem>
      {isDropDownOpen && (
        <ul className="absolute left-0 top-[80%] bg-slate-100 text-gray-900">
          <li className="p-2" onClick={() => signOut()}>
            logout
          </li>
          <li className="p-2">Orders</li>
        </ul>
      )}
    </div>
  );
};
