
import "./searc-box.styles.css";
import { ChangeEvent } from 'react';


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
