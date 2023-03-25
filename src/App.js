import React, { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

export default function App() {
  const [searchField, setSearchField] = useState("")
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  const onSearchChange = (event) => {
    const searchFieldValue = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldValue)
  }

  const filteredMonstersList = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField)
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
    const filteredMonstersList = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    setFilteredMonsters(filteredMonstersList)
  }, [searchField, monsters])

  return (
    < div className="App" >
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox onSearchHandler={onSearchChange} placeholder="search monsters" className="monsters-search-box" />
      <CardList monsters={filteredMonstersList} />

    </div>
  )
}

// class App extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(r => r.json())
//       .then(users => this.setState(() => {
//         return { monsters: users }
//       }
//       ))
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase()

//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render() {
//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this

//     const filteredMonstersList = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox onSearchHandler={onSearchChange} placeholder="search monsters" className="monsters-search-box" />
//         <CardList monsters={filteredMonstersList} />

//       </div>
//     );

//   }
// }

// export default App;