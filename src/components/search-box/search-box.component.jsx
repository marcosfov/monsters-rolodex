import { SearchBoxInput } from "./search-box.styles.jsx"

export default function SearchBox(props) {
    return (
        <SearchBoxInput
            type="search"
            placeholder={props.placeholder}
            onChange={props.onSearchHandler}
        />
    )

}

// class SearchBox extends Component {
//     render() {

//         return (
//             <input
//                 className={`search-box ${this.props.className}`}
//                 type="search"
//                 placeholder={this.props.placeholder}
//                 onChange={this.props.onSearchHandler}
//             />
//         )
//     }
// }

// export default SearchBox