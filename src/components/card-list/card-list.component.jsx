import { CardListContainer } from "./card-list.styles.jsx"
import Card from '../card/card.component'

export default function CardList(props) {
    const { monsters } = props

    return (
        <CardListContainer>
            {monsters.map((monster) => {
                const { name, id, email } = monster

                return (
                    <Card id={id} name={name} email={email} key={id} />

                )
            })}
        </CardListContainer>
    )
}

// class CardList extends Component {
//     constructor() {
//         super()
//     }

//     render() {
//         const { monsters } = this.props

//         return (
//             <div className="card-list">
//                 {monsters.map((monster) => {
//                     const { name, id, email } = monster

//                     return (
//                         <Card id={id} name={name} email={email} />

//                     )
//                 })}
//             </div>
//         )
//     }

// }

// export default CardList