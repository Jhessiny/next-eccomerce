import { useSession, signOut } from "next-auth/react";
import React, { useContext, useEffect, useState } from "react";
import { NavItem } from "../nav-item/nav-item";
import { Context } from "../../../../../../../main/providers/context-provider";
import Image from "next/image";

export const LoginLogout = () => {
  const { data: session } = useSession();
  const { toggleLoginDialogOpen, isLoginDialogOpen } = useContext(Context);
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);

  if (!session)
    return (
      <NavItem href="/" action={() => toggleLoginDialogOpen(true)}>
        Login
      </NavItem>
    );

  const userImage = session.user?.image ?? "";
  const useName = session.user?.name?.split(" ")[0] ?? "";
  return (
    <div className="relative">
      <NavItem href="/" action={() => setIsDropdownOpen((prev) => !prev)}>
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
