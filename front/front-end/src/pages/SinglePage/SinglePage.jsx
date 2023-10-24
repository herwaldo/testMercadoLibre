
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import '../../App.css';

export const SinglePage = () => {
  const params = useParams();
  const { data } = useFetch({ url: `items/${params.id}` });

  if (!data) {
    return <div>Loading...</div>;
  }
  const array = Object.values(data);
  return (
    <div className="SinglePage">
      <main className="SinglePage--main">
        <h2> {array[0].title} </h2>
        <section className="SinglePage--Section">
          <img src={array[0].thumbnail} alt="Imagen de producto" className="SinglePage--img"/>
          <section>
            <h3 className="SinglePage--mainTitle">Descripcion del producto</h3>
            <p className="SinglePage--descripcion">{array[0].descripcion}</p>
          </section>
        </section>
        <sidebar className="SinglePage--Sidebar">
          <h3 className="SinglePage--Sidebar--titulo">{array[0].title}</h3>
          <h3 className="SinglePage--Sidebar--precio">$ {array[0].price}</h3>
          <button className="SinglePage--buy">Comprar ahora</button>
        </sidebar>
      </main>
    </div>
  );
}