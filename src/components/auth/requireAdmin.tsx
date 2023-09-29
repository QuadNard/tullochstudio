import React, { PropsWithChildren } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";




const RequireAdmin = ({ children }: PropsWithChildren) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (
    status === "unauthenticated" ||
    !session?.user.is_admin ||
    !session?.user.is_active 
  ) {
    router.push("/writing");
  }
  return children as JSX.Element;
};

export default RequireAdmin;