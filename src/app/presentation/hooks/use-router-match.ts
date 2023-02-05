import { useRouter } from "next/router";

export const useRouteMatch = (route: string) => {
  const { pathname } = useRouter();
  const cleanPathName = pathname.replace("/", "");
  const isMatch = cleanPathName === route;

  return isMatch;
};
