import { useCallback, useEffect, useState } from "react";
import { endPointBack } from "../services/endpoint";


export function useFetch({ url }) {
  const [data, setData] = useState();

  const fetch = useCallback(async () => {
    const response = await endPointBack.get(url);
    setData(response.data);
  }, [url]);

  useEffect(() => {
    fetch();
  }, [fetch, url]);

  return { data, fetch };
}