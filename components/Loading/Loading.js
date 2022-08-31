import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 500);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    loading && (
      <div className="spinner-wrapper">
        <RotatingLines
          strokeColor="purple"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    )
  );
}

export default Loading