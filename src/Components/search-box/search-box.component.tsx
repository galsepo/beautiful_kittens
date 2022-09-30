
import "./searc-box.styles.css";
import { ChangeEvent } from 'react';
/* TS*/

type ISearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ className, placeholder, onChangeHandler }: ISearchBoxProps) => (

    <input type='search'
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
)

export default SearchBox;

// class SearchBox extends Component {

//     render() {
//         return (
//             <input type='search'
//                 className={`search-box ${this.props.className}`}
//                 placeholder={this.props.placeholder}
//                 onChange={this.props.onChangeHandler}
//             />
//         )
//     }
// }

/* JS */
// const SearchBox = ({ className, placeholder, onChangeHandler }) => (

//     <input type='search'
//         className={`search-box ${className}`}
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//     />
// )