import { ListItem } from "../ListItem/ListItem"
import '../../App.css';

export const List = ({ data }) => {
    return (
      <section className="List">
        <div className="List--container">
          {data.map(item => <ListItem 
                        key={item.id}
                        id={item.id}
                        thumbnail={item.thumbnail} 
                        price={item.price}
                        title={item.title}
                        state_name={item.state_name}/>)}
        </div>
      </section>
    )
  }