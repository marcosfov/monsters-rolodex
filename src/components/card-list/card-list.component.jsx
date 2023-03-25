import { Component, useState } from "react";
import "./card-list.styles.css"
import Card from '../card/card.component'

export default function CardList(props) {
    const { monsters } = props

    return (
        <div className="card-list">
            {monsters.map((monster) => {
                const { name, id, email } = monster

                return (
                    <Card id={id} name={name} email={email} key={id} />

                )
            })}
        </div>
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