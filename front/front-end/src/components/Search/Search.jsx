import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { List }  from "../";
import { useFetch } from "../../hooks/useFetch";

export const Search = () => {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");
  const { data } = useFetch({ url: `items?q=${searchValue}&limit=4` });

  const handleNextClick = () => {
    if (page<data.total) 
    setPage(prevValue => prevValue + 1);
  }

  const handlePreviousClick = () => {
    if (page>1) 
    setPage(prevValue => prevValue - 1)
  }

  useEffect(() => {
    setPage(1)
  }, [searchValue])

  if (!data) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <List data={data.results} />
      <div className="Search--paginacion">
        <button onClick={handlePreviousClick} className={(page>1)?"Search--arrows":"hidden"}>
        {"< "} Anterior  
        </button>
        <button className="Search--current">{page}</button>
        <p>de {data.total}</p>
        <button onClick={handleNextClick} className={(page<data.total)?"Search--arrows":"hidden"}>
          Siguiente  {" >"}
        </button>
    </div>
    </div>
  )
}