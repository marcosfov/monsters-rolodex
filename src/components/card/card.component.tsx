import { CardContainer } from "./card.styles.jsx";
import { IMonster } from "../../App";

export default function Card({ name, id, email }: IMonster) {
  return (
    <CardContainer key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </CardContainer>
  );
}
// class Card extends Component {

//     render() {
//         const { name, id, email } = this.props
//         return (
//             <div className="card-container" key={id}>
//                 <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
//                 <h1>{name}</h1>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }

// export default Card
