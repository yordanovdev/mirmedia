import { useRouter } from "next/router";

const useAuth = () => {
  const router = useRouter();

  const checkAuth = () => {
    if (localStorage.accessToken) {
      return;
    } else {
      router.push("/login");
    }
  };

  const isAuth = () => {
    return localStorage.accessToken;
  };

  return { checkAuth, isAuth };
};

export { useAuth };
