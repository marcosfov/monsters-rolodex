import { ChangeEventHandler } from "react";
import { SearchBoxInput } from "./search-box.styles.jsx";

interface ISeachBoxInput {
  placeholder?: string;
  onSearchHandler: ChangeEventHandler<HTMLInputElement>;
}

export default function SearchBox({
  placeholder,
  onSearchHandler,
}: ISeachBoxInput) {
  return (
    <SearchBoxInput
      type="search"
      placeholder={placeholder}
      onChange={onSearchHandler}
    />
  );
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
