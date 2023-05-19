import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `DollDroid | ${title}`;
  }, [title]);
};
export default useTitle;
