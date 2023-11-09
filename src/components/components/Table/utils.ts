import { useSingleState } from "@/utils/hooks/useSingleState";
import { ICellView } from "./interface";
import { useEffect } from "react";

export const viewIsAnObject = <TRow, View extends ReturnType<ICellView<TRow>>>(
    view: View
  ): view is (Exclude<View, React.ReactNode>) =>
    typeof view !== "string" &&
    typeof view !== "boolean" &&
    typeof view !== "number" &&
    view &&
    "desktop" in view
  

export const useIsMobile = (breakpoint: number = 768) => {
    const isMobile = useSingleState(false);
    useEffect(() => {
      const handleResize = () => {
        isMobile.set(window.innerWidth < breakpoint);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return { isMobile: isMobile.get };
  };
  