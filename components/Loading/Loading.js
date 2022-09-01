import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.asPath]);

  return loading ? (
    <div className="spinner-wrapper">
      <RotatingLines
        strokeColor="purple"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={loading}
      />
    </div>
  ) : (
    <></>
  );
}

export default Loading;
