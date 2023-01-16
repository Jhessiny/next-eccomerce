import { useSession, signIn } from "next-auth/react";
import React, { useContext } from "react";
import { Context } from "../../../main/providers/context-provider";
import { Button } from "../button/button";
import { Dialog } from "../dialog/dialog";

export const LoginDialog = () => {
  const { data: session } = useSession();
  const { toggleLoginDialogOpen } = useContext(Context);

  if (session) return null;

  return (
    <Dialog paddingCard="px-6 py-8" close={() => toggleLoginDialogOpen(false)}>
      <h2 className="font-bold text-lg mb-6">Choose how you want to login</h2>
      <div className="flex justify-center">
        <Button action={() => signIn()}>Login with google</Button>
      </div>
    </Dialog>
  );
};
