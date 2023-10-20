import { ListItem } from "../ListItem/ListItem"
import '../../App.css';

export const List = ({ data }) => {
    return (
      <section className="List">
        <div className="List--container">
          {data.map(item => <ListItem {...item} key={item.id}  state_name={item.state_name}/>)}
        </div>
      </section>
    )
  }