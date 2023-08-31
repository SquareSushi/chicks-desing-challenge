import { Search } from '../svgs';
import classes from './SearchBar.module.css';


function SearchBar () {
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}><Search className={classes.lens}/></div>
            <input type="text" placeholder="Search" />
        </div>
    )
}

export default SearchBar;